import { tokens } from "./cunningham-tokens";

export type Configuration = typeof tokens;
export type DefaultTokens = (typeof tokens)["themes"]["default"];

export const defaultTokens = tokens.themes.default;
export const defaultThemes = tokens.themes;
export const contextuaDefault = {
  background: {
    surface: {
      primary: "ref(globals.colors.gray-000)",
      secondary: "ref(globals.colors.gray-000)",
      tertiary: "ref(globals.colors.gray-025)",
    },
    semantic: {
      brand: {
        primary: "ref(globals.colors.brand-550)",
        "primary-hover": "ref(globals.colors.brand-650)",
        secondary: "ref(globals.colors.brand-100)",
        "secondary-hover": "ref(globals.colors.brand-150)",
        tertiary: "ref(globals.colors.brand-050)",
        "tertiary-hover": "ref(globals.colors.brand-100)",
      },
      neutral: {
        primary: "ref(globals.colors.gray-550)",
        "primary-hover": "ref(globals.colors.gray-650)",
        secondary: "ref(globals.colors.gray-100)",
        "secondary-hover": "ref(globals.colors.gray-150)",
        tertiary: "ref(globals.colors.gray-050)",
        "tertiary-hover": "ref(globals.colors.gray-100)",
      },
      contextual: {
        primary: "ref(globals.colors.black-050)",
        "primary-hover": "ref(globals.colors.black-100)",
      },
      info: {
        primary: "ref(globals.colors.info-550)",
        "primary-hover": "ref(globals.colors.info-650)",
        secondary: "ref(globals.colors.info-100)",
        "secondary-hover": "ref(globals.colors.info-150)",
        tertiary: "ref(globals.colors.info-050)",
        "tertiary-hover": "ref(globals.colors.info-100)",
      },
      success: {
        primary: "ref(globals.colors.success-550)",
        "primary-hover": "ref(globals.colors.success-650)",
        secondary: "ref(globals.colors.success-100)",
        "secondary-hover": "ref(globals.colors.success-150)",
        tertiary: "ref(globals.colors.success-050)",
        "tertiary-hover": "ref(globals.colors.success-100)",
      },
      warning: {
        primary: "ref(globals.colors.warning-550)",
        "primary-hover": "ref(globals.colors.warning-650)",
        secondary: "ref(globals.colors.warning-100)",
        "secondary-hover": "ref(globals.colors.warning-150)",
        tertiary: "ref(globals.colors.warning-050)",
        "tertiary-hover": "ref(globals.colors.warning-100)",
      },
      error: {
        primary: "ref(globals.colors.error-550)",
        "primary-hover": "ref(globals.colors.error-650)",
        secondary: "ref(globals.colors.error-100)",
        "secondary-hover": "ref(globals.colors.error-150)",
        tertiary: "ref(globals.colors.error-050)",
        "tertiary-hover": "ref(globals.colors.error-100)",
      },
      disabled: {
        primary: "ref(globals.colors.gray-100)",
        secondary: "ref(globals.colors.gray-050)",
      },
    },
    palette: {
      brand: {
        primary: "ref(globals.colors.brand-500)",
        secondary: "ref(globals.colors.brand-350)",
        tertiary: "ref(globals.colors.brand-150)",
      },
      red: {
        primary: "ref(globals.colors.red-500)",
        secondary: "ref(globals.colors.red-350)",
        tertiary: "ref(globals.colors.red-150)",
      },
      orange: {
        primary: "ref(globals.colors.orange-500)",
        secondary: "ref(globals.colors.orange-350)",
        tertiary: "ref(globals.colors.orange-150)",
      },
      brown: {
        primary: "ref(globals.colors.brown-500)",
        secondary: "ref(globals.colors.brown-350)",
        tertiary: "ref(globals.colors.brown-150)",
      },
      yellow: {
        primary: "ref(globals.colors.yellow-500)",
        secondary: "ref(globals.colors.yellow-350)",
        tertiary: "ref(globals.colors.yellow-150)",
      },
      green: {
        primary: "ref(globals.colors.green-500)",
        secondary: "ref(globals.colors.green-350)",
        tertiary: "ref(globals.colors.green-150)",
      },
      "blue-1": {
        primary: "ref(globals.colors.blue-1-500)",
        secondary: "ref(globals.colors.blue-1-350)",
        tertiary: "ref(globals.colors.blue-1-150)",
      },
      "blue-2": {
        primary: "ref(globals.colors.blue-2-500)",
        secondary: "ref(globals.colors.blue-2-350)",
        tertiary: "ref(globals.colors.blue-2-150)",
      },
      purple: {
        primary: "ref(globals.colors.purple-500)",
        secondary: "ref(globals.colors.purple-350)",
        tertiary: "ref(globals.colors.purple-150)",
      },
      pink: {
        primary: "ref(globals.colors.pink-500)",
        secondary: "ref(globals.colors.pink-350)",
        tertiary: "ref(globals.colors.pink-150)",
      },
      gray: {
        primary: "ref(globals.colors.gray-500)",
        secondary: "ref(globals.colors.gray-350)",
        tertiary: "ref(globals.colors.gray-150)",
      },
    },
    text: {
      primary: "ref(globals.colors.black-050)",
    },
  },
  content: {
    logo1: "ref(globals.colors.logo-1)",
    logo2: "ref(globals.colors.logo-2)",
    semantic: {
      brand: {
        primary: "ref(globals.colors.brand-700)",
        secondary: "ref(globals.colors.brand-600)",
        tertiary: "ref(globals.colors.brand-500)",
        "on-brand": "ref(globals.colors.brand-050)",
      },
      neutral: {
        primary: "ref(globals.colors.gray-850)",
        secondary: "ref(globals.colors.gray-600)",
        tertiary: "ref(globals.colors.gray-500)",
        "on-neutral": "ref(globals.colors.gray-050)",
      },
      contextual: {
        primary: "ref(globals.colors.white-950)",
      },
      info: {
        primary: "ref(globals.colors.info-700)",
        secondary: "ref(globals.colors.info-600)",
        tertiary: "ref(globals.colors.info-500)",
        "on-info": "ref(globals.colors.info-050)",
      },
      success: {
        primary: "ref(globals.colors.success-700)",
        secondary: "ref(globals.colors.success-600)",
        tertiary: "ref(globals.colors.success-500)",
        "on-success": "ref(globals.colors.success-050)",
      },
      warning: {
        primary: "ref(globals.colors.warning-700)",
        secondary: "ref(globals.colors.warning-600)",
        tertiary: "ref(globals.colors.warning-500)",
        "on-warning": "ref(globals.colors.warning-050)",
      },
      error: {
        primary: "ref(globals.colors.error-700)",
        secondary: "ref(globals.colors.error-600)",
        tertiary: "ref(globals.colors.error-500)",
        "on-error": "ref(globals.colors.error-050)",
      },
      disabled: {
        primary: "ref(globals.colors.gray-300)",
        secondary: "ref(globals.colors.white-500)",
      },
    },
    palette: {
      brand: {
        primary: "ref(globals.colors.brand-500)",
        secondary: "ref(globals.colors.brand-350)",
        tertiary: "ref(globals.colors.brand-150)",
      },
      red: {
        primary: "ref(globals.colors.red-500)",
        secondary: "ref(globals.colors.red-350)",
        tertiary: "ref(globals.colors.red-150)",
      },
      orange: {
        primary: "ref(globals.colors.orange-500)",
        secondary: "ref(globals.colors.orange-350)",
        tertiary: "ref(globals.colors.orange-150)",
      },
      brown: {
        primary: "ref(globals.colors.brown-500)",
        secondary: "ref(globals.colors.brown-350)",
        tertiary: "ref(globals.colors.brown-150)",
      },
      yellow: {
        primary: "ref(globals.colors.yellow-500)",
        secondary: "ref(globals.colors.yellow-350)",
        tertiary: "ref(globals.colors.yellow-150)",
      },
      green: {
        primary: "ref(globals.colors.green-500)",
        secondary: "ref(globals.colors.green-350)",
        tertiary: "ref(globals.colors.green-150)",
      },
      "blue-1": {
        primary: "ref(globals.colors.blue-1-500)",
        secondary: "ref(globals.colors.blue-1-350)",
        tertiary: "ref(globals.colors.blue-1-150)",
      },
      "blue-2": {
        primary: "ref(globals.colors.blue-2-500)",
        secondary: "ref(globals.colors.blue-2-350)",
        tertiary: "ref(globals.colors.blue-2-150)",
      },
      purple: {
        primary: "ref(globals.colors.purple-500)",
        secondary: "ref(globals.colors.purple-350)",
        tertiary: "ref(globals.colors.purple-150)",
      },
      pink: {
        primary: "ref(globals.colors.pink-500)",
        secondary: "ref(globals.colors.pink-350)",
        tertiary: "ref(globals.colors.pink-150)",
      },
      gray: {
        primary: "ref(globals.colors.gray-500)",
        secondary: "ref(globals.colors.gray-350)",
        tertiary: "ref(globals.colors.gray-150)",
      },
    },
  },
  border: {
    surface: {
      primary: "ref(globals.colors.gray-100)",
    },
    semantic: {
      brand: {
        primary: "ref(globals.colors.brand-550)",
        secondary: "ref(globals.colors.brand-300)",
        tertiary: "ref(globals.colors.brand-150)",
      },
      contextual: {
        primary: "ref(globals.colors.white-200)",
      },
      neutral: {
        primary: "ref(globals.colors.gray-550)",
        secondary: "ref(globals.colors.gray-300)",
        tertiary: "ref(globals.colors.gray-150)",
      },
      info: {
        primary: "ref(globals.colors.info-550)",
        secondary: "ref(globals.colors.info-300)",
        tertiary: "ref(globals.colors.info-150)",
      },
      success: {
        primary: "ref(globals.colors.success-550)",
        secondary: "ref(globals.colors.success-300)",
        tertiary: "ref(globals.colors.success-150)",
      },
      warning: {
        primary: "ref(globals.colors.warning-550)",
        secondary: "ref(globals.colors.warning-300)",
        tertiary: "ref(globals.colors.warning-150)",
      },
      error: {
        primary: "ref(globals.colors.error-550)",
        secondary: "ref(globals.colors.error-300)",
        tertiary: "ref(globals.colors.error-150)",
      },
      disabled: {
        primary: "ref(globals.colors.gray-100)",
      },
    },
    palette: {
      brand: {
        primary: "ref(globals.colors.brand-500)",
        secondary: "ref(globals.colors.brand-350)",
        tertiary: "ref(globals.colors.brand-150)",
      },
      red: {
        primary: "ref(globals.colors.red-500)",
        secondary: "ref(globals.colors.red-350)",
        tertiary: "ref(globals.colors.red-150)",
      },
      orange: {
        primary: "ref(globals.colors.orange-500)",
        secondary: "ref(globals.colors.orange-350)",
        tertiary: "ref(globals.colors.orange-150)",
      },
      brown: {
        primary: "ref(globals.colors.brown-500)",
        secondary: "ref(globals.colors.brown-350)",
        tertiary: "ref(globals.colors.brown-150)",
      },
      yellow: {
        primary: "ref(globals.colors.yellow-500)",
        secondary: "ref(globals.colors.yellow-350)",
        tertiary: "ref(globals.colors.yellow-150)",
      },
      green: {
        primary: "ref(globals.colors.green-500)",
        secondary: "ref(globals.colors.green-350)",
        tertiary: "ref(globals.colors.green-150)",
      },
      "blue-1": {
        primary: "ref(globals.colors.blue-1-500)",
        secondary: "ref(globals.colors.blue-1-350)",
        tertiary: "ref(globals.colors.blue-1-150)",
      },
      "blue-2": {
        primary: "ref(globals.colors.blue-2-500)",
        secondary: "ref(globals.colors.blue-2-350)",
        tertiary: "ref(globals.colors.blue-2-150)",
      },
      purple: {
        primary: "ref(globals.colors.purple-500)",
        secondary: "ref(globals.colors.purple-350)",
        tertiary: "ref(globals.colors.purple-150)",
      },
      pink: {
        primary: "ref(globals.colors.pink-500)",
        secondary: "ref(globals.colors.pink-350)",
        tertiary: "ref(globals.colors.pink-150)",
      },
      gray: {
        primary: "ref(globals.colors.gray-500)",
        secondary: "ref(globals.colors.gray-350)",
        tertiary: "ref(globals.colors.gray-150)",
      },
    },
  },
};

export const contextualDark = {
  background: {
    surface: {
      primary: "ref(globals.colors.gray-800)",
      secondary: "ref(globals.colors.gray-850)",
      tertiary: "ref(globals.colors.gray-900)",
    },
    semantic: {
      brand: {
        primary: "ref(globals.colors.brand-550)",
        "primary-hover": "ref(globals.colors.brand-650)",
        secondary: "ref(globals.colors.brand-700)",
        "secondary-hover": "ref(globals.colors.brand-750)",
        tertiary: "ref(globals.colors.brand-750)",
        "tertiary-hover": "ref(globals.colors.brand-800)",
      },
      neutral: {
        primary: "ref(globals.colors.gray-550)",
        "primary-hover": "ref(globals.colors.gray-650)",
        secondary: "ref(globals.colors.gray-700)",
        "secondary-hover": "ref(globals.colors.gray-750)",
        tertiary: "ref(globals.colors.gray-750)",
        "tertiary-hover": "ref(globals.colors.gray-800)",
      },
      contextual: {
        primary: "ref(globals.colors.white-050)",
        "primary-hover": "ref(globals.colors.white-100)",
      },
      info: {
        primary: "ref(globals.colors.info-550)",
        "primary-hover": "ref(globals.colors.info-650)",
        secondary: "ref(globals.colors.info-700)",
        "secondary-hover": "ref(globals.colors.info-750)",
        tertiary: "ref(globals.colors.info-750)",
        "tertiary-hover": "ref(globals.colors.info-800)",
      },
      success: {
        primary: "ref(globals.colors.success-550)",
        "primary-hover": "ref(globals.colors.success-650)",
        secondary: "ref(globals.colors.success-700)",
        "secondary-hover": "ref(globals.colors.success-750)",
        tertiary: "ref(globals.colors.success-750)",
        "tertiary-hover": "ref(globals.colors.success-800)",
      },
      warning: {
        primary: "ref(globals.colors.warning-550)",
        "primary-hover": "ref(globals.colors.warning-650)",
        secondary: "ref(globals.colors.warning-700)",
        "secondary-hover": "ref(globals.colors.warning-750)",
        tertiary: "ref(globals.colors.warning-750)",
        "tertiary-hover": "ref(globals.colors.warning-800)",
      },
      error: {
        primary: "ref(globals.colors.error-550)",
        "primary-hover": "ref(globals.colors.error-650)",
        secondary: "ref(globals.colors.error-700)",
        "secondary-hover": "ref(globals.colors.error-750)",
        tertiary: "ref(globals.colors.error-750)",
        "tertiary-hover": "ref(globals.colors.error-800)",
      },
      disabled: {
        primary: "ref(globals.colors.gray-750)",
        secondary: "ref(globals.colors.gray-800)",
      },
    },
    palette: {
      brand: {
        primary: "ref(globals.colors.brand-350)",
        secondary: "ref(globals.colors.brand-450)",
        tertiary: "ref(globals.colors.brand-550)",
      },
      red: {
        primary: "ref(globals.colors.red-350)",
        secondary: "ref(globals.colors.red-450)",
        tertiary: "ref(globals.colors.red-550)",
      },
      orange: {
        primary: "ref(globals.colors.orange-350)",
        secondary: "ref(globals.colors.orange-450)",
        tertiary: "ref(globals.colors.orange-550)",
      },
      brown: {
        primary: "ref(globals.colors.brown-350)",
        secondary: "ref(globals.colors.brown-450)",
        tertiary: "ref(globals.colors.brown-550)",
      },
      yellow: {
        primary: "ref(globals.colors.yellow-350)",
        secondary: "ref(globals.colors.yellow-450)",
        tertiary: "ref(globals.colors.yellow-550)",
      },
      green: {
        primary: "ref(globals.colors.green-350)",
        secondary: "ref(globals.colors.green-450)",
        tertiary: "ref(globals.colors.green-550)",
      },
      "blue-1": {
        primary: "ref(globals.colors.blue-1-350)",
        secondary: "ref(globals.colors.blue-1-450)",
        tertiary: "ref(globals.colors.blue-1-550)",
      },
      "blue-2": {
        primary: "ref(globals.colors.blue-2-350)",
        secondary: "ref(globals.colors.blue-2-450)",
        tertiary: "ref(globals.colors.blue-2-550)",
      },
      purple: {
        primary: "ref(globals.colors.purple-350)",
        secondary: "ref(globals.colors.purple-450)",
        tertiary: "ref(globals.colors.purple-550)",
      },
      pink: {
        primary: "ref(globals.colors.pink-350)",
        secondary: "ref(globals.colors.pink-450)",
        tertiary: "ref(globals.colors.pink-550)",
      },
      gray: {
        primary: "ref(globals.colors.gray-350)",
        secondary: "ref(globals.colors.gray-450)",
        tertiary: "ref(globals.colors.gray-550)",
      },
    },
  },
  content: {
    logo1: "ref(globals.colors.logo-1-dark)",
    logo2: "ref(globals.colors.logo-2-dark)",
    semantic: {
      brand: {
        primary: "ref(globals.colors.brand-050)",
        secondary: "ref(globals.colors.brand-100)",
        tertiary: "ref(globals.colors.brand-250)",
        "on-brand": "ref(globals.colors.brand-050)",
      },
      neutral: {
        primary: "ref(globals.colors.gray-050)",
        secondary: "ref(globals.colors.gray-100)",
        tertiary: "ref(globals.colors.gray-250)",
        "on-neutral": "ref(globals.colors.gray-050)",
      },
      contextual: {
        primary: "ref(globals.colors.black-850)",
      },
      info: {
        primary: "ref(globals.colors.info-050)",
        secondary: "ref(globals.colors.info-100)",
        tertiary: "ref(globals.colors.info-250)",
        "on-info": "ref(globals.colors.info-050)",
      },
      success: {
        primary: "ref(globals.colors.success-050)",
        secondary: "ref(globals.colors.success-100)",
        tertiary: "ref(globals.colors.success-250)",
        "on-success": "ref(globals.colors.success-050)",
      },
      warning: {
        primary: "ref(globals.colors.warning-050)",
        secondary: "ref(globals.colors.warning-100)",
        tertiary: "ref(globals.colors.warning-250)",
        "on-warning": "ref(globals.colors.warning-050)",
      },
      error: {
        primary: "ref(globals.colors.error-050)",
        secondary: "ref(globals.colors.error-100)",
        tertiary: "ref(globals.colors.error-250)",
        "on-error": "ref(globals.colors.error-050)",
      },
      disabled: {
        primary: "ref(globals.colors.gray-600)",
        secondary: "ref(globals.colors.black-300)",
      },
    },
    palette: {
      brand: {
        primary: "ref(globals.colors.brand-350)",
        secondary: "ref(globals.colors.brand-450)",
        tertiary: "ref(globals.colors.brand-550)",
      },
      red: {
        primary: "ref(globals.colors.red-350)",
        secondary: "ref(globals.colors.red-450)",
        tertiary: "ref(globals.colors.red-550)",
      },
      orange: {
        primary: "ref(globals.colors.orange-350)",
        secondary: "ref(globals.colors.orange-450)",
        tertiary: "ref(globals.colors.orange-550)",
      },
      brown: {
        primary: "ref(globals.colors.brown-350)",
        secondary: "ref(globals.colors.brown-450)",
        tertiary: "ref(globals.colors.brown-550)",
      },
      yellow: {
        primary: "ref(globals.colors.yellow-350)",
        secondary: "ref(globals.colors.yellow-450)",
        tertiary: "ref(globals.colors.yellow-550)",
      },
      green: {
        primary: "ref(globals.colors.green-350)",
        secondary: "ref(globals.colors.green-450)",
        tertiary: "ref(globals.colors.green-550)",
      },
      "blue-1": {
        primary: "ref(globals.colors.blue-1-350)",
        secondary: "ref(globals.colors.blue-1-450)",
        tertiary: "ref(globals.colors.blue-1-550)",
      },
      "blue-2": {
        primary: "ref(globals.colors.blue-2-350)",
        secondary: "ref(globals.colors.blue-2-450)",
        tertiary: "ref(globals.colors.blue-2-550)",
      },
      purple: {
        primary: "ref(globals.colors.purple-350)",
        secondary: "ref(globals.colors.purple-450)",
        tertiary: "ref(globals.colors.purple-550)",
      },
      pink: {
        primary: "ref(globals.colors.pink-350)",
        secondary: "ref(globals.colors.pink-450)",
        tertiary: "ref(globals.colors.pink-550)",
      },
      gray: {
        primary: "ref(globals.colors.gray-350)",
        secondary: "ref(globals.colors.gray-450)",
        tertiary: "ref(globals.colors.gray-550)",
      },
    },
  },
  border: {
    surface: {
      primary: "ref(globals.colors.gray-750)",
    },
    semantic: {
      brand: {
        primary: "ref(globals.colors.brand-450)",
        secondary: "ref(globals.colors.brand-600)",
        tertiary: "ref(globals.colors.brand-700)",
      },
      contextual: {
        primary: "ref(globals.colors.black-200)",
      },
      neutral: {
        primary: "ref(globals.colors.gray-450)",
        secondary: "ref(globals.colors.gray-600)",
        tertiary: "ref(globals.colors.gray-700)",
      },
      info: {
        primary: "ref(globals.colors.info-450)",
        secondary: "ref(globals.colors.info-600)",
        tertiary: "ref(globals.colors.info-700)",
      },
      success: {
        primary: "ref(globals.colors.success-450)",
        secondary: "ref(globals.colors.success-600)",
        tertiary: "ref(globals.colors.success-700)",
      },
      warning: {
        primary: "ref(globals.colors.warning-450)",
        secondary: "ref(globals.colors.warning-600)",
        tertiary: "ref(globals.colors.warning-700)",
      },
      error: {
        primary: "ref(globals.colors.error-450)",
        secondary: "ref(globals.colors.error-600)",
        tertiary: "ref(globals.colors.error-700)",
      },
      disabled: {
        primary: "ref(globals.colors.gray-800)",
      },
    },
    palette: {
      brand: {
        primary: "ref(globals.colors.brand-350)",
        secondary: "ref(globals.colors.brand-450)",
        tertiary: "ref(globals.colors.brand-550)",
      },
      red: {
        primary: "ref(globals.colors.red-350)",
        secondary: "ref(globals.colors.red-450)",
        tertiary: "ref(globals.colors.red-550)",
      },
      orange: {
        primary: "ref(globals.colors.orange-350)",
        secondary: "ref(globals.colors.orange-450)",
        tertiary: "ref(globals.colors.orange-550)",
      },
      brown: {
        primary: "ref(globals.colors.brown-350)",
        secondary: "ref(globals.colors.brown-450)",
        tertiary: "ref(globals.colors.brown-550)",
      },
      yellow: {
        primary: "ref(globals.colors.yellow-350)",
        secondary: "ref(globals.colors.yellow-450)",
        tertiary: "ref(globals.colors.yellow-550)",
      },
      green: {
        primary: "ref(globals.colors.green-350)",
        secondary: "ref(globals.colors.green-450)",
        tertiary: "ref(globals.colors.green-550)",
      },
      "blue-1": {
        primary: "ref(globals.colors.blue-1-350)",
        secondary: "ref(globals.colors.blue-1-450)",
        tertiary: "ref(globals.colors.blue-1-550)",
      },
      "blue-2": {
        primary: "ref(globals.colors.blue-2-350)",
        secondary: "ref(globals.colors.blue-2-450)",
        tertiary: "ref(globals.colors.blue-2-550)",
      },
      purple: {
        primary: "ref(globals.colors.purple-350)",
        secondary: "ref(globals.colors.purple-450)",
        tertiary: "ref(globals.colors.purple-550)",
      },
      pink: {
        primary: "ref(globals.colors.pink-350)",
        secondary: "ref(globals.colors.pink-450)",
        tertiary: "ref(globals.colors.pink-550)",
      },
      gray: {
        primary: "ref(globals.colors.gray-350)",
        secondary: "ref(globals.colors.gray-450)",
        tertiary: "ref(globals.colors.gray-550)",
      },
    },
  },
};

/**
 * Transform such object:
 * {
 *     theme: {
 *         colors: {
 *            "primary-500": "blue"
 *         }
 *     }
 * }
 *
 * to:
 * {
 *     theme: {
 *         colors: {
 *             "primary-500": "ref(theme.colors.primary-500)"
 *         }
 *     }
 * }
 * @param tokens_
 */
export const buildRefs = <T extends Object>(tokens_: T): T => {
  const buildRefsAux = (upperKey: string, subTokens: any) => {
    if (typeof subTokens === "object") {
      const obj: any = {};
      Object.entries(subTokens).forEach(([key, value]) => {
        obj[key] = buildRefsAux((upperKey ? upperKey + "." : "") + key, value);
      });
      return obj;
    }
    return "ref(" + upperKey + ")";
  };
  return buildRefsAux("", tokens_);
};

export const defaultTokenRefs = buildRefs(defaultTokens);
