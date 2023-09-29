'use client';

import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';

export const ThemeSwitcher = () => {
    const { theme, switchTheme } = useTheme();
    const alternativeTheme = theme === 'dark' ? 'light' : 'dark';

    return (
        <button onClick={() => switchTheme(alternativeTheme)}>
            {alternativeTheme}
        </button>
    );
};
