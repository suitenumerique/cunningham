import * as path from "path";
import { flatify } from "Utils/Flatify";
import Config from "Config";
import { Generator, resolveRefs } from "Generators/index";
import { put } from "Utils/Files";
import { Tokens } from "TokensGenerator";

export const THEME_CLASSNAME_PREFIX = "cunningham-theme--";

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
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to colors (globals.colors or contextuals.background)
      return (
        key.startsWith("globals--colors--") ||
        key.startsWith("contextuals--background--")
      );
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      let className = key;

      // Handle globals.colors
      if (key.startsWith("globals--colors--")) {
        className = key.replace("globals--colors--", "");
      }
      // Handle contextuals.background
      else if (key.startsWith("contextuals--background--")) {
        className = key.replace("contextuals--background--", "");
      }

      // Convert separators to hyphens for CSS class names
      className = className.replace(
        new RegExp(Config.sass.varSeparator, "g"),
        "-",
      );

      const a = `.bg-${className} { background-color: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`;
      // console.log(a);
      return a;
    });
}

function generateBorderClasses(tokens: Tokens) {
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to borders (contextuals.border)
      return key.startsWith("contextuals--border--");
    })
    .flatMap((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("contextuals--border--", "");

      return [
        `.border-clr-${className} { border-color: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.border-thin-${className} { border: 1px solid var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
      ];
    });
}

function generateContentClasses(tokens: Tokens) {
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to content (contextuals.content)
      return key.startsWith("contextuals--content--");
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("contextuals--content--", "");

      return `.clr-content-${className} { color: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`;
    });
}

/**
 * Generate color classes.
 * Example: .clr-primary-500
 *
 * @param tokens
 */
function generateClrClasses(tokens: Tokens) {
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to colors (globals.colors)
      return key.startsWith("globals--colors--");
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("globals--colors--", "");

      return `.clr-${className} { color: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`;
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
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to font weights (globals.font.weights)
      return key.startsWith("globals--font--weights--");
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("globals--font--weights--", "");

      return `.fw-${className} { font-weight: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`;
    });
}

/**
 * Generate font size classes.
 * Example: fs-m
 *
 * @param tokens
 */
function generateFsClasses(tokens: Tokens) {
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to font sizes (globals.font.sizes)
      return key.startsWith("globals--font--sizes--");
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("globals--font--sizes--", "");

      return `.fs-${className} { 
        font-size: var(--${Config.sass.varPrefix}${key.toLowerCase()}); 
        letter-spacing: var(--${Config.sass.varPrefix}${key.replace("sizes", "letterspacings").toLowerCase()}); 
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
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to font families (globals.font.families)
      return key.startsWith("globals--font--families--");
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("globals--font--families--", "");

      return `.f-${className} { font-family: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`;
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
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to spacings (globals.spacings)
      return key.startsWith("globals--spacings--");
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("globals--spacings--", "");

      return [
        `.m-${className} { margin: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.mb-${className} { margin-bottom: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.mt-${className} { margin-top: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.ml-${className} { margin-left: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.mr-${className} { margin-right: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
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
  const flatTokens = flatify(tokens.themes.default, Config.sass.varSeparator);

  return Object.keys(flatTokens)
    .filter((key) => {
      // Only include keys that are related to spacings (globals.spacings)
      return key.startsWith("globals--spacings--");
    })
    .map((key) => {
      // Convert the flat key to CSS class name
      const className = key.replace("globals--spacings--", "");

      return [
        `.p-${className} { padding: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.pb-${className} { padding-bottom: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.pt-${className} { padding-top: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.pl-${className} { padding-left: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
        `.pr-${className} { padding-right: var(--${Config.sass.varPrefix}${key.toLowerCase()}); }`,
      ].join("");
    });
}
