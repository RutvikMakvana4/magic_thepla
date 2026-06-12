"use client";
import { motion } from "framer-motion";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3 font-body">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-brand leading-tight">
        {title}{" "}
        {titleAccent && <span className="text-gradient">{titleAccent}</span>}
      </h2>
      {subtitle && (
        <p className="mt-4 text-brand-light text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
