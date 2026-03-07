import { ReactNode } from "react";

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  className?: string;
}

export default function GoldButton({
  children,
  as = "button",
  href,
  className = "",
  ...props
}: GoldButtonProps) {
  const Component = as === "a" ? "a" : "button";

  return (
    // @ts-expect-error - Dynamic component polymorphism
    <Component href={href} className={`btn-gold ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
