"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";

const items = [
  {
    emoji: "🫓",
    label: "Fresh Methi Thepla",
    aspect: "tall",
    color: "from-secondary-light to-secondary",
  },
  {
    emoji: "👩‍🍳",
    label: "Hand-rolled with love",
    aspect: "wide",
    color: "from-primary/20 to-primary/40",
  },
  {
    emoji: "💍",
    label: "Wedding catering",
    aspect: "normal",
    color: "from-accent/20 to-accent/40",
  },
  {
    emoji: "✈️",
    label: "Travel-ready packs",
    aspect: "normal",
    color: "from-secondary/20 to-secondary/50",
  },
  {
    emoji: "🌶️",
    label: "Fresh spices",
    aspect: "tall",
    color: "from-primary/30 to-primary/60",
  },
  {
    emoji: "🎁",
    label: "Gift packaging",
    aspect: "wide",
    color: "from-accent/10 to-secondary/30",
  },
];

const aspectClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  normal: "",
};

export default function GallerySection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Gallery"
          title="Made with"
          titleAccent="Heart & Soul"
          subtitle="A glimpse into our kitchen and celebrations."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${item.color} flex items-center justify-center group cursor-pointer ${aspectClasses[item.aspect] || ""}`}
            >
              <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </span>
              <div className="absolute inset-0 bg-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
