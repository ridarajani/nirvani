"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [showHeading, setShowHeading] = useState(false);
  const [showDesc, setShowDesc] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowHeading(true), 200);
          setTimeout(() => setShowDesc(true), 600);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="w-full bg-light">
      {/* Green header */}
      <div ref={headerRef} className="bg-primary w-full py-10 md:py-[68px] px-6 md:px-[192px] flex flex-col items-center gap-6 md:gap-[41px]">
        <div className="overflow-hidden">
          <div className={`transition-all duration-1000 ease-out ${showHeading ? "translate-y-0" : "translate-y-full"}`}>
            <SectionHeading color="light" className="text-center">
              A Space Built for Quiet
              <br />
              Transformation
            </SectionHeading>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className={`font-gabarito font-medium text-subtitle text-light text-center tracking-[1px] uppercase transition-all duration-1000 ease-out ${showDesc ? "translate-y-0" : "translate-y-full"}`}>
            Through stillness, breath, and subtle vibration, Nirvani guides you
            toward clarity, <br/> balance, and inner renewal—one quiet moment at a time.
          </p>
        </div>
      </div>

      {/* Service cards */}
      <div className="flex flex-col md:flex-row w-full gap-[2px]">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ title, desc, img }: { title: string; desc: string; img: string }) {
  return (
    <div className="relative w-full md:flex-1 h-[300px] md:h-[559px] flex flex-col justify-end px-6 md:px-[40px] py-8 md:py-[56px] overflow-hidden group cursor-pointer">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-dark/30 transition-colors duration-500 group-hover:bg-dark/50" />
      <div className="absolute bottom-8 md:bottom-[56px] left-6 md:left-[40px] right-6 md:right-[40px] z-10">
        <p className="font-gabarito font-semibold text-[24px] md:text-h5 text-secondary uppercase leading-tight translate-y-8 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-y-0">
          {title}
        </p>
        <p className="font-gabarito text-[16px] md:text-body text-light mt-0 h-0 overflow-hidden opacity-0 translate-y-8 transition-all duration-1000 delay-100 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:h-auto group-hover:mt-4 group-hover:opacity-100 group-hover:translate-y-0">
          {desc}
        </p>
      </div>
    </div>
  );
}
