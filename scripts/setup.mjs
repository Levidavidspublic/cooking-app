#!/usr/bin/env node
/**
 * Bootstrap a fresh clone: Convex project + local env stubs.
 * Safe to re-run. Does not print secret file contents.
 */
import { spawnSync } from "node:child_process";
import { existsSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

function run(cmd, args, opts = {}) {
  console.log(`\n> ${cmd} ${args.join(" ")}`);
  const res = spawnSync(cmd, args, {
    stdio: "inherit",
    shell: true,
    cwd: opts.cwd ?? root,
    env: process.env,
  });
  if (res.status !== 0 && !opts.allowFail) {
    process.exit(res.status ?? 1);
  }
  return res.status ?? 0;
}

function ensureEnvExampleCopy(appRel, exampleName, targetName) {
  const example = join(root, appRel, exampleName);
  const target = join(root, appRel, targetName);
  if (!existsSync(example)) {
    console.warn(`skip: missing ${exampleName} under ${appRel}`);
    return;
  }
  if (existsSync(target)) {
    console.log(`keep existing ${appRel}/${targetName}`);
    return;
  }
  writeFileSync(target, readFileSync(example));
  console.log(`created ${appRel}/${targetName} from ${exampleName} (fill in values)`);
}

console.log("=== monorepo-template setup ===");
console.log("Root:", root);

// 1) Convex login (interactive if needed)
run("pnpm", ["--filter", "@app/backend", "exec", "convex", "login"], {
  allowFail: true,
});

// 2) Configure / create deployment + codegen (once)
const backendDir = join(root, "packages", "backend");
run(
  "pnpm",
  ["exec", "convex", "dev", "--once", "--configure=new"],
  { cwd: backendDir, allowFail: true },
);

// If configure=new failed (already configured), try once without configure
if (!existsSync(join(backendDir, ".env.local")) && !existsSync(join(backendDir, ".env"))) {
  run("pnpm", ["exec", "convex", "dev", "--once"], {
    cwd: backendDir,
    allowFail: true,
  });
}

// 3) Local env stubs from examples (never overwrite)
ensureEnvExampleCopy("apps/web", ".env.example", ".env.local");
ensureEnvExampleCopy("apps/mobile", ".env.example", ".env.local");
ensureEnvExampleCopy("apps/landing", ".env.example", ".env.local");

console.log(`
=== Next steps ===
1. Copy the Convex URL from packages/backend (.env.local / dashboard)
   into BOTH:
   - apps/web/.env.local      → NEXT_PUBLIC_CONVEX_URL
   - apps/mobile/.env.local   → EXPO_PUBLIC_CONVEX_URL
2. Vercel (web):     pnpm run vercel:web
3. Vercel (landing): pnpm run vercel:landing
4. Expo Go:          pnpm dev:mobile   (scan QR with Expo Go)
5. Dev all:          pnpm dev:backend  (separate terminal) + pnpm dev:web
`);
