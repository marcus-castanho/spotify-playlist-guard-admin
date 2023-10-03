'use client';

import { Theme } from '@/contexts/ThemeContext';
import React, { FC } from 'react';
import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';

type ThemeSwitcherProps = {
    theme: Theme;
    switchTheme: (alternativeTheme: Theme) => void;
};
export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
    theme,
    switchTheme,
}) => {
    const alternativeTheme = theme === 'dark' ? 'light' : 'dark';
    const alternativeThemeIcon =
        theme === 'dark' ? (
            <SunIcon size={24} fillColor="white" />
        ) : (
            <MoonIcon size={24} />
        );

    return (
        <button onClick={() => switchTheme(alternativeTheme)}>
            {alternativeThemeIcon}
        </button>
    );
};
