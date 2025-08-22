import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "background-color": defaults.contextuals.background.semantic.neutral.tertiary,
    "border-radius": "4px",
    "border-color": defaults.contextuals.border.semantic.neutral.primary,
    "border-left-color": defaults.contextuals.border.semantic.neutral.primary,
    "font-weight": defaults.globals.font.weights.medium,
    color: defaults.contextuals.content.semantic.neutral.primary,
    "icon-size": "19px",
    "additional-font-weight": defaults.globals.font.weights.regular,
    "additional-color": defaults.contextuals.content.semantic.neutral.primary,
  };
};
