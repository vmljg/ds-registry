/**
 * Preset configuration for the registry add-on
 * This allows the add-on to automatically configure Storybook
 */

export function managerEntries(entry: string[] = []): string[] {
  return [...entry, require.resolve("./manager")];
}

export function previewAnnotations(entry: string[] = []): string[] {
  return [...entry, require.resolve("./preview")];
}
