"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setShowSubtitle(true), 300);
    const t2 = setTimeout(() => setShowHeading(true), 1000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[calc(100vh-100px)] overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/nirvani/images/header-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#2B2B2B]/50" />

      <div className="absolute inset-0 z-10">
        <Navbar variant="hero" />

        <div className="flex flex-col justify-center items-center mt-8 md:mt-16 gap-8 md:gap-[48px] px-6 md:px-0">
          <div className="flex flex-col items-center gap-3 md:gap-5">
            <h1
              className={`text-[40px] md:text-h1 text-light text-center leading-none transition-all duration-1000 ease-out ${
                showHeading
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Find Your Inner
              <br />
              Stillness with Nirvani
            </h1>
            <p
              className={`font-gabarito font-semibold text-[16px] md:text-h6 text-light text-center uppercase transition-all duration-1000 ease-out ${
                showSubtitle
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              A sanctuary for yoga, sound bowl therapy, <br /> and mindful energy
              alignment.
            </p>
          </div>

          <Button
            as="link"
            href="#services"
            className="bg-secondary text-dark hover:bg-[#d4c8b5] inline-block px-[36px] py-[16px] rounded-[56px] font-gabarito font-semibold text-label uppercase tracking-[0.9px] transition-colors"
          >
            Explore Sessions
          </Button>
        </div>
      </div>
    </section>
  );
}
