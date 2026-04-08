# Registry Format Verification

This document verifies that the addon outputs are compatible with both shadcn/ui registry schemas.

## ✅ Supported Formats

The addon supports both official shadcn/ui registry formats:

1. **registry-item.json** - Individual component format
2. **registry.json** - Full registry with multiple items

## Format Comparison

### Registry Item Format (registry-item.json)

**Schema:** `https://ui.shadcn.com/schema/registry-item.json`

**Use case:** Single component/block export

**Output example (UI Primitive):**
```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "components-ui-button--primary",
  "type": "registry:ui",
  "title": "Primary",
  "description": "Primary component from Storybook",
  "registryDependencies": [
    "button",
    "https://registry-starter.vercel.app/r/theme.json"
  ],
  "files": [
    {
      "path": "src/layouts/minimal-layout.tsx",
      "type": "registry:file",
      "target": "app/layout.tsx"
    }
  ]
}
```

**Output example (Custom Component):**
```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-hero",
  "type": "registry:component",
  "title": "Hero",
  "description": "Hero component from Storybook",
  "registryDependencies": [
    "button",
    "badge",
    "https://registry-starter.vercel.app/r/theme.json"
  ],
  "files": [
    {
      "path": "src/components/custom-hero.tsx",
      "type": "registry:component",
      "content": "import { Button } from '@/components/ui/button';\n..."
    },
    {
      "path": "src/layouts/minimal-layout.tsx",
      "type": "registry:file",
      "target": "app/layout.tsx"
    }
  ]
}
```

### Registry Format (registry.json)

**Schema:** `https://ui.shadcn.com/schema/registry.json`

**Use case:** Full registry with multiple components

**Output example:**
```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "storybook-registry",
  "homepage": "http://localhost:6006",
  "items": [
    {
      "name": "button-primary",
      "type": "registry:block",
      "title": "Button Primary",
      "description": "Button Primary component from Storybook",
      "registryDependencies": ["button"],
      "files": [
        {
          "path": "registry/button-primary.tsx",
          "type": "registry:component",
          "content": "import { Button } from '@/components/ui/button';\n..."
        }
      ]
    }
  ]
}
```

## Key Differences

| Aspect | registry-item.json | registry.json |
|--------|-------------------|---------------|
| **$schema location** | On the item itself | On the parent registry object |
| **Structure** | Single item object | Array of items in `items` field |
| **Metadata** | None | `name`, `homepage` on parent |
| **Use case** | Individual component export | Full registry publication |

## Schema Compliance

### registry-item.json Requirements

✅ **$schema** - Points to official schema  
✅ **name** - Unique identifier (kebab-case)  
✅ **type** - One of: `registry:block`, `registry:component`, etc.  
✅ **title** - Human-readable title  
✅ **description** - Component description  
✅ **dependencies** - NPM packages (optional)  
✅ **registryDependencies** - Other registry items (optional)  
✅ **files** - Array of file objects with `path`, `type`, optional `content`  

### registry.json Requirements

✅ **$schema** - Points to official registry schema  
✅ **name** - Registry name  
✅ **homepage** - Registry homepage URL (optional)  
✅ **items** - Array of registry items (without `$schema` on each item)  

## Implementation Details

### Addon Features

1. **Format Toggle**: Switch between "Item" and "Registry" view
2. **Auto-detection**: Automatically extracts component source from Storybook
3. **Dependency Analysis**: Uses Bun's transpiler to categorize imports
4. **Copy Support**: One-click copy of either format

### Functions

```typescript
// Generate individual item
generateRegistryItem(storyId, storyName, componentCode, includeContent)

// Convert to registry.json item format (removes $schema)
toRegistryFormat(item)

// Generate full registry.json
generateRegistry(items, registryName, homepage)
```

## Usage in shadcn/ui CLI

Both formats work with the shadcn/ui CLI:

### Using registry-item.json
```bash
npx shadcn@latest add https://your-domain.com/registry/button-primary.json
```

### Using registry.json
```bash
# Point CLI to your registry
npx shadcn@latest add button-primary --registry https://your-domain.com/r/registry.json
```

## Validation

You can validate the output against the official schemas:

- **registry-item.json schema**: https://ui.shadcn.com/schema/registry-item.json
- **registry.json schema**: https://ui.shadcn.com/schema/registry.json

Use a JSON schema validator to ensure compliance.

## References

- [registry-item.json docs](https://ui.shadcn.com/docs/registry/registry-item-json)
- [registry.json docs](https://ui.shadcn.com/docs/registry/registry-json)
- [shadcn/ui CLI docs](https://ui.shadcn.com/docs/cli)
