# Component Source Implementation Guide

> **⚠️ DEPRECATED**: This guide is no longer needed. The addon now automatically accesses component source code through Storybook's built-in `parameters.docs.source` API.

~~Currently, the addon generates registry-item JSON with metadata but **does not include the actual component source code**. This guide explains how to implement proper component source fetching.~~

## Current Implementation

The addon now uses **Storybook's native source loading** through:
- `useStorybookApi().getData(storyId)` - Get full story data
- `story.parameters.docs.source.code` - Access story source
- `story.parameters.docs.source.originalSource` - Access component source

This works out of the box with Storybook's docs addon, which automatically attaches source code to story parameters during the build process.

---

## Legacy Guide (For Reference Only)

## Current State

✅ **What works:**
- Story metadata extraction (name, ID)
- Dependency analysis using Bun's transpiler
- Registry-item JSON generation
- Copy to clipboard

❌ **What's missing:**
- Actual component source code in the `files[].content` field

## Implementation Options

### Option 1: Server-Side API (Recommended)

Create a Next.js API route that reads component files from the filesystem.

**Implementation:**

```typescript
// app/api/component-source/route.ts
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const componentPath = searchParams.get("path");
  
  if (!componentPath || !componentPath.startsWith("@/components/")) {
    return NextResponse.json({ error: "Invalid path" }, { status: 400 });
  }
  
  try {
    // Convert @/components/ui/button to src/components/ui/button.tsx
    const filePath = componentPath
      .replace("@/", "src/")
      .replace(/\.(tsx?|jsx?)$/, "") + ".tsx";
    
    const fullPath = join(process.cwd(), filePath);
    const source = await readFile(fullPath, "utf-8");
    
    return NextResponse.json({ source });
  } catch (error) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}
```

**Update manager.tsx:**

```typescript
// In the useEffect hook
const componentPath = extractComponentPath(storySource);
if (componentPath) {
  const response = await fetch(
    `/api/component-source?path=${encodeURIComponent(componentPath)}`
  );
  const { source } = await response.json();
  
  const registryItem = generateRegistryItem(
    storyId,
    story.name,
    source,
    true // Include content
  );
}
```

### Option 2: Build-Time Generation

Pre-generate registry items during the build process.

**Implementation:**

```typescript
// scripts/generate-registry.ts
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "glob";
import { generateRegistryItem } from "../.storybook/registry/src/utils/analyze-story";

async function generateRegistry() {
  const stories = await glob("stories/**/*.stories.tsx");
  const registry = [];
  
  for (const storyPath of stories) {
    const storySource = await readFile(storyPath, "utf-8");
    const componentPath = extractComponentPath(storySource);
    
    if (componentPath) {
      const componentSource = await readFile(
        componentPath.replace("@/", "src/") + ".tsx",
        "utf-8"
      );
      
      const item = generateRegistryItem(
        storyPath,
        "ComponentName",
        componentSource,
        true
      );
      
      registry.push(item);
    }
  }
  
  await writeFile(
    "public/registry-items.json",
    JSON.stringify(registry, null, 2)
  );
}

generateRegistry();
```

Add to `package.json`:
```json
{
  "scripts": {
    "build": "bun run scripts/generate-registry.ts && next build"
  }
}
```

### Option 3: Vite Plugin

Use a Vite plugin to inline component sources at build time.

**Implementation:**

```typescript
// .storybook/plugins/inline-component-source.ts
import type { Plugin } from "vite";
import { readFile } from "node:fs/promises";

export function inlineComponentSource(): Plugin {
  return {
    name: "inline-component-source",
    transform(code, id) {
      if (id.endsWith(".stories.tsx")) {
        // Analyze imports and inline component sources
        // This is complex - requires AST parsing
      }
      return code;
    },
  };
}
```

Add to `.storybook/vite.config.ts`:
```typescript
import { inlineComponentSource } from "./plugins/inline-component-source";

export default {
  plugins: [inlineComponentSource()],
};
```

### Option 4: Storybook Docs Addon Integration

Use Storybook's built-in source decorator.

**Implementation:**

```typescript
// .storybook/registry/src/manager.tsx
import { useStorybookApi } from "storybook/manager-api";

const api = useStorybookApi();
const story = api.getData(storyId);
const storySource = story?.parameters?.docs?.source?.code;

// Then extract component from story source
```

## Recommended Approach

For this project, **Option 1 (Server-Side API)** is recommended because:

1. ✅ Works in development and production
2. ✅ No build-time complexity
3. ✅ Can read any component file on-demand
4. ✅ Easy to implement and maintain
5. ✅ Compatible with Next.js App Router

## Implementation Checklist

- [ ] Create `/app/api/component-source/route.ts`
- [ ] Add security checks (validate paths, prevent directory traversal)
- [ ] Update `manager.tsx` to fetch component source
- [ ] Handle loading states in the UI
- [ ] Add error handling for missing components
- [ ] Test with various component structures
- [ ] Update tests to mock the API endpoint

## Security Considerations

⚠️ **Important:** When implementing component source fetching:

1. **Validate paths**: Only allow reading from specific directories
2. **Prevent directory traversal**: Reject paths with `..` or absolute paths
3. **Rate limiting**: Add rate limits to the API endpoint
4. **Authentication**: Consider requiring auth in production
5. **Whitelist paths**: Only allow reading from known component directories

## Example Security Implementation

```typescript
function isValidComponentPath(path: string): boolean {
  // Only allow @/components/* paths
  if (!path.startsWith("@/components/")) return false;
  
  // Prevent directory traversal
  if (path.includes("..")) return false;
  
  // Only allow specific extensions
  const validExtensions = [".tsx", ".ts", ".jsx", ".js"];
  const hasValidExt = validExtensions.some(ext => path.endsWith(ext));
  
  return hasValidExt;
}
```
