// deepmerge is not available as a module, so we need to import it as a commonjs module...
import deepmerge = require("deepmerge");
import {
  contextualDefaultTokens,
  contextualDarkTokens,
  globals as defaultGlobals,
} from "../cunningham";

type GlobalTokens = typeof defaultGlobals;
type PartialExtendableNested<T> = {
  [K in keyof T]?: T[K] extends object ? PartialExtendableNested<T[K]> : T[K];
} & Record<PropertyKey, any>;

const THEME_VARIANTS = ["light", "dark"] as const;
type ThemeVariant = (typeof THEME_VARIANTS)[number];
const CONTEXTUAL_TOKENS_MAP = {
  light: contextualDefaultTokens,
  dark: contextualDarkTokens,
};

interface Options {
  prefix?: string;
  variants?: readonly ThemeVariant[];
  overrides?: Record<string, unknown>;
}

/**
 * Generates theme objects from global tokens and optional overrides.
 *
 * @param globals - A partial global tokens object.
 * @param options - Additional options for generating themes.
 * @param options.prefix - Optional prefix for the theme keys.
 * @param options.variants - Theme variants to generate (e.g., ['light', 'dark']).
 * @param options.overrides - Optional overrides/extensions to apply to the generated themes.
 * @returns An object mapping each theme variant (with optional prefix) to its corresponding tokens.
 */
export const getThemesFromGlobals = (
  globals: PartialExtendableNested<GlobalTokens> = {},
  options: Options = {},
) => {
  const variants = options.variants || THEME_VARIANTS;

  return variants.reduce(
    (themes, variant) => {
      const variantKey = options.prefix
        ? `${options.prefix}-${variant}`
        : variant;

      themes[variantKey] = deepmerge(
        {
          globals,
          contextuals: CONTEXTUAL_TOKENS_MAP[variant],
        },
        options.overrides || {},
      );

      return themes;
    },
    {} as Record<string, any>,
  );
};
