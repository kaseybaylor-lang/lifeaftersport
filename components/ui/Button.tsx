"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline";
  children: ReactNode;
  href?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-md font-bold uppercase tracking-tight transition-all duration-200 cursor-pointer inline-block text-center";

  const variantStyles = {
    primary:
      "bg-[var(--neon-yellow)] text-[var(--black)] hover:shadow-lg hover:shadow-[var(--neon-yellow)]/20",
    outline:
      "bg-transparent border-2 border-[var(--neon-yellow)] text-[var(--neon-yellow)] hover:bg-[var(--neon-yellow)] hover:text-[var(--black)]",
  };

  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
