import Image from "next/image";
import { BRAND_ESSENCE_ITEMS } from "@/lib/constants";

export default function BrandEssenceStrip() {
  const items = [...BRAND_ESSENCE_ITEMS, ...BRAND_ESSENCE_ITEMS];

  return (
    <div className="w-full bg-dark overflow-hidden py-4 md:py-6 px-4 md:px-[60px]">
      <div className="flex items-center gap-8 md:gap-[72px] animate-scroll-left whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-[72px] shrink-0">
            <p className="font-belle text-[28px] md:text-h3 text-light whitespace-nowrap">
              {item.text}
            </p>
            <div className="w-[35px] h-[33px] md:w-[57px] md:h-[53px] relative shrink-0">
              <Image src={item.icon} alt="" fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
