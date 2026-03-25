"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";

type NavbarProps = {
  variant?: "hero" | "sticky";
};

export default function Navbar({ variant = "hero" }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSticky = variant === "sticky";
  const textColor = isSticky ? "text-dark" : "text-light";
  const bgClass = isSticky ? "bg-white shadow-sm" : "bg-transparent";

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2);

  return (
    <nav className={`w-full z-50 relative ${bgClass}`}>
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center gap-14 py-4 px-8">
        <div className="flex items-center gap-6">
          {leftLinks.map((link) => (
            <NavLink key={link.label} href={link.href} className={textColor}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="relative w-[100px] h-[126px] flex items-center justify-center shrink-0">
          <Image
            src="/images/logo-hero1.png"
            alt="Nirvani Logo"
            width={90}
            height={100}
            className={isSticky ? "invert" : ""}
          />
        </div>

        <div className="flex items-center gap-6">
          {rightLinks.map((link) => (
            <NavLink key={link.label} href={link.href} className={textColor}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between py-4 px-6">
        <div className="relative w-[60px] h-[75px] shrink-0">
          <Image
            src="/images/logo-hero1.png"
            alt="Nirvani Logo"
            width={60}
            height={75}
            className={isSticky ? "invert" : ""}
          />
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`flex flex-col gap-1.5 ${textColor}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 transition-transform ${isSticky ? "bg-dark" : "bg-light"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 ${isSticky ? "bg-dark" : "bg-light"} ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 transition-transform ${isSticky ? "bg-dark" : "bg-light"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-gabarito font-semibold text-label text-dark uppercase tracking-[0.9px] hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={`font-gabarito font-semibold text-label uppercase hover:opacity-80 transition-opacity ${className}`}
    >
      {children}
    </a>
  );
}
