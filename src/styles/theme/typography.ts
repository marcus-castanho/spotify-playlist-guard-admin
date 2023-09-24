import { ThemeConfig } from 'tailwindcss/types/config';

export type FontFamily = keyof typeof fontFamily;
export const fontFamily = {
    sans: [
        'ui-sans-serif',
        'system-ui',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
    ],
    serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
    ],
    mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
    ],
} as const;

export type FontSize = keyof typeof fontSize;
export const fontSize = {
    xs: ['0.75rem', '1rem'],
    sm: ['0.875rem', '1.25rem'],
    base: ['1rem', '1.5rem'],
    lg: ['1.125rem', '1.75rem'],
    xl: ['1.25rem', '1.75rem'],
    '2xl': ['1.5rem', '2rem'],
    '3xl': ['1.875rem', '2.25rem'],
    '4xl': ['2.25rem', '2.5rem'],
    '5xl': ['3rem', '1'],
    '6xl': ['3.75rem', '1'],
    '7xl': ['4.5rem', '1'],
    '8xl': ['6rem', '1'],
    '9xl': ['8rem', '1'],
} as const;

export type FontWeight = keyof typeof fontWeight;
export const fontWeight = {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
} as const;

const fontFamilyWithoutReadonlyTypes = Object.keys(fontFamily).reduce(
    (accumulator, currentValue) => {
        return { ...accumulator, [currentValue]: fontFamily[currentValue] };
    },
    {} as ThemeConfig['fontFamily'],
);
export const tailwindFontFamilyConfig: ThemeConfig['fontFamily'] = {
    ...fontFamilyWithoutReadonlyTypes,
};

const fontSizeWithoutReadonlyTypes = Object.keys(fontSize).reduce(
    (accumulator, currentValue) => {
        return { ...accumulator, [currentValue]: fontSize[currentValue] };
    },
    {} as ThemeConfig['fontSize'],
);
/**each size uses a value of a tuple of the form [fontSize, lineHeight] */
export const tailwindFontSizeConfig: ThemeConfig['fontSize'] = {
    ...fontSizeWithoutReadonlyTypes,
};

export const tailwindFontWeightConfig: ThemeConfig['fontWeight'] = {
    ...fontWeight,
};
