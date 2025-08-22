import { create } from '@storybook/theming';

const buildLightTheme = () => {
    return {
        brandUrl: 'https://github.com/openfun/cunningham',
        brandImage: 'logo-cunningham.svg',
        brandTitle: 'Cunningham',
        brandTarget: '_self',

        //
        colorPrimary: '#20467F', // content.brand.primary
        colorSecondary: '#0659C5', // content.brand.secondary

        // UI
        // appBg: '#F7F8F8', // background.surface.tertiary
        appContentBg: '#FFFFFF', // background.surface.primary
        appBorderColor: '#E1E2E5', // border.surface.primary
        appBorderRadius: 4,

        // Text colors
        textColor: '#252627', // content.neutral.primary
        textInverseColor: '#5C5F63', // content.neutral.secondary

        // Toolbar default and active colors
        barTextColor: '#74777C', // content.neutral.tertiary
        barSelectedColor: '#252627', // content.neutral.primary
        barBg: '#FFFFFF', // background.surface.primary

        // Form colors
        inputBg: '#FFFFFF', // background.surface.primary
        inputBorder: '#A7ACB2', // border.neutral.secondary
        inputTextColor: '#252627', // content.neutral.primary
        inputBorderRadius: 2,
    };
};

const buildDarkTheme = () => {
    return {
        brandUrl: 'https://github.com/openfun/cunningham',
        brandImage: 'logo-cunningham.svg',
        brandTitle: 'Cunningham',
        brandTarget: '_self',

        //
        colorPrimary: '#EAF1FB', // content.brand.primary
        colorSecondary: '#D5E4F7', // content.brand.secondary

        // UI
        appBg: '#222631', // background.surface.tertiary
        appContentBg: '#181B24', // background.surface.primary
        appBorderColor: '#3A3B3E', // border.surface.primary
        appBorderRadius: 4,

        // Text colors
        // textColor: '#F0F1F2', // content.neutral.primary
        // textInverseColor: '#E1E2E5', // content.neutral.secondary

        // Toolbar default and active colors
        // barTextColor: '#B5B9BE', // content.neutral.tertiary
        // barSelectedColor: '#F0F1F2', // content.neutral.primary
        barBg: '#222631', // background.surface.primary

        // Form colors
        // inputBg: '#2F3033', // background.surface.primary
        // inputBorder: '#5C5F63', // border.neutral.secondary
        // inputTextColor: '#F0F1F2', // content.neutral.primary
        // inputBorderRadius: 2,
    };
};

export const themes = {
    default: create({
        base: 'light',
        // ...buildLightTheme(),
    }),
    dark: create({
        base: 'dark',
        ...buildDarkTheme(),
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
