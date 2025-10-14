import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  width: "292px",
  "font-size": defaults.globals.font.sizes.s,
  color: defaults.contextuals.content.semantic.neutral.secondary,
  "color--error": defaults.contextuals.content.semantic.error.secondary,
  "color--success": defaults.contextuals.content.semantic.success.secondary,
  "color--disabled": defaults.contextuals.content.semantic.disabled.primary,
});
