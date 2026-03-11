"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const success = signIn(formData.email, formData.password);

    if (success) {
      router.push("/");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[var(--black)] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="font-heading font-bold text-2xl text-[var(--neon-yellow)] mb-2 cursor-pointer">
              LIFE AFTER SPORT
            </h1>
          </Link>
          <p className="text-[var(--text-secondary)]">Welcome back!</p>
        </div>

        {/* Form Card */}
        <div className="bg-[var(--dark-navy)] border border-[var(--neon-yellow)]/20 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--text-primary)] mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
                placeholder="you@example.com"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[var(--text-primary)] mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
                placeholder="Enter your password"
              />
            </div>

            {/* Submit Button */}
            <Button variant="primary" className="w-full mt-6" type="submit">
              Sign In
            </Button>
          </form>

          {/* Register Link */}
          <p className="text-center text-[var(--text-secondary)] mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[var(--neon-yellow)] hover:underline font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
