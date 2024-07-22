import { useCallback, useMemo } from "react";

import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "@/layout/themes";
import { useTheme } from "@/contexts/theme";
import { Theme } from "@/enums/Theme";

import { ToggleInput } from "./ThemeToggle.styled";

const ThemeToggle = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();

  const isToggleChecked = useMemo(() => theme === Theme.dark, [theme]);

  const styledTheme = useMemo(() => {
    return theme === Theme.light ? lightTheme : darkTheme;
  }, [theme]);

  const handleToggleClick = useCallback(() => {
    theme === Theme.light ? setTheme(Theme.dark) : setTheme(Theme.light);
  }, [theme, setTheme]);

  return (
    <ThemeProvider theme={styledTheme}>
      <ToggleInput onChange={handleToggleClick} checked={isToggleChecked} />
      {children}
    </ThemeProvider>
  );
};

export default ThemeToggle;
