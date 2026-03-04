import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-[var(--background-card)] border border-[var(--text-secondary)]/20 rounded-xl p-6 ${
        hover ? "hover:border-[var(--primary-yellow)]/40 hover:shadow-lg hover:shadow-[var(--primary-yellow)]/10 transition-all duration-300" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
