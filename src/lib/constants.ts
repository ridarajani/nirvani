export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Methods", href: "#methods" },
  { label: "Contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Facebook", icon: "/images/facebook-f.png", href: "#" },
  { label: "Instagram", icon: "/images/instagram.png", href: "https://instagram.com/nirvaniyogaandsound" },
  { label: "TikTok", icon: "/images/youtube.png", href: "https://tiktok.com/@nirvanisoundandvibration" },
] as const;

export const SERVICES = [
  {
    title: "Harmonizing Yoga Sessions",
    desc: "A mindful blend of breath, movement, and grounding sequences designed to release tension, build inner clarity, and restore balance to both body and mind.",
    img: "/images/service3.png",
  },
  {
    title: "Sound Resonance Therapy",
    desc: "A deeply immersive healing experience using singing bowls and therapeutic frequencies to calm the nervous system, quiet mental noise, and support emotional release.",
    img: "/images/service2.png",
  },
  {
    title: "Vibrational Energy Alignment",
    desc: "A subtle, restorative practice that uses vibration, intention, and guided stillness to realign your energetic field, helping you feel centered, renewed, and grounded.",
    img: "/images/service1.png",
  },
] as const;

export const METHOD_STEPS = [
  {
    num: "1.",
    title: "Align",
    desc: "Ground your breath. Calm your senses.",
    icon: "/images/icon-relax.png",
  },
  {
    num: "2.",
    title: "Release",
    desc: "Let movement create space.",
    icon: "/images/icon-mind.png",
  },
  {
    num: "3.",
    title: "Resonate",
    desc: "Immerse in healing vibration.",
    icon: "/images/icon-peace.png",
  },
  {
    num: "4.",
    title: "Transform",
    desc: "Return renewed and centered.",
    icon: "/images/icon-transform.png",
  },
] as const;

export const BRAND_ESSENCE_ITEMS = [
  { text: "Mindful Movement", icon: "/images/layer.png" },
  { text: "Vibrational Healing", icon: "/images/layer.png" },
  { text: "Holistic Alignment", icon: "/images/layer.png" },
  { text: "Mindful Movement", icon: "/images/layer.png" },
  { text: "Vibrational Healing", icon: "/images/layer.png" },
  { text: "Holistic Alignment", icon: "/images/layer.png" },
] as const;

export const CONTACT_FIELDS = [
  { label: "Fullname", placeholder: "Your full name", type: "text" as const },
  { label: "Email", placeholder: "Enter your email", type: "email" as const },
  { label: "Contact Number", placeholder: "Your phone number", type: "tel" as const },
  { label: "Message", placeholder: "Enter what help you need", type: "text" as const },
] as const;
