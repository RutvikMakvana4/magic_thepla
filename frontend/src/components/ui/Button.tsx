"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  whatsapp: "btn-whatsapp",
  ghost:
    "bg-transparent text-brand hover:text-primary transition-colors duration-300",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon: Icon,
  iconPosition = "left",
  disabled,
  className = "",
  type = "button",
  fullWidth,
}: ButtonProps) {
  const baseClass = `inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-300 active:scale-95 ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full justify-center" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={20} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={20} />}
    </>
  );

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={baseClass}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={baseClass}
    >
      {content}
    </motion.button>
  );
}
