import * as path from "path";
import { flatify } from "Utils/Flatify";
import Config from "Config";
import { Generator, resolveRefs } from "Generators/index";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

/**
 * Interface for objects containing path and value information
 */
interface PathValueObject {
  path: string[];
  value: any;
}

export const THEME_CLASSNAME_PREFIX = "cunningham-theme--";

/**
 * Creates an array of objects containing path arrays and leaf values from a nested object
 * @param obj - The object to traverse
 * @param currentPath - Current path being built (used internally for recursion)
 * @returns Array of objects with 'path' (array of keys) and 'value' (leaf value) properties
 */
export function createPathValueArray(
  obj: any,
  currentPath: string[] = [],
): PathValueObject[] {
  const result: PathValueObject[] = [];

  Object.entries(obj).forEach(([key, value]) => {
    const newPath = [...currentPath, key];

    // Check if the value is an object and not null/undefined
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      // Recursively process nested objects
      result.push(...createPathValueArray(value, newPath));
    } else {
      // This is a leaf value
      result.push({
        path: newPath,
        value,
      });
    }
  });

  return result;
}

export const cssGenerator: Generator = async (tokens, opts) => {
  // Replace refs by CSS variables.
  tokens = resolveRefs(tokens, (ref) => {
    const cssVar =
      "--" +
      Config.sass.varPrefix +
      ref.replaceAll(".", Config.sass.varSeparator);
    return `var(${cssVar})`;
  });

  const { default: defaultTheme, ...otherThemes } = tokens.themes;

  const flatTokens = flatify(defaultTheme, Config.sass.varSeparator);

  const cssVars = Object.keys(flatTokens).reduce((acc, token) => {
    return (
      acc +
      `\t--${Config.sass.varPrefix}${token.toLowerCase()}: ${
        flatTokens[token]
      };\n`
    );
  }, "");
  let cssContent = `${opts.selector} {\n${cssVars}}`;

  Object.entries(otherThemes).forEach(([themeName, themeTokens]) => {
    const flatTokensOther = flatify(themeTokens, Config.sass.varSeparator);
    const themeCssVars = Object.keys(flatTokensOther).reduce((acc, token) => {
      return (
        acc +
        `\t--${Config.sass.varPrefix}${token}: ${flatTokensOther[token]};\n`
      );
    }, "");
    cssContent += `\n.${THEME_CLASSNAME_PREFIX}${themeName}{\n${themeCssVars}}`;
  });

  if (opts.utilityClasses) {
    cssContent += ` ${generateClasses(tokens)}`;
  }

  const dest = path.join(opts.path, Config.tokenFilename + ".css");

  put(dest, cssContent);
};

function generateClasses(tokens: Tokens) {
  return [
    ...generateColorClasses(tokens),
    ...generateFontClasses(tokens),
    ...generateSpacingClasses(tokens),
    ...generateBorderClasses(tokens),
    ...generateContentClasses(tokens),
  ].join("\n");
}

function generateColorClasses(tokens: Tokens) {
  return [...generateClrClasses(tokens), ...generateBgClasses(tokens)];
}

/**
 * Generate background color classes.
 * Example: .bg-primary-500
 *
 * @param tokens
 */
function generateBgClasses(tokens: Tokens) {
  const bgContextual = createPathValueArray(
    tokens.themes.default.contextuals.background,
  );
  const bgContextualClasses = bgContextual.map((key) => {
    return `.bg-${key.path.join("-")} { background-color: var(--${Config.sass.varPrefix}contextuals--background--${key.path.join("--")}); }`;
  });
  const bgGlobal = createPathValueArray(tokens.themes.default.globals.colors);
  const bgGlobalClasses = bgGlobal.map((key) => {
    return `.bg-${key.path.join("-")} { background-color: var(--${Config.sass.varPrefix}globals--colors--${key.path.join("--")}); }`;
  });
  return [...bgGlobalClasses, ...bgContextualClasses];
}

function generateBorderClasses(tokens: Tokens) {
  const bgContextual = createPathValueArray(
    tokens.themes.default.contextuals.border,
  );
  const bgContextualClasses = bgContextual
    .map((key) => {
      return [
        `.border-clr-${key.path.join("-")} { border-color: var(--${Config.sass.varPrefix}contextuals--border--${key.path.join("--")}); }`,
        `.border-thin-${key.path.join("-")} { border: 1px solid var(--${Config.sass.varPrefix}contextuals--border--${key.path.join("--")}); }`,
      ];
    })
    .flat();

  return bgContextualClasses;
}

function generateContentClasses(tokens: Tokens) {
  const bgContextual = createPathValueArray(
    tokens.themes.default.contextuals.content,
  );
  return bgContextual.map((key) => {
    return `.clr-content-${key.path.join("-")} { color: var(--${Config.sass.varPrefix}contextuals--content--${key.path.join("--")}); }`;
  });
}

/**
 * Generate color classes.
 * Example: .clr-primary-500
 *
 * @param tokens
 */
function generateClrClasses(tokens: Tokens) {
  const bgContextual = createPathValueArray(
    tokens.themes.default.globals.colors,
  );

  return bgContextual.map((key) => {
    return `.clr-${key.path.join("-")} { color: var(--${Config.sass.varPrefix}globals--colors--${key.path.join("--")}); }`;
  });
}

function generateFontClasses(tokens: Tokens) {
  return [
    ...generateFwClasses(tokens),
    ...generateFsClasses(tokens),
    ...generateFClasses(tokens),
  ];
}

/**
 * Generate font weight classes.
 * Example: fw-bold
 *
 * @param tokens
 */
function generateFwClasses(tokens: Tokens) {
  const tokensWeights = createPathValueArray(
    tokens.themes.default.globals.font.weights,
  );
  return tokensWeights.map((key) => {
    return `.fw-${key.path.join("-")} { font-weight: var(--${Config.sass.varPrefix}globals--font--weights--${key.path.join("--")}); }`;
  });
}

/**
 * Generate font size classes.
 * Example: fs-m
 *
 * @param tokens
 */
function generateFsClasses(tokens: Tokens) {
  const tokensSizes = createPathValueArray(
    tokens.themes.default.globals.font.sizes,
  );
  return tokensSizes.map((key) => {
    return `.fs-${key.path.join("-")} { 
    font-size: var(--${Config.sass.varPrefix}globals--font--sizes--${key.path.join("--")}); 
    letter-spacing: var(--${Config.sass.varPrefix}globals--font--letterspacings--${key.path.join("--")}); 
    }`;
  });
}

/**
 * Generate font family classes.
 * Example: f-base
 *
 * @param tokens
 */
function generateFClasses(tokens: Tokens) {
  const tokensFamilies = createPathValueArray(
    tokens.themes.default.globals.font.families,
  );

  return tokensFamilies.map((key) => {
    return `.f-${key.path.join("-")} { font-family: var(--${Config.sass.varPrefix}globals--font--families--${key.path.join("--")}); }`;
  });
}

function generateSpacingClasses(tokens: Tokens) {
  return [...generateMarginClasses(tokens), ...generatePaddingClasses(tokens)];
}

/**
 * Generate margins classes.
 * Example: m-l, mr-l, mb-l, ml-l, mt-l
 *
 * @param tokens
 */
function generateMarginClasses(tokens: Tokens) {
  const tokensSpacings = createPathValueArray(
    tokens.themes.default.globals.spacings,
  );
  return tokensSpacings.map((key) => {
    return [
      `.m-${key.path.join("-")} { margin: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.mb-${key.path.join("-")} { margin-bottom: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.mt-${key.path.join("-")} { margin-top: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.ml-${key.path.join("-")} { margin-left: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.mr-${key.path.join("-")} { margin-right: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
    ].join("");
  });
}

/**
 * Generate paddings classes.
 * Example: p-l, pr-l, pb-l, pl-l, pt-l
 *
 * @param tokens
 */
function generatePaddingClasses(tokens: Tokens) {
  const tokensSpacings = createPathValueArray(
    tokens.themes.default.globals.spacings,
  );
  return tokensSpacings.map((key) => {
    return [
      `.p-${key.path.join("-")} { margin: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.pb-${key.path.join("-")} { margin-bottom: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.pt-${key.path.join("-")} { margin-top: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.pl-${key.path.join("-")} { margin-left: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
      `.pr-${key.path.join("-")} { margin-right: var(--${Config.sass.varPrefix}globals--spacings--${key.path.join("--")}); }`,
    ].join("");
  });
}
