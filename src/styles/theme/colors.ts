import { ThemeConfig } from 'tailwindcss/types/config';

export type Color = keyof typeof colors;

export const colors = {
    black: '#000',
    white: '#fff',
    primary: {
        green: '#1db954',
        black: '#191414',
        white: '#fff',
    },
    secondary: {
        blue: '#649aed',
        red: '#eb5640',
        caramel: '#f6c874',
        pale: '#a7c2d1',
        lime: '#d5f479',
        pink: '#f7cfd4',
        rose: '#e57ba1',
        yellow: '#f4e357',
    },
    green: {
        '50': '#f0fdf4',
        '100': '#dbfde6',
        '200': '#baf8cf',
        '300': '#84f1aa',
        '400': '#48e07d',
        '500': '#1db954',
        '600': '#14a547',
        '700': '#13823b',
        '800': '#156633',
        '900': '#13542c',
        '950': '#042f15',
    },
    blue: {
        '50': '#f0f5fe',
        '100': '#dee8fb',
        '200': '#c4d9f9',
        '300': '#9bc0f5',
        '400': '#649aed',
        '500': '#4a7ee7',
        '600': '#3560db',
        '700': '#2c4dc9',
        '800': '#293fa4',
        '900': '#263982',
        '950': '#1c254f',
    },
    red: {
        '50': '#fef4f2',
        '100': '#fde6e3',
        '200': '#fdd1cb',
        '300': '#fab2a7',
        '400': '#f58574',
        '500': '#eb5640',
        '600': '#d94029',
        '700': '#b6321f',
        '800': '#972d1d',
        '900': '#7d2b1f',
        '950': '#44120b',
    },
    caramel: {
        '50': '#fef7ec',
        '100': '#fbe9ca',
        '200': '#f6c874',
        '300': '#f4b755',
        '400': '#f19d2e',
        '500': '#ea7a16',
        '600': '#cf5910',
        '700': '#ac3c11',
        '800': '#8c2f14',
        '900': '#732714',
        '950': '#421206',
    },
    pale: {
        '50': '#f5f8fa',
        '100': '#eaf0f4',
        '200': '#d1dee6',
        '300': '#a7c2d1',
        '400': '#78a2b8',
        '500': '#58879f',
        '600': '#446d85',
        '700': '#38586c',
        '800': '#314b5b',
        '900': '#2d404d',
        '950': '#1e2a33',
    },
    lime: {
        '50': '#fafee7',
        '100': '#f2fccb',
        '200': '#e4f99d',
        '300': '#d5f479',
        '400': '#b7e635',
        '500': '#99cc16',
        '600': '#76a30d',
        '700': '#597c0f',
        '800': '#486212',
        '900': '#3d5314',
        '950': '#1f2e05',
    },
    pink: {
        '50': '#fdf3f4',
        '100': '#fce7e9',
        '200': '#f7cfd4',
        '300': '#f2afb8',
        '400': '#e98392',
        '500': '#dd566d',
        '600': '#c83656',
        '700': '#a82847',
        '800': '#8d2441',
        '900': '#79223d',
        '950': '#430e1d',
    },
    rose: {
        '50': '#fcf3f7',
        '100': '#fae9f0',
        '200': '#f6d4e1',
        '300': '#f0b1c9',
        '400': '#e57ba1',
        '500': '#da5a84',
        '600': '#c83a62',
        '700': '#ac2a4b',
        '800': '#8f253f',
        '900': '#772437',
        '950': '#480f1d',
    },
    yellow: {
        '50': '#fdfce9',
        '100': '#fbf9c6',
        '200': '#f8f090',
        '300': '#f4e357',
        '400': '#eecf21',
        '500': '#deb714',
        '600': '#c08f0e',
        '700': '#99680f',
        '800': '#7f5214',
        '900': '#6c4317',
        '950': '#3f2309',
    },
    gray: {
        '50': '#EAEAEA',
        '100': '#8c8a8a',
        '200': '#747272',
        '300': '#5d5a5a',
        '400': '#464343',
        '500': '#3E3E3E',
        '600': '#343131',
        '700': '#282828',
        '800': '#2a2626',
        '900': '#211d1d',
        '950': '#151515',
    },
} as const;

export const tailwindColorsConfig: ThemeConfig['colors'] = {
    inherit: 'inherit',
    current: 'currentColor',
    transparent: 'transparent',
    ...colors,
};
