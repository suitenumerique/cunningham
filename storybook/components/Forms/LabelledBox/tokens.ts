import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "label-color--small": defaults.contextuals.content.semantic.neutral.tertiary,
  "label-color--big": defaults.contextuals.content.semantic.neutral.primary,
  "label-color--small--disabled":
    defaults.contextuals.content.semantic.neutral.secondary,
  "label-color--big--disabled":
    defaults.contextuals.content.semantic.neutral.secondary,
  // Classic variant tokens
  "classic-label-margin-bottom": defaults.globals.spacings.xs,
  "classic-label-font-size": defaults.globals.font.sizes.s,
});
