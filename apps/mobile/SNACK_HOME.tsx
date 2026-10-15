/**
 * Expo Snack Demo - Home Screen
 * Simplified version without Convex backend for Snack preview
 */

import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomePage() {
  // Mock user data instead of Convex query
  const displayName = 'משתמש דמו';

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: '#0a0a0a' }}
      edges={['top']}
    >
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            maxWidth: 768,
            width: '100%',
            marginHorizontal: 'auto',
            paddingHorizontal: 32,
            paddingBottom: 48,
            paddingTop: 32,
          }}
        >
          <Text
            style={{
              color: '#ededed',
              fontSize: 36,
              fontWeight: 'bold',
              marginBottom: 12,
              textAlign: 'right',
            }}
          >
            ברוכים הבאים
          </Text>
          <Text
            style={{
              color: '#4fc3f7',
              fontSize: 18,
              fontWeight: '500',
              marginBottom: 20,
              textAlign: 'right',
            }}
          >
            שלום, {displayName}!
          </Text>
          <Text
            style={{
              color: '#ededed',
              fontSize: 16,
              lineHeight: 28,
              textAlign: 'right',
            }}
          >
            זהו תבנית אפליקציית React Native עם תמיכה מלאה בעברית מימין לשמאל.
            האפליקציה מכילה מערכת ניווט עם שלושה עמודים נוספים, ומספקת נקודת
            התחלה מצוינת לפיתוח יישומים בעברית. הממשק מותאם לכיוון כתיבה מימין
            לשמאל, והטקסט מוצג בצורה נכונה ונוחה לקריאה.
          </Text>

          {/* Feature Cards */}
          <View style={{ marginTop: 32, gap: 16 }}>
            <View
              style={{
                backgroundColor: '#18181b',
                borderRadius: 12,
                padding: 20,
                borderWidth: 1,
                borderColor: '#27272a',
              }}
            >
              <Text
                style={{
                  color: '#4fc3f7',
                  fontSize: 20,
                  fontWeight: '600',
                  marginBottom: 8,
                  textAlign: 'right',
                }}
              >
                ✨ תכונות
              </Text>
              <Text
                style={{ color: '#a1a1aa', fontSize: 14, textAlign: 'right' }}
              >
                • React Native עם Expo
              </Text>
              <Text
                style={{ color: '#a1a1aa', fontSize: 14, textAlign: 'right' }}
              >
                • תמיכה ב-RTL/עברית
              </Text>
              <Text
                style={{ color: '#a1a1aa', fontSize: 14, textAlign: 'right' }}
              >
                • NativeWind (Tailwind)
              </Text>
            </View>

            <View
              style={{
                backgroundColor: '#18181b',
                borderRadius: 12,
                padding: 20,
                borderWidth: 1,
                borderColor: '#27272a',
              }}
            >
              <Text
                style={{
                  color: '#4fc3f7',
                  fontSize: 20,
                  fontWeight: '600',
                  marginBottom: 8,
                  textAlign: 'right',
                }}
              >
                🚀 טכנולוגיות
              </Text>
              <Text
                style={{ color: '#a1a1aa', fontSize: 14, textAlign: 'right' }}
              >
                • Backend: Convex
              </Text>
              <Text
                style={{ color: '#a1a1aa', fontSize: 14, textAlign: 'right' }}
              >
                • תשלומים: RevenueCat
              </Text>
              <Text
                style={{ color: '#a1a1aa', fontSize: 14, textAlign: 'right' }}
              >
                • TypeScript
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
