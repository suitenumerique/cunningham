import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "background-color--hover":
    defaults.contextuals.background.semantic.neutral["tertiary-hover"],
  "background-color": defaults.contextuals.background.surface.primary,
  "font-size": defaults.globals.font.sizes.s,
  "font-weight": defaults.globals.font.weights.medium,
  color: defaults.contextuals.content.semantic.neutral.primary,
  "border-color": defaults.contextuals.content.semantic.neutral.tertiary,
  "border-radius": "2px",
  "accent-color": defaults.contextuals.content.semantic.contextual.primary,

  size: "1.5rem",
  "background-color--checked":
    defaults.contextuals.content.semantic.brand.tertiary,
  "background-color--indeterminate":
    defaults.contextuals.content.semantic.brand.tertiary,
  "background-color--disabled":
    defaults.contextuals.content.semantic.disabled.primary,
  "border-color--disabled":
    defaults.contextuals.content.semantic.disabled.primary,
});
