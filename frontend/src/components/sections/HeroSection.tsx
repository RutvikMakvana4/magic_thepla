"use client";
import { motion } from "framer-motion";
import { ChevronDown, Package, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden flex items-center">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/20 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 left-10 w-16 h-16 bg-accent/20 rounded-2xl rotate-12"
        />
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-1/4 right-16 w-10 h-10 bg-secondary/30 rounded-full"
        />
      </div>

      <div className="container-custom w-full px-4 md:px-8 lg:px-16 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/40 text-brand text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <span>🫓</span>
              <span>Homemade Gujarati Thepla</span>
              <span>✨</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-brand leading-tight mb-4"
            >
              Every bite
              <br />
              <span className="text-gradient">feels like</span>
              <br />
              home.
            </motion.h1>

            {/* Gujarati tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-display text-brand-light italic text-lg mb-3"
            >
              Maa na haath no magic, darek bite ma
            </motion.p>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-brand-light text-lg leading-relaxed mb-8 max-w-md"
            >
              Fresh homemade Gujarati Thepla for daily meals, travel, and
              celebrations. Made with love, fresh ingredients, and generations
              of tradition.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button href="/menu" size="lg" icon={Package}>
                Order Now
              </Button>
              <Button
                href="/bulk-order"
                variant="secondary"
                size="lg"
                icon={MessageCircle}
              >
                Bulk Order
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "500+", label: "Happy Families" },
                { value: "4.9★", label: "Avg Rating" },
                { value: "5yrs", label: "Of Tradition" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-brand-light">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero visual */}
          <div className="relative flex items-center justify-center">
            {/* Large thepla plate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="relative z-10"
            >
              {/* Main plate */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-secondary-light via-secondary to-primary/30 rounded-full shadow-warm-lg flex items-center justify-center"
              >
                <span className="text-[10rem]">🫓</span>
              </motion.div>

              {/* Steam particles */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-8 bg-white/60 rounded-full blur-sm"
                  style={{
                    left: `${30 + i * 20}%`,
                    top: "10%",
                  }}
                  animate={{
                    y: [0, -40, 0],
                    opacity: [0, 0.8, 0],
                    scaleX: [1, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.7,
                    repeat: Infinity,
                  }}
                />
              ))}

              {/* Floating spice badges */}
              {[
                { emoji: "🌿", top: "0%", right: "-8%", label: "Methi" },
                { emoji: "🌶️", bottom: "10%", right: "-12%", label: "Spicy" },
                { emoji: "🫙", top: "20%", left: "-12%", label: "Masala" },
              ].map((spice, i) => (
                <motion.div
                  key={i}
                  className="absolute card-base px-3 py-2 flex items-center gap-2 text-sm font-semibold text-brand"
                  style={{
                    top: spice.top,
                    bottom: spice.bottom,
                    left: spice.left,
                    right: spice.right,
                  }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4 + i,
                    delay: i * 1.2,
                    repeat: Infinity,
                  }}
                >
                  <span className="text-2xl">{spice.emoji}</span>
                  <span>{spice.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Festival badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-4 left-0 right-0 mx-auto w-fit card-base px-5 py-3 text-center"
            >
              <p className="text-xs text-brand-light">✨ Fresh batch ready!</p>
              <p className="font-display font-bold text-brand text-sm">
                Festival hoy ke safar — Thepla tayyar
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-light"
      >
        <p className="text-xs">Scroll to explore</p>
        <ChevronDown size={20} />
      </motion.div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 inset-x-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L1440 60L1440 30C1440 30 1080 0 720 0C360 0 0 30 0 30V60Z"
            fill="#fff8ef"
          />
        </svg>
      </div>
    </section>
  );
}
