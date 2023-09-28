'use client';

import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
} from 'react';
import { match } from 'ts-pattern';

type Theme = 'dark' | 'light';

export type ThemeContextType = {
    switchTheme: (theme: Theme) => void;
    theme: Theme;
};

export type ThemeProviderProps = {
    children?: ReactNode;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('dark');

    const getSystemPreferedColorSchema = () => {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    };

    const updateDocumentThemeClass = () => {
        const systemPreferedColorSchema = getSystemPreferedColorSchema();

        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) && systemPreferedColorSchema === 'dark')
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const switchTheme = (selectedTheme: 'dark' | 'light') => {
        localStorage.theme = selectedTheme;
        setTheme(selectedTheme);
        updateDocumentThemeClass();
    };

    useEffect(() => {
        const systemPreferedColorSchema = getSystemPreferedColorSchema();
        const userDefineColorSchema = match(localStorage.theme)
            .with('dark', () => 'dark' as const)
            .with('light', () => 'light' as const)
            .otherwise(() => undefined);

        switchTheme(userDefineColorSchema || systemPreferedColorSchema);
    }, []);

    return (
        <ThemeContext.Provider value={{ switchTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const context = useContext(ThemeContext);

    if (!context) throw new Error('ThemeContext was not provided');

    return context;
}
