import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "font-weight": defaults.globals.font.weights.regular,
  "font-size": defaults.globals.font.sizes.md,
  "border-radius": "8px",
  "border-radius--hover": "4px",
  "border-radius--focus": "4px",
  "border-width": "1px",
  "border-width--hover": "1px",
  "border-width--focus": "1px",
  "border-color": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-color--hover": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-color--focus": defaults.contextuals.border.semantic.brand.primary,
  "border-style": "solid",
  "placeholder-color": defaults.contextuals.content.semantic.neutral.tertiary,
  "label-color": defaults.contextuals.content.semantic.neutral.tertiary,
  "label-color--focus": defaults.contextuals.content.semantic.brand.primary,
  "background-color": defaults.contextuals.background.surface.secondary,
  "value-color": defaults.contextuals.content.semantic.neutral.primary,
  "value-color--disabled": defaults.contextuals.content.semantic.disabled.primary,
});
