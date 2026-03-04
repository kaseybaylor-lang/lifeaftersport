"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "outline";
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-md font-bold uppercase tracking-tight transition-all duration-200 cursor-pointer";

  const variantStyles = {
    primary:
      "bg-[var(--primary-yellow)] text-[var(--background-dark)] hover:shadow-lg hover:shadow-[var(--primary-yellow)]/20",
    outline:
      "bg-transparent border-2 border-[var(--primary-yellow)] text-[var(--primary-yellow)] hover:bg-[var(--primary-yellow)] hover:text-[var(--background-dark)]",
  };

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
