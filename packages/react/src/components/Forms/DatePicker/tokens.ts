import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "border-color": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-color--disabled":
    defaults.contextuals.border.semantic.neutral.tertiary,
  "border-color--focus": defaults.contextuals.border.semantic.brand.primary,
  "border-color--hover": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-radius": "8px",
  "border-radius--focus": "2px",
  "border-radius--hover": "2px",
  "border-style": "solid",
  "border-width": "1px",
  "border-width--focus": "1px",
  "border-width--hover": "1px",
  "value-color": defaults.contextuals.content.semantic.neutral.tertiary,
  "value-color--disabled":
    defaults.contextuals.content.semantic.disabled.primary,
  "font-size": defaults.globals.font.sizes.sm,
  height: "3.5rem",
  "background-color": defaults.contextuals.background.surface.primary,
  "label-color--focus": defaults.contextuals.content.semantic.brand.primary,
});
