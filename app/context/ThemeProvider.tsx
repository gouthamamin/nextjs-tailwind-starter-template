"use client";
import { ReactNode, useEffect, useState } from "react";
import { appTheme, THEME_STORAGE_KEY } from "../constants/Config";
import LocalStorage from "../utils/LocalStorage";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<appTheme>(
    () => LocalStorage.get<appTheme>(THEME_STORAGE_KEY) ?? appTheme.LIGHT
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === appTheme.DARK);
    LocalStorage.set(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === appTheme.LIGHT ? appTheme.DARK : appTheme.LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
