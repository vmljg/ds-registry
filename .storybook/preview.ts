import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      options: {
        light: {
          name: "light",
          value: "#ffffff",
        },

        dark: {
          name: "dark",
          value: "#0a0a0a",
        }
      }
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    docs: {
      source: {
        // Transform story source to extract just the component JSX
        // This removes the story wrapper (args, render function) for cleaner registry output
        transform: (code: string) => {
          // Skip if code is already clean JSX
          if (code.trim().startsWith('<') && !code.includes('render:')) {
            return code;
          }

          // Extract from render function: render: args => <Component />
          const renderMatch = code.match(/render:\s*(?:args|\(\s*args\s*\)|\{[^}]*\})\s*=>\s*\(?(.+?)(?:\)?,?\s*$|\},)/s);
          if (renderMatch) {
            let extracted = renderMatch[1].trim();
            // Remove wrapping parentheses
            extracted = extracted.replace(/^\(/, '').replace(/\)$/, '').trim();
            return extracted;
          }

          // Extract from component property: component: <Component />
          const componentMatch = code.match(/component:\s*(.+?)(?:,|\}|$)/s);
          if (componentMatch) {
            return componentMatch[1].trim();
          }

          // Return as-is if no pattern matches
          return code;
        },
      },
    },
  },

  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "light"
    }
  }
};

export default preview;
