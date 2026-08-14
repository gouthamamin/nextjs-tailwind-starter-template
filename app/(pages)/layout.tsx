"use client";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="w-full flex flex-1 flex-col">{children}</div>
    </main>
  );
}

