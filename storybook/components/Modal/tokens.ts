import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "background-color": defaults.contextuals.background.surface.secondary,
    "backdrop-color": "#00000099",
    "border-radius": "4px",
    "border-color": defaults.contextuals.border.surface.primary,
    "box-shadow": "0px 1px 2px 0px #0C1A2B4D",
    color: defaults.contextuals.content.semantic.neutral.primary,
    // "backdrop-color": "#0C1A2B99", // Does not work yet due to backdrop CSS var support.
    "title-font-weight": defaults.globals.font.weights.bold,
    "content-font-size": defaults.globals.font.sizes.sm,
    "content-font-weight": defaults.globals.font.weights.regular,
    "content-color": defaults.contextuals.content.semantic.neutral.primary,
    "width-small": "300px",
    "width-medium": "600px",
    "width-large": "800px",
    "width-extra-large": "75%",
  };
};
