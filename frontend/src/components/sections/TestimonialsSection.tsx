"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewCard from "@/components/ui/ReviewCard";
import { reviews } from "@/data/reviews";

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <SectionTitle
          eyebrow="Reviews"
          title="What Our"
          titleAccent="Customers Say"
          subtitle="Over 500 families trust Magic Thepla. Here's what they have to say."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
