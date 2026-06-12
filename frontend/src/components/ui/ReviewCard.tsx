import { Star } from "lucide-react";
import { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="card-base p-6 h-full flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill={i < review.rating ? "#F6B73C" : "none"}
            color={i < review.rating ? "#F6B73C" : "#ddd"}
          />
        ))}
      </div>

      {/* Review text */}
      <p className="text-brand-light leading-relaxed text-sm flex-1 mb-4">
        "{review.review}"
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-brand text-sm">{review.name}</p>
            {review.verified && (
              <span className="text-xs text-accent">✓ Verified</span>
            )}
          </div>
          <p className="text-xs text-brand-light">{review.location}</p>
        </div>
      </div>
    </div>
  );
}
