import type { Renderer, ProjectAnnotations } from "storybook/internal/types";
import { PARAM_KEY } from "./index";

/**
 * Preview configuration for the registry add-on
 * Add decorators, parameters, and other preview-level configurations here
 */
const preview: ProjectAnnotations<Renderer> = {
  parameters: {
    [PARAM_KEY]: {
      // Add default registry parameters here
      enabled: true,
    },
  },
};

export default preview;
