"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { appTheme } from "../constants/Config";
import { useTheme } from "../hooks/useTheme";
import { NAVBAR_LINKS } from "../constants/NavbarLinks";
import { iNavLinks } from "../types";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 border-b border-primary/10">
      <Link href="/" className="font-semibold text-lg tracking-tight">
        next.js app
      </Link>

      <nav className="flex items-center gap-6">
        {NAVBAR_LINKS.map((item: iNavLinks) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-opacity duration-200 ${isActive ? "opacity-100 underline underline-offset-4" : "opacity-60 hover:opacity-100"}`}
            >{item.label}</Link>
          );
        })}
      </nav>

      <button onClick={toggleTheme} className="p-2 cursor-pointer">
        {theme === appTheme.LIGHT ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
      </button>
    </header>
  );
};

export default Navbar;