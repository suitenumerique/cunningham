import { tokens } from "./cunningham-tokens";
import { buildRefs } from "./utils/buildRefs";
import { getThemesFromGlobals } from "./utils/getThemesFromGlobals";

export type Configuration = typeof tokens;
export type DefaultTokens = (typeof tokens)["themes"]["default"];

export const defaultTokens = tokens.themes.default;
export const defaultThemes = tokens.themes;

export const defaultTokenRefs = buildRefs(defaultTokens);

export { buildRefs };
export { getThemesFromGlobals };
