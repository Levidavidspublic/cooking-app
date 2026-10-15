import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// שליפת המשתמש הנוכחי המחובר
// מחזיר null אם המשתמש לא מחובר
export const getCurrentUser = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return null;
    }

    // ב-Convex Auth, ה-subject מכיל: authAccountId|userId
    // נחלץ את ה-userId מהחלק השני
    const subjectParts = identity.subject.split("|");
    if (subjectParts.length >= 2) {
      const userId = subjectParts[1] as import("./_generated/dataModel").Id<"users">;
      try {
        const user = await ctx.db.get(userId);
        if (user) {
          return user;
        }
      } catch {
        // ID לא תקין, נמשיך לחלופות
      }
    }

    // Fallback: חיפוש לפי אימייל
    if (identity.email) {
      const user = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", identity.email ?? ""))
        .unique();
      if (user) {
        return user;
      }
    }

    return null;
  },
});

// שליפת משתמש לפי מזהה (ID)
export const getById = query({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => await ctx.db.get(userId),
});

// שליפת רשימת כל המשתמשים הפעילים
export const listActive = query({
  args: {},
  handler: async (ctx) =>
    await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect(),
});

// יצירה או עדכון של משתמש (נקרא בדרך כלל מתהליך האימות)
export const createOrUpdateUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const email = identity.email ?? "";
    const now = Date.now();

    // בדיקה אם המשתמש כבר קיים
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();

    const userData = {
      email,
      emailVerified: identity.emailVerified ?? false,
      fullName: identity.name || identity.nickname || "User",
      role: "user" as const,
      userType: "free" as const, // ברירת מחדל - משתמש חינמי
      isActive: true,
      updatedAt: now,
    };

    // עדכון משתמש קיים
    if (existing) {
      await ctx.db.patch(existing._id, userData);
      return existing._id;
    }

    // יצירת משתמש חדש
    return await ctx.db.insert("users", {
      ...userData,
      createdAt: now,
    });
  },
});

// עדכון פרופיל המשתמש (למשל, שינוי שם)
export const updateProfile = mutation({
  args: {
    userId: v.id("users"),
    fullName: v.optional(v.string()),
  },
  handler: async (ctx, { userId, fullName }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    await ctx.db.patch(userId, {
      fullName,
      updatedAt: Date.now(),
    });

    return userId;
  },
});

// מחיקת משתמש (פעולה למנהלים או למשתמש עצמו)
export const remove = mutation({
  args: { userId: v.id("users") },
  handler: async (ctx, { userId }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    await ctx.db.delete(userId);
  },
});

// ============================================================================
// תשלומים / סטטוס משתמש
// ============================================================================

// עדכון סוג המשתמש (חינמי/בתשלום)
// נועד לשימוש לאחר תשלום מוצלח או במצב בדיקה (Mock)
export const updateUserType = mutation({
  args: {
    userType: v.union(v.literal("free"), v.literal("paid")),
  },
  handler: async (ctx, { userType }) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("לא מחובר למערכת");
    }

    // ב-Convex Auth, ה-subject מכיל: authAccountId|userId
    let user = null;
    const subjectParts = identity.subject.split("|");
    if (subjectParts.length >= 2) {
      const userId = subjectParts[1] as import("./_generated/dataModel").Id<"users">;
      try {
        user = await ctx.db.get(userId);
      } catch {
        // ID לא תקין, נמשיך לחלופות
      }
    }

    // Fallback: חיפוש לפי אימייל
    if (!user && identity.email) {
      user = await ctx.db
        .query("users")
        .withIndex("by_email", (q) => q.eq("email", identity.email ?? ""))
        .unique();
    }

    if (!user) {
      throw new Error("משתמש לא נמצא");
    }

    await ctx.db.patch(user._id, {
      userType,
      updatedAt: Date.now(),
    });

    return user._id;
  },
});

// ============================================================================
// מחיקת חשבון
// ============================================================================

// מחיקת חשבון המשתמש הנוכחי וכל הנתונים המשויכים אליו
// ⚠️ אזהרה: פעולה זו בלתי הפיכה ותמחק את כל הנתונים לצמיתות!
export const deleteMyAccount = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("לא מחובר למערכת");
    }

    // קבלת מזהה המשתמש מה-identity
    const userId = identity.subject;
    let deletedCount = 0;

    // כאן תוכל להוסיף מחיקה של טבלאות נוספות שקשורות למשתמש
    // לדוגמה:
    // const userPosts = await ctx.db
    //   .query("posts")
    //   .withIndex("by_user", (q) => q.eq("userId", userId))
    //   .collect();
    // for (const post of userPosts) {
    //   await ctx.db.delete(post._id);
    //   deletedCount += 1;
    // }

    // מחיקת המשתמש מטבלת המשתמשים
    // הערה: Convex Auth מנהל את טבלת המשתמשים, אך אנחנו יכולים למחוק את הרשומה
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("_id"), userId))
      .first();

    if (user) {
      await ctx.db.delete(user._id);
      deletedCount += 1;
    }

    return {
      success: true,
      message: `נמחקו ${deletedCount} רשומות עבור משתמש ${userId}`,
      deletedCount,
    };
  },
});
