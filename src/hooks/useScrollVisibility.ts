"use client";

import { useEffect, useRef } from "react";

export default function useScrollVisibility(threshold: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const el = ref.current;
      if (!el) return;

      if (window.scrollY > threshold) {
        el.style.opacity = "1";
        el.style.pointerEvents = "auto";
      } else {
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return ref;
}
