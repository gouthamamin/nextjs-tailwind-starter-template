"use client";
import Link from "next/link";
import { NavItemProps } from "../types";

const NavItem = (props: NavItemProps) => {
  const { href, onClick, label, isActive } = props;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-opacity duration-200 
        ${isActive ? "opacity-100 underline underline-offset-4" : "opacity-60 hover:opacity-100"
        }`}
    >
      {label}
    </Link>
  );
};

export default NavItem;