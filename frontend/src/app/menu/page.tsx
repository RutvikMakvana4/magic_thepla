"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { products } from "@/data/products";
import { ProductCategory } from "@/types";

const categories: {
  value: ProductCategory | "all";
  label: string;
  emoji: string;
}[] = [
  { value: "all", label: "All", emoji: "🫓" },
  { value: "daily", label: "Daily", emoji: "🌅" },
  { value: "travel", label: "Travel", emoji: "✈️" },
  { value: "festival", label: "Festival", emoji: "🪔" },
  { value: "special", label: "Special", emoji: "✨" },
  { value: "combo", label: "Combo", emoji: "📦" },
];

export default function MenuPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(
    "all",
  );

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchesCat =
        activeCategory === "all" || p.category === activeCategory;
      return matchesSearch && matchesCat;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container-custom section-padding">
        <SectionTitle
          eyebrow="Our Menu"
          title="Fresh, Homemade"
          titleAccent="Theplas"
          subtitle="Choose from our variety of handcrafted Gujarati theplas."
        />

        {/* Search */}
        <div className="relative max-w-md mx-auto mb-8">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-light"
            size={20}
          />
          <input
            type="text"
            placeholder="Search theplas..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-cream-dark focus:border-primary outline-none bg-white text-brand font-body"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeCategory === cat.value
                  ? "bg-primary text-white shadow-warm"
                  : "bg-white text-brand border-2 border-cream-dark hover:border-primary"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <p className="font-display text-2xl text-brand mb-2">
              No theplas found
            </p>
            <p className="text-brand-light">
              Try a different search or category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
