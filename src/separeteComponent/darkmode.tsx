// hooks/useDarkMode.ts
import { useState, useEffect } from 'react';

// types/theme.ts
export interface ThemeContextType {
    isDark: boolean;
    toggleDarkMode: () => void;
}

export type Theme = 'light' | 'dark';

export const useDarkMode = (): [boolean, () => void] => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleDarkMode = (): void => {
        const newDarkMode = !isDark;
        setIsDark(newDarkMode);
        
        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return [isDark, toggleDarkMode];
};