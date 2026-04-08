# Changelog

## [0.1.3] - 2025-10-16

### Changed
- **Project-specific format**: Output now matches the DS Registry project structure
- UI primitives use `registry:ui` type (stories with `components-ui-` prefix)
- Custom components use `registry:component` type with content
- Files structure matches project: `src/components/` and `src/layouts/minimal-layout.tsx`
- Automatically includes theme dependency: `https://registry-starter.vercel.app/r/theme.json`
- Source transformation moved to `.storybook/preview.ts` for centralized processing

### Added
- Global `docs.source.transform` in preview.ts to extract clean component JSX
- Smart component type detection based on story ID pattern
- File target mapping for layout files

## [0.1.2] - 2025-10-16

### Added
- **Format Toggle**: Switch between `registry-item.json` and `registry.json` formats
- `generateRegistry()` function to create full registry.json structure
- `toRegistryFormat()` helper to convert items to registry.json format
- FORMAT_VERIFICATION.md documenting schema compliance
- UI toggle buttons to switch between Item and Registry views
- Suggested path display showing where file should be saved

### Changed
- Panel title now reflects selected format ("Registry Item" or "Registry JSON")
- Registry format includes homepage (from current origin)

## [0.1.1] - 2025-10-16

### Fixed
- Now uses Storybook's built-in source access via `parameters.docs.source`
- Component source code automatically included when available
- No external API or file system access required
- Uses `useStorybookApi().getData()` for proper parameter access

### Changed
- Updated `manager.tsx` to use `useStorybookApi` instead of just `useStorybookState`
- IMPLEMENTATION_GUIDE.md marked as deprecated (no longer needed)

## [0.1.0] - 2025-10-16

### Added
- Initial release of DS Registry Storybook Add-on
- Registry Panel that displays shadcn/ui-compatible registry-item JSON
- Automatic dependency analysis using Bun's transpiler API
- Real-time story analysis with `Bun.Transpiler.scan()` for import detection
- Copy-to-clipboard functionality for generated JSON
- Support for categorizing dependencies:
  - NPM packages as `dependencies`
  - UI components from `@/components/ui/` as `registryDependencies`
- Built with Bun's native bundler (no tsup dependency)
- TypeScript type definitions generation
- Dual-format builds (ESM + CJS)

### Technical Details
- Uses `@storybook/manager-api` for accessing story state
- Leverages `Bun.Transpiler.scan()` to analyze imports
- Follows official shadcn/ui registry-item.json schema
- Compatible with Storybook 8.x and 9.x

### Files Structure
- `src/manager.tsx` - Main panel component with React hooks
- `src/utils/analyze-story.ts` - Story analysis with Bun transpiler
- `build.ts` - Custom Bun build script
- All outputs in `dist/` with proper exports for ESM/CJS
