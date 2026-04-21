"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    sport: "",
    university: "",
    graduationYear: "",
    status: "current-athlete" as "current-athlete" | "recent-alum",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signUp(formData);
    router.push("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
        className="w-full max-w-xl"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="font-heading font-bold text-2xl text-[var(--neon-yellow)] mb-2 cursor-pointer">
              LIFE AFTER SPORT
            </h1>
          </Link>
          <p className="text-[var(--text-secondary)]">Create your account</p>
        </div>

        {/* Form Card */}
        <div className="bg-[var(--dark-navy)] border border-[var(--neon-yellow)]/20 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

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
                placeholder="Create a password"
              />
            </div>

            {/* Sport & University Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="sport"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Sport Played
                </label>
                <input
                  type="text"
                  id="sport"
                  name="sport"
                  value={formData.sport}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
                  placeholder="e.g., Basketball, Soccer"
                />
              </div>

              <div>
                <label
                  htmlFor="university"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  University
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
                  placeholder="e.g., UCLA, Ohio State"
                />
              </div>
            </div>

            {/* Graduation Year & Status Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="graduationYear"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Graduation Year
                </label>
                <input
                  type="text"
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
                  placeholder="e.g., 2025"
                />
              </div>

              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-[var(--text-primary)] mb-2"
                >
                  Current Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--black)] border border-[var(--neon-yellow)]/30 rounded-lg text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-yellow)] transition-colors"
                >
                  <option value="current-athlete">Current Athlete</option>
                  <option value="recent-alum">Recent Alum</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button variant="primary" className="w-full" type="submit">
                Create Account
              </Button>
            </div>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-[var(--text-secondary)] mt-6">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-[var(--neon-yellow)] hover:underline font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
