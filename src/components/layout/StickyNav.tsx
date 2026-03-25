"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import useScrollVisibility from "@/hooks/useScrollVisibility";

const HERO_HEIGHT = 820;

export default function StickyNav() {
  const ref = useScrollVisibility(HERO_HEIGHT);
  const [menuOpen, setMenuOpen] = useState(false);

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm opacity-0 pointer-events-none transition-opacity duration-300"
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-center gap-14 py-3 px-8">
        <div className="flex items-center gap-6">
          {leftLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-gabarito font-semibold text-label text-dark tracking-[0.9px] uppercase hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="relative w-[50px] h-[45px] shrink-0">
          <Image
            src="/nirvani/images/layer.png"
            alt="Nirvani"
            fill
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-6">
          {rightLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-gabarito font-semibold text-label text-dark tracking-[0.9px] uppercase hover:opacity-80"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between py-3 px-6">
        <div className="relative w-[40px] h-[36px] shrink-0">
          <Image
            src="/nirvani/images/layer.png"
            alt="Nirvani"
            fill
            className="object-contain"
          />
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-dark transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-dark ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-dark transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 bg-white">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-gabarito font-semibold text-label text-dark uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
