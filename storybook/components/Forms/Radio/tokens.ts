import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "border-color": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-color--disabled":
    defaults.contextuals.border.semantic.neutral.tertiary,
  "accent-color": defaults.contextuals.content.semantic.brand.tertiary,
  "background-color": defaults.contextuals.background.surface.primary,
});
