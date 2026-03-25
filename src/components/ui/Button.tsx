import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-secondary text-dark hover:bg-[#d4c8b5]",
  secondary: "bg-primary text-light hover:bg-[#667762]",
};

const baseStyles =
  "inline-block px-9 py-4 rounded-full font-gabarito font-semibold text-label uppercase tracking-[0.9px] transition-colors";

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: "button";
  href?: never;
};

type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: "link";
  href: string;
};

type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  variant?: ButtonVariant;
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("as" in props && props.as === "link") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, ...rest } = props as ButtonAsLink;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { as, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
