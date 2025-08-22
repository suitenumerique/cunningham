import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "background-color": defaults.contextuals.background.surface.primary,
  "border-color": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-radius": "0.5rem",
  "border-width": "2px",
  "border-style": "dotted",
  "background-color--active":
    defaults.contextuals.background.semantic.brand.tertiary,

  color: defaults.contextuals.content.semantic.neutral.primary,
  "color--success": defaults.contextuals.content.semantic.success.tertiary,
  "color--error": defaults.contextuals.content.semantic.error.tertiary,
  padding: "1rem",
  "accent-color": defaults.contextuals.border.semantic.brand.primary,
  "text-color": defaults.contextuals.content.semantic.neutral.tertiary,
  "text-size": "0.6875rem",
  "file-text-size": "0.8125rem",
  "file-text-color": defaults.contextuals.content.semantic.neutral.primary,
  "file-text-weight": defaults.globals.font.weights.light,
  "file-border-color": defaults.contextuals.border.semantic.neutral.tertiary,
  "file-border-width": "1px",
  "file-border-radius": "0.5rem",
  "file-background-color": defaults.contextuals.background.surface.primary,
  "file-specs-size": "0.6875rem",
  "file-specs-color": defaults.contextuals.content.semantic.neutral.tertiary,
});
