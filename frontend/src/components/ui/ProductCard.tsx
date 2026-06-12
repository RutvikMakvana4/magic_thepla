"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ShoppingBag, Leaf } from "lucide-react";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="card-base overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
        <div className="w-full h-full bg-gradient-to-br from-secondary-light to-cream flex items-center justify-center">
          <span className="text-6xl">🫓</span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-1">
          {product.isBestseller && (
            <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
              ⭐ Bestseller
            </span>
          )}
          {product.isNew && (
            <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
              ✨ New
            </span>
          )}
          {product.isJain && (
            <span className="bg-secondary text-brand text-xs font-bold px-2 py-1 rounded-full">
              🙏 Jain
            </span>
          )}
        </div>

        {/* Veg badge */}
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-white p-1 rounded">
            <div className="w-4 h-4 border-2 border-accent rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 bg-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-brand mb-1">
          {product.name}
        </h3>
        {product.nameGu && (
          <p className="text-sm text-brand-light mb-2">{product.nameGu}</p>
        )}
        <p className="text-sm text-brand-light leading-relaxed mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <Star size={14} fill="#F6B73C" color="#F6B73C" />
          <span className="text-sm font-semibold text-brand">
            {product.rating}
          </span>
          <span className="text-xs text-brand-light">
            ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Serving info */}
        <div className="flex gap-3 text-xs text-brand-light mb-4">
          {product.servings && <span>📦 {product.servings}</span>}
          {product.weight && <span>⚖️ {product.weight}</span>}
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-primary">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-brand-light line-through ml-2">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              added
                ? "bg-accent text-white"
                : "bg-primary text-white hover:shadow-warm"
            }`}
          >
            <ShoppingBag size={16} />
            {added ? "Added!" : "Add"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
