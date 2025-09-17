import { create } from '@storybook/theming';
import { tokens } from '../src/cunningham-tokens';


const buildTheme = (colors: typeof tokens.themes.default.contextuals & any, type: 'default' | 'dark' = 'default') => {
    return {
        brandUrl: 'https://github.com/openfun/cunningham',
        brandImage: 'logo-cunningham.svg',
        brandTitle: 'Cunningham',
        brandTarget: '_self',

        //
        colorPrimary: colors.content.semantic.brand.primary, // content.brand.primary
        colorSecondary: type === 'dark' ? colors.content.semantic.contextual.primary : colors.content.semantic.brand.secondary, // content.brand.secondary

        // UI
        appBg: colors.background.surface.secondary, // background.surface.tertiary
        appContentBg: colors.background.surface.tertiary, // background.surface.primary
        appBorderColor: colors.border.surface.primary, // border.surface.primary
        appBorderRadius: 4,

        // Text colors
        textColor: colors.content.semantic.neutral.primary, // content.neutral.primary
        textInverseColor: colors.content.semantic.neutral.secondary, // content.neutral.secondary

        // Toolbar default and active colors
        barTextColor: colors.content.semantic.neutral.tertiary, // content.neutral.tertiary
        barSelectedColor: colors.content.semantic.neutral.primary, // content.neutral.primary
        barBg: colors.background.surface.primary, // background.surface.primary

        // Form colors
        inputBg: colors.background.surface.primary, // background.surface.primary
        inputBorder: colors.border.semantic.neutral.secondary, // border.neutral.secondary
        inputTextColor: colors.content.semantic.neutral.primary, // content.neutral.primary
        inputBorderRadius: 2,

        // Code preview colors
        codeBg: colors.background.surface.secondary, // background.surface.secondary
        codeColor: colors.content.semantic.neutral.primary, // content.neutral.primary
    };
}



export const themes = {
    default: create({
        base: 'light',
        ...buildTheme(tokens.themes.default.contextuals),
    }),
    dark: create({
        base: 'dark',
        ...buildTheme(tokens.themes.dark.contextuals, 'dark'),
    }),
};

export enum Themes {
    dark = 'dark',
    default = 'default'
}

export const BACKGROUND_COLOR_TO_THEME = {
    '#181B24': Themes.dark,
};

export const getThemeFromGlobals = (globals: any): string => {
    const color = BACKGROUND_COLOR_TO_THEME[globals.backgrounds?.value];
    return color ?? Themes.default;
};
