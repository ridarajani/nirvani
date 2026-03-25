type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "light";
};

const colorMap = {
  primary: "text-primary",
  light: "text-light",
};

export default function SectionHeading({
  children,
  className = "",
  color = "primary",
}: SectionHeadingProps) {
  return (
    <h2
      className={`font-belle text-[36px] md:text-h2 leading-[1.2] ${colorMap[color]} ${className}`}
    >
      {children}
    </h2>
  );
}
