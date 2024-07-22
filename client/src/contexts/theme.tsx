"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { LOCAL_STORAGE_THEME } from "@/utils/constants";

import { getStorageItem, setStorageItem } from "@/utils/localStorage";

import { Theme } from "@/enums/Theme";

interface ThemeProviderProps {
  children: ReactNode;
}

interface ThemeContextData {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const defaultTheme = Theme.light;
const themeFromStorage = getStorageItem<Theme>(
  LOCAL_STORAGE_THEME,
  defaultTheme
);

export const ThemeContext = createContext<ThemeContextData>(
  {} as ThemeContextData
);

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  useEffect(() => {
    setThemeState(themeFromStorage);
  }, []);

  const setTheme = useCallback((theme: Theme) => {
    setStorageItem(LOCAL_STORAGE_THEME, theme);
    setThemeState(theme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider.");
  }

  return context;
};

export { ThemeProvider, useTheme };
