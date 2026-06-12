"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: "🏠",
    title: "Homemade Taste",
    desc: "Crafted in a home kitchen with love, just like Maa makes it.",
  },
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    desc: "Only the freshest methi, spices, and whole wheat — no preservatives.",
  },
  {
    icon: "✨",
    title: "Hygienic Process",
    desc: "Food-safe kitchen, gloves, masks — quality you can trust.",
  },
  {
    icon: "🪔",
    title: "Festival Ready",
    desc: "Special batches for Navratri, Diwali, and every celebration.",
  },
  {
    icon: "📦",
    title: "Bulk Orders",
    desc: "From 50 to 5000 pieces — we scale with your celebration.",
  },
  {
    icon: "🚀",
    title: "Fresh Delivery",
    desc: "Delivered to your doorstep while still warm and fresh.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="The Magic"
          titleAccent="Difference"
          subtitle="What makes Magic Thepla special isn't just the ingredients — it's the love and care in every step."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="card-base p-6"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4"
              >
                {reason.icon}
              </motion.div>
              <h3 className="font-display text-xl font-bold text-brand mb-2">
                {reason.title}
              </h3>
              <p className="text-brand-light text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
