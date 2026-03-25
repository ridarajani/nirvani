import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full bg-dark py-12 md:py-24 px-6 md:px-[88px]">
      {/* Mobile: stacked layout */}
      <div className="flex flex-col md:hidden items-center gap-10">
        {/* Logo */}
        <div className="relative w-[150px] h-[190px]">
          <Image
            src="/images/footer-logo.png"
            alt="Nirvani"
            fill
            unoptimized
            className="object-contain"
          />
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-gabarito font-semibold text-label text-light tracking-[0.9px] uppercase p-2 hover:opacity-80 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-col items-center gap-4">
          <span className="font-gabarito font-medium text-subtitle text-light tracking-[1px] uppercase">
            Follow us
          </span>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-[48px] h-[48px] border border-secondary flex items-center justify-center hover:bg-secondary/10 transition-colors"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={20}
                  height={20}
                  unoptimized
                  className="object-contain w-5 h-5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-3">
            <a href="#" className="font-gabarito font-normal text-sm text-light tracking-[0.8px] uppercase hover:opacity-80">
              Privacy Policy
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-light" />
            <a href="#" className="font-gabarito font-normal text-sm text-light tracking-[0.8px] uppercase hover:opacity-80">
              Term &amp; Conditions
            </a>
          </div>
          <p className="font-gabarito font-normal text-sm text-light tracking-[0.8px] uppercase">
            Copyright 2025 by NIRVANI. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Desktop: three column layout */}
      <div className="hidden md:flex items-start justify-between">
        {/* Left column */}
        <div className="flex flex-col gap-6 self-end">
          <div className="flex items-center gap-6 mb-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-gabarito font-semibold text-label text-light tracking-[0.9px] uppercase p-[10px] hover:opacity-80 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="font-gabarito font-normal text-base text-light tracking-[0.8px] uppercase">
            Copyright 2025 by NIRVANI. All Rights Reserved
          </p>
        </div>

        {/* Logo centered */}
        <div className="flex justify-center">
          <div className="relative w-[205px] h-[258px]">
            <Image
              src="/images/footer-logo.png"
              alt="Nirvani"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col items-end gap-6 self-end">
          <div className="flex items-center gap-[30px] mb-10">
            <span className="font-gabarito font-medium text-subtitle text-light tracking-[1px] uppercase">
              Follow us
            </span>
            <div className="flex gap-[27px]">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-[54px] h-[54px] border border-secondary flex items-center justify-center hover:bg-secondary/10 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                    unoptimized
                    className="object-contain w-6 h-6"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="font-gabarito font-normal text-base text-light tracking-[0.8px] uppercase hover:opacity-80"
            >
              Privacy Policy
            </a>
            <div className="w-1.5 h-1.5 rounded-full bg-light" />
            <a
              href="#"
              className="font-gabarito font-normal text-base text-light tracking-[0.8px] uppercase hover:opacity-80"
            >
              Term &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
