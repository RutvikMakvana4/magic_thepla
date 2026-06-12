"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const occasions = [
  { icon: "💍", title: "Weddings", desc: "500–5000 pieces for shaadi functions, mehndi, and receptions.", color: "bg-primary/10 border-primary/20" },
  { icon: "🪔", title: "Festivals", desc: "Navratri, Diwali, Uttarayan — theplas that make every festival tastier.", color: "bg-secondary/20 border-secondary/40" },
  { icon: "🏢", title: "Corporate", desc: "Employee gifting, office events, team lunches — premium packaging.", color: "bg-accent/10 border-accent/20" },
  { icon: "👨‍👩‍👧‍👦", title: "Family Events", desc: "Birthday parties, namkaran, upanayan — any family milestone.", color: "bg-primary/10 border-primary/20" },
];

export default function FestivalSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Celebrations"
          title="From small orders to"
          titleAccent="grand celebrations"
          subtitle="Magic Thepla scales with your joy. Whether it's 50 pieces or 5000, we deliver freshness at every scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {occasions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex gap-5 p-6 rounded-3xl border-2 ${item.color} hover:shadow-card transition-all duration-300`}
            >
              <div className="text-4xl flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="font-display text-xl font-bold text-brand mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-light text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary to-secondary rounded-4xl p-8 md:p-12 text-center text-white"
        >
          <p className="font-display text-3xl md:text-4xl font-bold mb-3">
            Planning a big event?
          </p>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Contact us early for bulk bookings. We plan, prepare, and deliver so you can celebrate without worry.
          </p>
          <Button href="/bulk-order" variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Book Bulk Order
          </Button>
        </motion.div>
      </div>
    </section>
  );
}