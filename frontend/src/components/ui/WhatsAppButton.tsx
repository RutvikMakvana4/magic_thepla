"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/constants";

export default function WhatsAppButton() {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to order some Magic Thepla! 🫓",
    );
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
      aria-label="Order on WhatsApp"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <MessageCircle size={28} fill="white" />
      </motion.div>

      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
}
