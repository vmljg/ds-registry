# DS Registry Storybook Add-on

A Storybook add-on that generates shadcn/ui registry-item JSON from your stories.

## Features

- **Dual Format Support**: Toggle between `registry-item.json` and `registry.json` formats
- **Registry Item JSON**: Automatically generates shadcn/ui-compatible registry-item JSON for each story
- **Full Registry JSON**: Wraps items in complete registry.json structure
- **Dependency Analysis**: Uses Bun's transpiler to scan and categorize imports
- **Copy to Clipboard**: One-click copy of the generated JSON
- **Real-time Updates**: Updates automatically when switching between stories
- **shadcn/ui Compatible**: Follows official schemas from ui.shadcn.com

## Installation

This add-on is currently local to the project. To use it:

1. Build the add-on:
   ```bash
   cd .storybook/registry
   bun install
   bun run build
   ```

2. Register it in `.storybook/main.ts`:
   ```typescript
   addons: [
     // ... other addons
     "./.storybook/registry/dist/preset",
   ],
   ```

## Development

To develop the add-on:

```bash
cd .storybook/registry
bun run dev
```

The build script uses Bun's native bundler for fast, efficient builds.

## Usage

Once installed, the addon adds a "Registry" panel to your Storybook UI. When you select any story:

1. The panel analyzes the story's code and metadata
2. Generates shadcn/ui-compatible JSON in two formats:
   - **Item**: Single `registry-item.json` format
   - **Registry**: Full `registry.json` format with wrapper
3. Categorizes dependencies:
   - **dependencies**: NPM packages (e.g., `lucide-react`, `zod`)
   - **registryDependencies**: UI components from `@/components/ui/`
4. Toggle between formats using the "Item" / "Registry" buttons
5. Click "Copy JSON" to copy the generated JSON to your clipboard

### 📝 Source Code Access

The addon automatically accesses component source code through **Storybook's built-in source loading** via the docs addon. The source code is available in `story.parameters.docs.source` and is automatically included in the generated registry-item JSON when available.

**No additional API or configuration required!** The addon uses:
- `useStorybookApi().getData()` to access story data
- `parameters.docs.source.code` for story source
- `parameters.docs.source.originalSource` for component source

### Example Output

#### Registry Item Format (registry-item.json)

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "button-demo",
  "type": "registry:block",
  "title": "Button Demo",
  "description": "Button Demo component from Storybook",
  "registryDependencies": ["button"],
  "files": [
    {
      "path": "registry/button-demo.tsx",
      "type": "registry:component",
      "content": "import { Button } from '@/components/ui/button';\n\nexport function ButtonDemo() {\n  return <Button>Click me</Button>;\n}"
    }
  ]
}
```

#### Registry Format (registry.json)

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "storybook-registry",
  "homepage": "http://localhost:6006",
  "items": [
    {
      "name": "button-demo",
      "type": "registry:block",
      "title": "Button Demo",
      "description": "Button Demo component from Storybook",
      "registryDependencies": ["button"],
      "files": [
        {
          "path": "registry/button-demo.tsx",
          "type": "registry:component",
          "content": "import { Button } from '@/components/ui/button';\n..."
        }
      ]
    }
  ]
}
```

> **Note:** The `content` field is automatically populated with the source code available from Storybook's docs addon. If a story doesn't have source code attached, the field will be omitted.

See **[FORMAT_VERIFICATION.md](./FORMAT_VERIFICATION.md)** for detailed schema compliance verification.

## Structure

- `src/index.ts` - Core constants and exports
- `src/manager.tsx` - Manager UI with Registry panel
- `src/preview.ts` - Preview decorators and parameters
- `src/preset.ts` - Configuration preset
- `src/utils/analyze-story.ts` - Story analysis using Bun's transpiler

## Customization

### Adding a Toolbar Button

Edit `src/manager.tsx` and add a toolbar item:

```typescript
addons.add(TOOLBAR_ID, {
  type: types.TOOL,
  title: "Registry Tool",
  render: () => <YourToolComponent />,
});
```

### Adding Preview Parameters

Edit `src/preview.ts` to add default parameters:

```typescript
parameters: {
  registry: {
    // Your custom parameters
  },
}
```

## License

MIT
