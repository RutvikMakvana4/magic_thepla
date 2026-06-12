"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

const values = [
  { icon: "🏠", title: "Made at Home", desc: "Every thepla is rolled and cooked in our home kitchen, just like your mother would." },
  { icon: "❤️", title: "Made with Love", desc: "We put our heart into every batch, treating every order as if it's for our own family." },
  { icon: "🌿", title: "Pure Ingredients", desc: "No preservatives. No artificial flavors. Only fresh, natural ingredients you can trust." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Hero */}
      <section className="section-padding bg-cream">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-3 block">
              Our Story
            </span>
            <h1 className="font-display text-5xl font-bold text-brand mb-6">
              Maa na haath no{" "}
              <span className="text-gradient">magic</span>
            </h1>
            <p className="text-brand-light leading-relaxed mb-4">
              Magic Thepla was born from a simple truth: nothing tastes better than food made with love at home. 
              What started as a mother's kitchen recipe — passed down through generations — has become Surat's 
              most-loved homemade thepla brand.
            </p>
            <p className="text-brand-light leading-relaxed mb-4">
              Our founder, inspired by her mother's legendary methi thepla, started sharing them with neighbors 
              and friends. Word spread, orders grew, and Magic Thepla was born — not as a business, but as a 
              mission to bring the taste of home to every doorstep.
            </p>
            <p className="text-brand-light leading-relaxed mb-8">
              Today, we serve hundreds of families across Gujarat — from daily tiffins to grand wedding feasts — 
              with the same love and care that started it all.
            </p>
            <Button href="/menu">Order Now</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-secondary-light to-secondary rounded-full flex items-center justify-center shadow-warm-lg text-[8rem]"
            >
              🫓
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle
            eyebrow="Our Values"
            title="What We"
            titleAccent="Stand For"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card-base p-8 text-center"
              >
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-bold text-brand mb-3">{v.title}</h3>
                <p className="text-brand-light text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-brand text-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl mb-6">🎯</p>
            <h2 className="font-display text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed">
              To make every Gujarati family feel the warmth of home-cooked food, 
              no matter where they are — through the simple, soulful magic of a perfectly made thepla.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}