import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyUs from "@/components/sections/WhyUs";
import FestivalSection from "@/components/sections/FestivalSection";
import HowItWorks from "@/components/sections/HowItWorks";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GallerySection from "@/components/sections/GallerySection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <WhyUs />
      <FestivalSection />
      <HowItWorks />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
    </>
  );
}
