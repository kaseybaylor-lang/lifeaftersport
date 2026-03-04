"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const pricingTiers = [
  {
    name: "Institutional",
    subtitle: "Universities / Athletic Programs",
    price: "$7/athlete/month",
    altPrice: "$5/athlete/year (annual)",
    description:
      "Provides scalable access across entire athletic departments.",
    cta: "Contact Sales",
    featured: false,
  },
  {
    name: "Individual",
    subtitle: "Student-Athletes",
    price: "$20/month",
    altPrice: null,
    description:
      "Premium access to advanced resources, tools, and opportunities.",
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Enterprise",
    subtitle: "Custom Partnerships",
    price: "Custom",
    altPrice: null,
    description:
      "Tailored solutions for large organizations. Contact our sales team.",
    cta: "Talk to Us",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="min-h-screen grid-texture py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading>MONETIZATION MODEL</SectionHeading>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative group ${
                tier.featured ? "md:scale-105 md:-mt-4" : ""
              }`}
            >
              {/* Popular Badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-[var(--primary-yellow)] text-[var(--background-dark)] px-6 py-2 rounded-full">
                    <span
                      className="font-[family-name:var(--font-oswald)] font-[800] text-sm uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-oswald)" }}
                    >
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Pricing Card */}
              <div
                className={`bg-[var(--background-card)] rounded-2xl p-8 h-full flex flex-col transition-all duration-300 ${
                  tier.featured
                    ? "border-2 border-[var(--primary-yellow)] shadow-2xl shadow-[var(--primary-yellow)]/20"
                    : "border border-[var(--text-secondary)]/20 hover:border-[var(--primary-yellow)]/40"
                } hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Tier Name */}
                <h3
                  className={`font-[family-name:var(--font-oswald)] font-[800] text-4xl uppercase mb-2 ${
                    tier.featured
                      ? "text-[var(--primary-yellow)]"
                      : "text-[var(--text-primary)]"
                  }`}
                  style={{ fontFamily: "var(--font-oswald)" }}
                >
                  {tier.name}
                </h3>

                {/* Subtitle */}
                <p
                  className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm uppercase tracking-wider mb-6"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {tier.subtitle}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <p
                    className={`font-[family-name:var(--font-oswald)] font-[700] text-5xl ${
                      tier.featured
                        ? "text-[var(--primary-yellow)]"
                        : "text-[var(--text-primary)]"
                    }`}
                    style={{ fontFamily: "var(--font-oswald)" }}
                  >
                    {tier.price}
                  </p>
                </div>

                {/* Alternative Price */}
                {tier.altPrice && (
                  <p
                    className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm mb-6"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {tier.altPrice}
                  </p>
                )}

                {/* Divider */}
                <div
                  className={`h-px my-6 ${
                    tier.featured
                      ? "bg-[var(--primary-yellow)]/30"
                      : "bg-[var(--text-secondary)]/20"
                  }`}
                />

                {/* Description */}
                <p
                  className="font-[family-name:var(--font-jakarta)] text-[var(--text-primary)] text-base leading-relaxed mb-8 flex-grow"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {tier.description}
                </p>

                {/* CTA Button */}
                <Button
                  variant={tier.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p
            className="font-[family-name:var(--font-jakarta)] text-[var(--text-secondary)] text-sm"
            style={{ fontFamily: "var(--font-jakarta)" }}
          >
            All pricing is subject to change. Custom enterprise solutions
            available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
