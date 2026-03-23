import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "background-color": defaults.contextuals.background.surface.primary,
  "border-radius": "8px",
  padding: "8px",

  "cell-size": "32px",
  "cell-border-radius": "4px",
  "cell-font-size": defaults.globals.font.sizes.xs,

  "header-font-size": defaults.globals.font.sizes.xs,

  "date-past-color": defaults.contextuals.content.semantic.disabled.primary,
  "date-today-color": defaults.contextuals.content.semantic.neutral.tertiary,
  "date-today-border-color":
    defaults.contextuals.border.semantic.neutral.secondary,
  "date-future-color": defaults.contextuals.content.semantic.neutral.secondary,

  "date-selected-bg": defaults.contextuals.background.semantic.brand.primary,
  "date-selected-color":
    defaults.contextuals.content.semantic.brand["on-brand"],

  "range-middle-bg": defaults.contextuals.background.semantic.brand.tertiary,
  "range-middle-color": defaults.contextuals.content.semantic.brand.primary,
  "range-middle-bg--disabled":
    defaults.contextuals.background.semantic.neutral.tertiary,

  "menu-background-color": defaults.contextuals.background.surface.primary,
  "menu-border-radius": "8px",
  "menu-item-height": "32px",
  "menu-item-font-size": defaults.globals.font.sizes.sm,
  "menu-item-color": defaults.contextuals.content.semantic.neutral.primary,
  "menu-item-background-color--hover":
    defaults.contextuals.background.semantic.neutral["tertiary-hover"],
  "menu-item-background-color--selected":
    defaults.contextuals.background.semantic.brand.tertiary,
});
