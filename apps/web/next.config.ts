import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@app/backend"],
  // Force Turbopack root to this app so sibling lockfiles elsewhere on disk
  // don't confuse Next's workspace detection.
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
};

export default nextConfig;
