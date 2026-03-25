"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { METHOD_STEPS } from "@/lib/constants";

export default function MethodsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showHeading, setShowHeading] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShowHeading(true), 200);
          setTimeout(() => setShowDesc(true), 600);
          setTimeout(() => setShowSteps(true), 1000);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="methods" ref={sectionRef} className="w-full bg-light py-16 md:py-[160px]">
      <div className="w-full px-6 md:px-[88px]">
        {/* Heading centered */}
        <div className="flex flex-col items-center gap-[20px] mb-10 md:mb-20">
          <div className="overflow-hidden">
            <div className={`transition-all duration-1000 ease-out ${showHeading ? "translate-y-0" : "translate-y-full"}`}>
              <SectionHeading className="text-center">
                The Nirvani Method:
                <br />
                A Journey Back to Your Center
              </SectionHeading>
            </div>
          </div>
          <div className="overflow-hidden">
            <p className={`font-gabarito font-semibold text-[16px] md:text-h6 text-dark text-center uppercase transition-all duration-1000 ease-out ${showDesc ? "translate-y-0" : "translate-y-full"}`}>
              Nirvani&apos;s unique method combines mindful movement, therapeutic
              sound, and <br/> energy practices to foster calmness. Each stage is crafted
              to quiet the mind, <br/> relieve tension, and help you achieve a deeper,
              grounded state.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {METHOD_STEPS.map((step, i) => (
            <MethodStep key={step.title} step={step} index={i} show={showSteps} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodStep({
  step,
  index,
  show,
}: {
  step: (typeof METHOD_STEPS)[number];
  index: number;
  show: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-[25px] transition-all duration-1000 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="w-[96px] h-[68px] relative overflow-hidden">
        <Image
          src={step.icon}
          alt={step.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex flex-col gap-5">
        <span className="absolute -left-[18px] top-[-7px] font-gabarito font-semibold text-h2 text-secondary uppercase">
          {step.num}
        </span>
        <h3 className="text-h4 text-dark">{step.title}</h3>
        <p className="font-gabarito font-normal text-body text-dark leading-[1.4]">
          {step.desc}
        </p>
      </div>
    </div>
  );
}
