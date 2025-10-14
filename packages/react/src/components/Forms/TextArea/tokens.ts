import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "font-weight": defaults.globals.font.weights.regular,
  "font-size": defaults.globals.font.sizes.md,
  "border-radius": "8px",
  "border-radius--hover": "2px",
  "border-radius--focus": "2px",
  "border-width": "1px",
  "border-color": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-color--hover": defaults.contextuals.border.semantic.neutral.secondary,
  "border-color--focus": defaults.contextuals.border.semantic.brand.primary,
  "border-color--disabled":
    defaults.contextuals.border.semantic.disabled.primary,
  "border-style": "solid",
  "label-color--focus": defaults.contextuals.border.semantic.brand.primary,
  "background-color": defaults.contextuals.background.surface.primary,
  "value-color": defaults.contextuals.content.semantic.neutral.primary,
  "value-color--disabled":
    defaults.contextuals.content.semantic.neutral.secondary,
});
