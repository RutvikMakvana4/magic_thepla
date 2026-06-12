import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white text-xl font-bold font-display">
                M
              </div>
              <div>
                <p className="font-display font-bold text-xl">Magic Thepla</p>
                <p className="text-sm text-white/60">Maa na haath no magic</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm mb-6">
              Homemade Gujarati Theplas crafted with love, fresh ingredients,
              and generations of tradition. From your daily tiffin to grand
              celebrations.
            </p>
            <div className="flex gap-4">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M16 11.37a4 4 0 1 1-7.99.63 4 4 0 0 1 7.99-.63z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M17.5 6.5h.01"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <Phone
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-secondary"
                />
                <span className="text-sm">{BRAND.whatsapp}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <Mail
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-secondary"
                />
                <span className="text-sm">{BRAND.email}</span>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-secondary"
                />
                <span className="text-sm">{BRAND.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Magic Thepla. All rights reserved.</p>
          <p className="font-display italic text-white/40">
            "Every bite feels like home" 🫓
          </p>
        </div>
      </div>
    </footer>
  );
}
