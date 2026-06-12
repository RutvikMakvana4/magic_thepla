"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const steps = [
  {
    step: "01",
    icon: "🛒",
    title: "Select",
    desc: "Browse our menu and choose your theplas — daily, travel, or festival packs.",
  },
  {
    step: "02",
    icon: "✅",
    title: "Confirm",
    desc: "Place your order via WhatsApp or our website. We confirm within 30 minutes.",
  },
  {
    step: "03",
    icon: "👩‍🍳",
    title: "Fresh Preparation",
    desc: "Your theplas are handcrafted fresh with love using the finest ingredients.",
  },
  {
    step: "04",
    icon: "🚀",
    title: "Delivery",
    desc: "Packed hygienically and delivered to your doorstep while still warm!",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Process"
          title="How It"
          titleAccent="Works"
          subtitle="Ordering your favourite theplas is as simple as 1-2-3-4!"
        />

        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-20 h-20 bg-white rounded-full shadow-warm flex items-center justify-center text-3xl mb-4 border-4 border-cream-dark z-10"
                >
                  {step.icon}
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                    {i + 1}
                  </span>
                </motion.div>

                <h3 className="font-display text-lg font-bold text-brand mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-brand-light leading-relaxed max-w-[200px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
