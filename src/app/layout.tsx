import type { Metadata } from "next";
import { gabarito, belle } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nirvani - Find Your Inner Stillness",
  description:
    "A sanctuary for yoga, sound bowl therapy, and mindful energy alignment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gabarito.variable} ${belle.variable} font-gabarito antialiased`}>
        {children}
      </body>
    </html>
  );
}
