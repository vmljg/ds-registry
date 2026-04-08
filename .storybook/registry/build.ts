#!/usr/bin/env bun

/**
 * Build script for the DS Registry Storybook add-on
 * Uses Bun's native bundler and transpiler
 */

import { rmSync } from "node:fs";
import { $ } from "bun";

// Clean dist directory
console.log("🧹 Cleaning dist directory...");
rmSync("dist", { recursive: true, force: true });

const browserEntries = [
  "src/index.ts",
  "src/manager.tsx",
  "src/preview.ts",
  "src/utils/analyze-story.ts",
];
const nodeEntries = ["src/preset.ts"];

const external = [
  "@storybook/addon-docs/blocks",
  "storybook/internal/components",
  "storybook/internal/core-events",
  "storybook/manager-api",
  "storybook/preview-api",
  "storybook/internal/types",
  "react",
  "react-dom",
];

console.log("⚡ Using Bun's native bundler");

// Build ESM for browser entries (manager, preview, index)
console.log("📦 Building ESM (browser)...");
await Bun.build({
  entrypoints: browserEntries,
  outdir: "dist",
  format: "esm",
  target: "browser",
  external,
  naming: "[dir]/[name].js",
  sourcemap: "external",
  minify: false,
});

// Build CJS for browser entries (manager, preview, index)
console.log("📦 Building CJS (browser)...");
await Bun.build({
  entrypoints: browserEntries,
  outdir: "dist",
  format: "cjs",
  target: "browser",
  external,
  naming: "[dir]/[name].cjs",
  sourcemap: "external",
  minify: false,
});

// Build CJS for Node entries (preset)
console.log("📦 Building CJS (node)...");
await Bun.build({
  entrypoints: nodeEntries,
  outdir: "dist",
  format: "cjs",
  target: "node",
  external,
  naming: "[dir]/[name].cjs",
  sourcemap: "external",
  minify: false,
});

// Generate type definitions using TypeScript compiler
console.log("📝 Generating type definitions...");
await $`tsc --emitDeclarationOnly --declaration --declarationMap`;

console.log("✅ Build complete!");
