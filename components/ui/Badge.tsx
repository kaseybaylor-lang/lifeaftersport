import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "outline", className = "" }: BadgeProps) {
  const variantStyles = {
    primary: "bg-[var(--primary-yellow)] text-[var(--background-dark)]",
    outline: "border-2 border-[var(--primary-yellow)] text-[var(--primary-yellow)] bg-transparent",
  };

  return (
    <div
      className={`inline-block rounded-full px-4 py-1 text-sm uppercase tracking-wide font-[family-name:var(--font-jakarta)] font-[500] ${variantStyles[variant]} ${className}`}
      style={{ fontFamily: "var(--font-jakarta)" }}
    >
      {children}
    </div>
  );
}
