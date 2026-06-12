"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  MessageCircle,
} from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { BRAND } from "@/constants";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    toggleCart,
    updateQuantity,
    removeItem,
    totalPrice,
    clearCart,
  } = useCartStore();

  const handleWhatsAppOrder = () => {
    const itemList = items
      .map(
        (i) =>
          `• ${i.product.name} x${i.quantity} — ₹${i.product.price * i.quantity}`,
      )
      .join("\n");
    const msg = encodeURIComponent(
      `Hi! I'd like to order:\n\n${itemList}\n\nTotal: ₹${totalPrice()}\n\nPlease confirm!`,
    );
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${msg}`, "_blank");
    clearCart();
    toggleCart();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/40 z-50"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-background z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream-dark">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-primary" size={24} />
                <h2 className="font-display text-xl font-bold text-brand">
                  Your Order
                </h2>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:text-primary transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-6xl mb-4">🫓</p>
                  <p className="font-display text-xl text-brand mb-2">
                    Your cart is empty
                  </p>
                  <p className="text-brand-light text-sm">
                    Add some theplas to get started!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="card-base p-4 flex gap-4"
                    >
                      <div className="w-16 h-16 bg-cream rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                        🫓
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-brand text-sm truncate">
                          {item.product.name}
                        </p>
                        <p className="text-primary font-bold">
                          ₹{item.product.price}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-7 h-7 bg-cream rounded-lg flex items-center justify-center hover:bg-cream-dark transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-semibold w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-7 h-7 bg-cream rounded-lg flex items-center justify-center hover:bg-cream-dark transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-brand-light hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                        <p className="font-bold text-brand">
                          ₹{item.product.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-cream-dark space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-brand">Total</span>
                  <span className="font-display text-2xl font-bold text-primary">
                    ₹{totalPrice()}
                  </span>
                </div>
                <button
                  onClick={handleWhatsAppOrder}
                  className="btn-whatsapp w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-base"
                >
                  <MessageCircle size={20} fill="white" />
                  Order on WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
