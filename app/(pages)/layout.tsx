"use client";
import { ReactNode } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { appTheme } from "../constants/Config";
import { useTheme } from "../hooks/useTheme";

export default function PagesLayout({ children }: { children: ReactNode }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="w-full min-h-screen flex flex-col">
      <header className="w-full flex justify-end p-8">
        <button
          onClick={toggleTheme}
          className="border rounded-md p-2 cursor-pointer"
          aria-label="Toggle theme"
        >
          {theme === appTheme.LIGHT ? (
            <MdOutlineDarkMode size={24} />
          ) : (
            <MdOutlineLightMode size={24} />
          )}
        </button>
      </header>
      <div className="w-full flex flex-1 flex-col">{children}</div>
    </main>
  );
}
