import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "accent-color": defaults.contextuals.content.semantic.brand.tertiary,
  "rail-background-color":
    defaults.contextuals.content.semantic.neutral.tertiary,
  "rail-background-color--disabled":
    defaults.contextuals.content.semantic.disabled.primary,
  "rail-border-radius": "50vw",
  "handle-background-color":
    defaults.contextuals.content.semantic.contextual.primary,
  "handle-background-color--disabled":
    defaults.contextuals.content.semantic.disabled.secondary,
  "handle-border-radius": "50%",
});
