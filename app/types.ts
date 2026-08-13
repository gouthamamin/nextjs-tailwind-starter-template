import { appTheme } from "./constants/Config";

export interface ThemeContextValue {
  theme: appTheme;
  toggleTheme: () => void;
};
