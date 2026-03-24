import { DefaultTokens } from "@gouvfr-lasuite/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "background-color": defaults.contextuals.background.surface.secondary,
    "backdrop-color": "#00000099",
    "border-radius": "8px",
    "border-color": defaults.contextuals.border.surface.primary,
    "box-shadow": "0 6px 20px 0 rgba(0, 0, 18, 0.10)",
    color: defaults.contextuals.content.semantic.neutral.primary,
    // "backdrop-color": "#0C1A2B99", // Does not work yet due to backdrop CSS var support.
    "title-font-weight": defaults.globals.font.weights.bold,
    "compact-title-font-size": defaults.globals.font.sizes.sm,
    "content-font-size": defaults.globals.font.sizes.sm,
    "content-font-weight": defaults.globals.font.weights.regular,
    "content-color": defaults.contextuals.content.semantic.neutral.primary,
    "width-small": "300px",
    "width-medium": "600px",
    "width-large": "800px",
    "width-extra-large": "75%",

    // Tab variant tokens
    "tab-sidebar-width": "200px",
    "tab-sidebar-background-color":
      defaults.contextuals.background.surface.tertiary,
    "tab-item-height": "32px",
    "tab-item-border-radius": "4px",
    "tab-item-font-size": defaults.globals.font.sizes.sm,
    "tab-item-font-weight": defaults.globals.font.weights.medium,
    "tab-item-font-weight--active": defaults.globals.font.weights.bold,
    "tab-item-active-background-color": "rgba(24, 27, 36, 0.05)",
    "tab-item-hover-background-color": "rgba(24, 27, 36, 0.03)",
  };
};
