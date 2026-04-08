/**
 * Utility to analyze story code and generate registry-item JSON
 * 
 * Note: To properly generate registry items with component source code,
 * you'll need to implement one of these approaches:
 * 
 * 1. Server-side API: Create an API endpoint that reads component files
 * 2. Build-time generation: Pre-generate registry items during build
 * 3. Docs addon integration: Use @storybook/addon-docs source decorators
 * 4. Custom loader: Use a Vite/webpack plugin to inline component sources
 */

interface RegistryItem {
  $schema: string;
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files?: Array<{
    path: string;
    type: string;
    content?: string;
  }>;
}

interface Registry {
  $schema: string;
  name: string;
  homepage?: string;
  items: Omit<RegistryItem, "$schema">[];
}

/**
 * Scan imports from code using Bun's transpiler (server-side) or regex (browser)
 */
export function scanImports(code: string): string[] {
  try {
    // Check if we're in a Bun runtime (server-side)
    if (typeof Bun !== "undefined" && Bun.Transpiler) {
      const transpiler = new Bun.Transpiler({
        loader: "tsx",
      });
      const result = transpiler.scan(code);
      return result.imports.map((imp) => imp.path);
    }
    
    // Fallback: Use regex for browser environment
    return scanImportsWithRegex(code);
  } catch (error) {
    console.error("Failed to scan imports:", error);
    // Fallback to regex on error
    return scanImportsWithRegex(code);
  }
}

/**
 * Extract component code from story source
 * Tries to extract just the component JSX from the render function
 */
export function extractComponentFromStory(storySource: string): string | null {
  if (!storySource) return null;
  
  // Try to extract code from render function: render: args => (...)
  const renderMatch = storySource.match(/render:\s*(?:args|\(\s*args\s*\)|\{[^}]*\})\s*=>\s*\(?(.+?)(?:\)?,?\s*$|\},)/s);
  if (renderMatch) {
    let extracted = renderMatch[1].trim();
    // Remove trailing parenthesis if present
    extracted = extracted.replace(/\)$/, '').trim();
    // Remove opening parenthesis if present
    extracted = extracted.replace(/^\(/, '').trim();
    return extracted;
  }
  
  // Try to extract from component property: component: <Component ... />
  const componentMatch = storySource.match(/component:\s*(.+?)(?:,|\}|$)/s);
  if (componentMatch) {
    return componentMatch[1].trim();
  }
  
  // If it looks like it's already just JSX, return as is
  if (storySource.trim().startsWith('<') && storySource.trim().endsWith('>')) {
    return storySource.trim();
  }
  
  return null;
}

/**
 * Fallback regex-based import scanner for browser environment
 */
function scanImportsWithRegex(code: string): string[] {
  const imports: string[] = [];
  
  // Match ES6 imports: import ... from "path" or import ... from 'path'
  const importRegex = /import\s+(?:[\w*\s{},]*\s+from\s+)?["']([^"']+)["']/g;
  let match;
  
  while ((match = importRegex.exec(code)) !== null) {
    imports.push(match[1]);
  }
  
  // Match dynamic imports: import("path") or import('path')
  const dynamicImportRegex = /import\s*\(\s*["']([^"']+)["']\s*\)/g;
  while ((match = dynamicImportRegex.exec(code)) !== null) {
    imports.push(match[1]);
  }
  
  // Match require: require("path") or require('path')
  const requireRegex = /require\s*\(\s*["']([^"']+)["']\s*\)/g;
  while ((match = requireRegex.exec(code)) !== null) {
    imports.push(match[1]);
  }
  
  return [...new Set(imports)]; // Remove duplicates
}

/**
 * Categorize imports into dependencies and registry dependencies
 */
export function categorizeImports(imports: string[]): {
  dependencies: string[];
  registryDependencies: string[];
} {
  const dependencies: string[] = [];
  const registryDependencies: string[] = [];

  for (const imp of imports) {
    // Relative imports starting with @/components/ui are registry dependencies
    if (imp.startsWith("@/components/ui/")) {
      const component = imp.replace("@/components/ui/", "").replace(/\.tsx?$/, "");
      registryDependencies.push(component);
    }
    // NPM packages (not starting with . or /)
    else if (!imp.startsWith(".") && !imp.startsWith("/") && !imp.startsWith("@/")) {
      dependencies.push(imp);
    }
  }

  return {
    dependencies: [...new Set(dependencies)],
    registryDependencies: [...new Set(registryDependencies)],
  };
}

/**
 * Generate registry-item JSON from story metadata and component code
 * 
 * @param storyId - The story ID
 * @param storyName - The story name
 * @param componentCode - The actual component source code (not the story code)
 * @param includeContent - Whether to include the code content in the output
 */
/**
 * Extract the main component import path from story code
 * This can be used to identify which component file to fetch
 */
export function extractComponentPath(storyCode: string): string | null {
  const imports = scanImports(storyCode);
  
  // Look for UI component imports
  const uiImport = imports.find(imp => imp.startsWith("@/components/ui/"));
  if (uiImport) {
    return uiImport;
  }
  
  // Look for custom component imports
  const componentImport = imports.find(imp => imp.startsWith("@/components/"));
  if (componentImport) {
    return componentImport;
  }
  
  return null;
}

/**
 * Fetch component source code from the filesystem or API
 * This is a placeholder - implement based on your setup
 */
export async function fetchComponentSource(
  componentPath: string
): Promise<string | null> {
  // TODO: Implement component source fetching
  // Options:
  // 1. Make API call: fetch(`/api/component-source?path=${componentPath}`)
  // 2. Use import.meta.glob in Vite to load sources
  // 3. Read from a pre-built component source map
  
  console.warn(
    `fetchComponentSource not implemented. Need to fetch: ${componentPath}`
  );
  return null;
}

export function generateRegistryItem(
  storyId: string,
  storyName: string,
  componentCode?: string,
  includeContent: boolean = false
): RegistryItem {
  const imports = componentCode ? scanImports(componentCode) : [];
  const { dependencies, registryDependencies } = categorizeImports(imports);

  const name = storyId
    .toLowerCase()
    .replace(/--/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  // Match project structure: UI primitives use registry:ui type and layout files
  // Custom components use registry:component with actual component files
  const isUiPrimitive = storyId.includes("components-ui-");
  
  const files: Array<{
    path: string;
    type: string;
    target?: string;
    content?: string;
  }> = [
    {
      path: "src/layouts/minimal-layout.tsx",
      type: "registry:file",
      target: "app/layout.tsx",
    },
  ];

  // For custom components (not UI primitives), include the component file with content
  if (!isUiPrimitive && includeContent && componentCode) {
    files.unshift({
      path: `src/components/${name}.tsx`,
      type: "registry:component",
      content: componentCode,
    });
  }

  // Add theme dependency by default (matches project pattern)
  const allRegistryDeps = [
    ...registryDependencies,
    "https://registry-starter.vercel.app/r/theme.json",
  ];

  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: isUiPrimitive ? "registry:ui" : "registry:component",
    title: storyName,
    description: `${storyName} component from Storybook`,
    ...(dependencies.length > 0 && { dependencies }),
    registryDependencies: [...new Set(allRegistryDeps)], // Remove duplicates
    files,
  };
}

/**
 * Convert a registry item to the format expected in registry.json
 * (removes the $schema field as it's only on the parent registry object)
 */
export function toRegistryFormat(item: RegistryItem): Omit<RegistryItem, "$schema"> {
  const { $schema, ...rest } = item;
  return rest;
}

/**
 * Generate a complete registry.json structure
 * Useful for exporting multiple stories as a single registry
 */
export function generateRegistry(
  items: RegistryItem[],
  registryName: string = "storybook-registry",
  homepage?: string
): Registry {
  return {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: registryName,
    ...(homepage && { homepage }),
    items: items.map(toRegistryFormat),
  };
}
