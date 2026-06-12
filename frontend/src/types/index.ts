// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  nameGu?: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: ProductCategory;
  tags: string[];
  isVeg: boolean;
  isJain?: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  servings?: string;
  weight?: string;
  ingredients?: string[];
  rating: number;
  reviewCount: number;
}

export type ProductCategory =
  | "daily"
  | "travel"
  | "festival"
  | "wedding"
  | "combo"
  | "special";

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  location: string;
  date: string;
  verified: boolean;
}

export interface BulkOrderForm {
  name: string;
  mobile: string;
  email?: string;
  eventType: string;
  eventDate: string;
  guestCount: number;
  quantity: number;
  requirements: string;
  deliveryAddress: string;
}

export interface ContactForm {
  name: string;
  email: string;
  mobile?: string;
  subject: string;
  message: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}