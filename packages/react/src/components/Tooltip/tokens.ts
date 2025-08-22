import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "0.5rem",
    "background-color": defaults.contextuals.background.semantic.neutral.secondary,
    "border-color": defaults.contextuals.border.semantic.neutral.tertiary,
    color: defaults.contextuals.content.semantic.neutral.secondary,
    "font-size": defaults.globals.font.sizes.s,
    padding: "1rem",
    "max-width": "150px",
  };
};
