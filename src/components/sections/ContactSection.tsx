import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CONTACT_FIELDS } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full bg-secondary "
    >
      {/* Decorative background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/contactus-background.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-0.1"
      />

      <div className="w-full px-6 md:px-[91px] py-10 md:py-[60px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 mt-0 md:mt-25">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      {/* Bottom left image - half in contact, half in footer */}
      <div className="hidden md:block absolute left-0 bottom-0 translate-y-1/4 w-[494px] h-[494px] z-20">
        <Image
          src="/images/contact-image2.png"
          alt="Meditation"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <div className="flex-1 text-center md:text-left">
      <div className="flex flex-col gap-3 items-center md:items-start">
        <SectionHeading>
          Begin Your Journey <br/> Back to Calm
        </SectionHeading>
        <p className="font-gabarito font-semibold text-[16px] md:text-h6 text-dark uppercase">
          Reserve a moment that&apos;s entirely yours where your mind softens,
          your breath settles, and your energy realigns.
        </p>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="flex-1 flex flex-col gap-4 mt-0 md:mt-[40px]">
      {CONTACT_FIELDS.map((field) => (
        <div key={field.label} className="flex flex-col gap-2 w-full">
          <label className="font-gabarito font-semibold text-label text-dark tracking-[0.9px] uppercase">
            {field.label}
          </label>
          <div className="border-b-2 border-primary">
            <input
              type={field.type}
              placeholder={field.placeholder}
              className="w-full bg-transparent px-4 py-[14px] font-gabarito text-body text-dark placeholder:text-dark/60 outline-none"
            />
          </div>
        </div>
      ))}

      <Button variant="secondary" className="mt-6 self-center md:self-start bg-primary text-light hover:bg-[#667762] inline-block px-[36px] py-[16px] rounded-[56px] font-gabarito font-semibold text-label uppercase tracking-[0.9px] transition-colors">
        Send Message
      </Button>
    </div>
  );
}
