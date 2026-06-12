// src/app/contact/page.tsx
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { BRAND } from "@/constants";
import { orderService } from "@/services/orderService";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  mobile: z.string().optional(),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await orderService.submitContact(data as any);
    setSuccess(true);
    reset();
    setLoading(false);
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container-custom section-padding">
        <SectionTitle
          eyebrow="Get in Touch"
          title="We'd Love to"
          titleAccent="Hear from You"
          subtitle="Questions about orders, bulk bookings, or just want to say hi? We're here!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand mb-6">
              Contact Info
            </h3>
            <div className="space-y-5 mb-8">
              {[
                {
                  icon: Phone,
                  label: "WhatsApp / Call",
                  value: BRAND.whatsapp,
                },
                { icon: Mail, label: "Email", value: BRAND.email },
                { icon: MapPin, label: "Location", value: BRAND.address },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-light">{label}</p>
                    <p className="font-semibold text-brand">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-48 bg-cream rounded-3xl flex items-center justify-center border-2 border-cream-dark">
              <div className="text-center">
                <MapPin size={32} className="text-primary mx-auto mb-2" />
                <p className="text-brand-light text-sm">Surat, Gujarat</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card-base p-8">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-brand mb-2">
                  Message Sent!
                </h3>
                <p className="text-brand-light">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-primary font-semibold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Name"
                    placeholder="Your name"
                    required
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    error={errors.email?.message}
                    {...register("email")}
                  />
                </div>
                <Input
                  label="Mobile (Optional)"
                  placeholder="10-digit number"
                  error={errors.mobile?.message}
                  {...register("mobile")}
                />
                <Input
                  label="Subject"
                  placeholder="What's this about?"
                  required
                  error={errors.subject?.message}
                  {...register("subject")}
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-brand">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-2xl border-2 border-cream-dark focus:border-primary outline-none bg-white text-brand font-body resize-none"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <Button type="submit" size="lg" fullWidth disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
