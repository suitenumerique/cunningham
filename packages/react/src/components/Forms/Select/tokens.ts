import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "border-color": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-color--focus": defaults.contextuals.border.semantic.brand.primary,
  "border-color--hover": defaults.contextuals.border.semantic.neutral.tertiary,
  "border-radius": "8px",
  "border-radius--focus": "2px",
  "border-radius--hover": "2px",
  "border-style": "solid",
  "border-width": "1px",
  "border-width--focus": "1px",
  "border-width--hover": "1px",
  "value-color": defaults.contextuals.content.semantic.neutral.primary,
  "value-color--disabled":
    defaults.contextuals.content.semantic.disabled.primary,
  "font-size": defaults.globals.font.sizes.md,
  height: "3.5rem",
  "item-background-color--hover":
    defaults.contextuals.background.semantic.overlay.primary,
  "item-background-color--selected":
    defaults.contextuals.background.semantic.brand.secondary,
  "item-color": defaults.contextuals.content.semantic.neutral.primary,
  "item-color--disabled":
    defaults.contextuals.content.semantic.disabled.secondary,
  "item-font-size": defaults.globals.font.sizes.md,
  "background-color": defaults.contextuals.background.surface.primary,
  "menu-background-color": defaults.contextuals.background.surface.secondary,
  "label-color": defaults.contextuals.content.semantic.neutral.tertiary,
  "label-color--focus": defaults.contextuals.content.semantic.brand.primary,
  "multi-pill-background-color":
    defaults.contextuals.background.semantic.neutral.tertiary,
  "multi-pill-border-radius": "2px",
  "multi-pill-max-width": "68%",
  "multi-pill-font-size": defaults.globals.font.sizes.md,
  "placeholder-color": defaults.contextuals.content.semantic.neutral.secondary,
});
