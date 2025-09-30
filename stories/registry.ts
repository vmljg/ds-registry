import registry from "@/registry";

export type CssValue =
  | string
  | {
      [k: string]: CssValue;
    };

export interface IRegistry {
  name?: string;
  homepage?: string;
  items?: Array<Record<string, IRegistryItem>>;
  [k: string]: unknown;
}

export interface IRegistryItem {
  /**
   * The name of the item. This is used to identify the item in the registry. It should be unique for your registry.
   */
  name: string;
  /**
   * The type of the item. This is used to determine the type and target path of the item when resolved for a project.
   */
  type:
    | "registry:lib"
    | "registry:block"
    | "registry:component"
    | "registry:ui"
    | "registry:hook"
    | "registry:theme"
    | "registry:page"
    | "registry:file"
    | "registry:style"
    | "registry:item";
  /**
   * The description of the item. This is used to provide a brief overview of the item.
   */
  description?: string;
  /**
   * The human-readable title for your registry item. Keep it short and descriptive.
   */
  title?: string;
  /**
   * The author of the item. Recommended format: username <url>
   */
  author?: string;
  /**
   * An array of NPM dependencies required by the registry item.
   */
  dependencies?: string[];
  /**
   * An array of NPM dev dependencies required by the registry item.
   */
  devDependencies?: string[];
  /**
   * An array of registry items that this item depends on. Use the name of the item to reference shadcn/ui components and urls to reference other registries.
   */
  registryDependencies?: string[];
  /**
   * The main payload of the registry item. This is an array of files that are part of the registry item. Each file is an object with a path, content, type, and target.
   */
  files?: {
    /**
     * The path to the file relative to the registry root.
     */
    path?: string;
    /**
     * The content of the file.
     */
    content?: string;
    /**
     * The type of the file. This is used to determine the type of the file when resolved for a project.
     */
    type?:
      | "registry:lib"
      | "registry:block"
      | "registry:component"
      | "registry:ui"
      | "registry:hook"
      | "registry:theme"
      | "registry:page"
      | "registry:file"
      | "registry:style"
      | "registry:item";
    /**
     * The target path of the file. This is the path to the file in the project.
     */
    target?: string;
    [k: string]: unknown;
  }[];
  /**
   * The tailwind configuration for the registry item. This is an object with a config property. Use cssVars for Tailwind v4 projects.
   */
  tailwind?: {
    config?: {
      content?: string[];
      theme?: {
        [k: string]: unknown;
      };
      plugins?: string[];
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * The css variables for the registry item. This will be merged with the project's css variables.
   */
  cssVars?: {
    /**
     * CSS variables for the @theme directive. For Tailwind v4 projects only. Use tailwind for older projects.
     */
    theme?: {
      [k: string]: string;
    };
    /**
     * CSS variables for the light theme.
     */
    light?: {
      [k: string]: string;
    };
    /**
     * CSS variables for the dark theme.
     */
    dark?: {
      [k: string]: string;
    };
    [k: string]: unknown;
  };
  /**
   * CSS definitions to be added to the project's CSS file. Supports at-rules, selectors, nested rules, utilities, layers, and more.
   */
  css?: {
    [k: string]: CssValue;
  };
  /**
   * Environment variables required by the registry item. Key-value pairs that will be added to the project's .env file.
   */
  envVars?: {
    [k: string]: string;
  };
  /**
   * Additional metadata for the registry item. This is an object with any key value pairs.
   */
  meta?: {
    [k: string]: unknown;
  };
  /**
   * The documentation for the registry item. This is a markdown string.
   */
  docs?: string;
  categories?: string[];
  /**
   * The name of the registry item to extend. This is used to extend the base shadcn/ui style. Set to none to start fresh. This is available for registry:style items only.
   */
  extends?: string;
  [k: string]: unknown;
}

export async function getRegistryItem(name: string): Promise<IRegistryItem> {
  const { registryItem } = await import(`@/stories/components/ui/${name}.stories.tsx`);

  return {
    name,
    type: "registry:component",
    ...registryItem,
  };
}

export function getThemeVars(): IRegistryItem["cssVars"] {
  return (
    registry.items?.find(({ type, name }) => type === "registry:theme" && name === "theme")
      ?.cssVars ?? {
      light: {},
      dark: {},
    }
  );
}

export function getThemeColors(): IRegistryItem["cssVars"] {
  const vars = getThemeVars();

  // Extract any oklch, hsl, rgb or hex values from the cssVars themes
  const colors: IRegistryItem["cssVars"] = {
    light: {},
    dark: {},
  };

  const colorRegEx =
    /oklch|oklab|lab|lch|hsl|rgb|rgba|#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})/;

  for (const theme of ["light", "dark"] as const) {
    const entries = Object.entries(vars?.[theme] ?? {});

    for (const [key, value] of entries) {
      if (value.match(colorRegEx)) {
        colors[theme]![key] = value;
      }
    }
  }

  return colors;
}

const colorPalette = {
  ...getThemeColors(),
};

export { colorPalette };
