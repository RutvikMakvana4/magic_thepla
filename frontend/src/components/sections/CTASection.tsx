"use client";
import { motion } from "framer-motion";
import { MessageCircle, Package } from "lucide-react";
import Button from "@/components/ui/Button";
import { BRAND } from "@/constants";

export default function CTASection() {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      "Hi! I'd like to order some Magic Thepla! 🫓",
    );
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-brand rounded-5xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-primary rounded-full"
            />
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary rounded-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.p
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl mb-6"
            >
              🫓
            </motion.p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to taste the magic?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
              Order fresh theplas for daily meals or book a bulk order for your
              next big celebration.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsApp}
                className="btn-whatsapp flex items-center gap-2 text-base px-8 py-4"
              >
                <MessageCircle size={20} fill="white" />
                Order on WhatsApp
              </motion.button>

              <Button
                href="/bulk-order"
                variant="secondary"
                size="lg"
                icon={Package}
                className="border-white text-white hover:bg-white hover:text-brand"
              >
                Bulk Booking
              </Button>
            </div>

            <p className="mt-6 text-white/40 text-sm">
              Festival hoy ke safar — Thepla tayyar ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
