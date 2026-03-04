import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({
  children,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`space-y-3 text-center ${className}`}>
      <h2
        className="font-[family-name:var(--font-oswald)] font-[800] text-[var(--primary-yellow)] uppercase tracking-[-0.02em] text-4xl md:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-oswald)" }}
      >
        {children}
      </h2>
      {subtitle && (
        <p
          className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-base md:text-lg max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-jakarta)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
