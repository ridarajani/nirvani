"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showHeading, setShowHeading] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowHeading(true), 200);
          setTimeout(() => setShowImage(true), 600);
          setTimeout(() => setShowText(true), 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative w-full bg-light py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto mt-10 md:mt-20 mb-10 md:mb-20 px-6 md:px-[88px]">
        {/* Heading */}
        <div className="mb-12 overflow-hidden">
          <div
            className={`transition-all duration-1000 ease-out ${
              showHeading ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <SectionHeading>
              Rooted in Stillness, <br/> Designed for Healing
            </SectionHeading>
          </div>
        </div>

        {/* Image + Content side by side */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative">
          {/* Left - Image with circle behind */}
          <div className="relative min-h-[400px] md:min-h-[700px] w-full md:w-[55%] shrink-0">
            {/* Decorative circle - behind image, outside overflow-hidden */}
            <div className="absolute right-0 bottom-[50px] translate-x-1/2 md:translate-x-3/4 w-[200px] h-[200px] md:w-[353px] md:h-[353px] z-0">
              <Image
                src="/images/ellipse-stroke.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="absolute inset-0 overflow-hidden z-10">
              <div
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  showImage ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <Image
                  src="/images/about-image.png"
                  alt="Healing scene"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`flex items-start pt-0 md:pt-16 transition-all duration-1000 ease-out ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-gabarito font-normal text-body text-dark leading-[1.4]">
              Nirvani was built on the belief that true healing comes from within.
              Through intentional movement and sound-based practices, we guide you
              toward deeper resilience, clarity, and inner calm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
