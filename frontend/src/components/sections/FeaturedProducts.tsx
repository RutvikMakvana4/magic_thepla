"use client";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";
import { featuredProducts } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Our Menu"
          title="Made Fresh,"
          titleAccent="With Love"
          subtitle="Every thepla is handcrafted with fresh ingredients, aromatic spices, and the magic of homemade tradition."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Button href="/menu" variant="secondary" size="lg">
            View Full Menu →
          </Button>
        </div>
      </div>
    </section>
  );
}
