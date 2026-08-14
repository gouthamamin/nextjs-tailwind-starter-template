import { appTheme } from "./constants/Config";

export interface ThemeContextValue {
  theme: appTheme;
  toggleTheme: () => void;
};

export interface iNavLinks {
  label: string;
  href: string;
};
