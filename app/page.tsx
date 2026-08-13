"use client";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { appTheme } from "./constants/Config";
import { useTheme } from "./hooks/useTheme";


export default function Home() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className="w-full min-h-screen flex flex-col">
      <div className="w-full flex justify-end p-8">
        <button
          onClick={toggleTheme}
          className="border rounded-md p-2 cursor-pointer"
        >
          {theme === appTheme.LIGHT ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
        </button>
      </div>
      <div className="w-full flex flex-1 justify-center items-center">
        <h1 className="text-2xl font-medium italic">nextjs with tailwind css</h1>
      </div>
    </main>
  );
};
