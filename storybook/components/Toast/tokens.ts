import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "slide-in-duration": "1000ms",
    "slide-out-duration": "300ms",
    "background-color":
      defaults.contextuals.background.semantic.neutral.tertiary,
    color: defaults.contextuals.content.semantic.neutral.primary,
    "font-weight": defaults.globals.font.weights.regular,
    "icon-size": "19px",
    "progress-bar-height": "3px",
  };
};
