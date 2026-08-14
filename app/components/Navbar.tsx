"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { appTheme } from "../constants/Config";
import { useTheme } from "../hooks/useTheme";
import { NAVBAR_LINKS } from "../constants/NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavBar = () => setIsOpen(!isOpen);

  return (
    <header className="w-full h-16 flex items-center justify-between px-8 border-b border-primary/10 relative">
      <Link href="/" className="font-semibold text-lg tracking-tight">
        next.js app
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-6">
        {NAVBAR_LINKS.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>

      {/* Mobile nav from h-16 */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full h-[calc(100vh-4rem)] flex flex-col items-center gap-6 px-8 pt-8 border-t border-primary/10 bg-background z-50">
          {NAVBAR_LINKS.map((item) => (
            <NavItem
              key={item.href}
              {...item}
              isActive={pathname === item.href}
              onClick={toggleNavBar}
            />
          ))}
        </nav>
      )}

      <div className="flex flex-row-reverse items-center gap-4">
        <div className="md:hidden" onClick={toggleNavBar}>
          {isOpen ? <IoClose className="text-xl" /> : <GiHamburgerMenu className="text-xl" />}
        </div>
        <button onClick={toggleTheme} className="p-2 cursor-pointer">
          {theme === appTheme.LIGHT ? <MdOutlineDarkMode size={24} /> : <MdOutlineLightMode size={24} />}
        </button>
      </div>

    </header>
  );
};

export default Navbar;