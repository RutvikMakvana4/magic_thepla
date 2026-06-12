import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CartDrawer from "@/components/features/CartDrawer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magic Thepla – Every bite feels like home",
  description:
    "Fresh homemade Gujarati Thepla for daily meals, travel and grand celebrations. Order now!",
  keywords:
    "thepla, gujarati, homemade, methi thepla, travel food, wedding catering",
  openGraph: {
    title: "Magic Thepla",
    description: "Every bite feels like home",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CartDrawer />
      </body>
    </html>
  );
}
