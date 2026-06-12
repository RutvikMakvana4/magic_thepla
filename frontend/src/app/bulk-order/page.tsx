"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, PartyPopper } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { orderService } from "@/services/orderService";
import { EVENT_TYPES } from "@/constants";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  mobile: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select an event date"),
  guestCount: z.coerce.number().min(10, "Minimum 10 guests").max(10000),
  quantity: z.coerce.number().min(50, "Minimum 50 theplas for bulk order"),
  requirements: z.string().min(10, "Please describe your requirements in detail"),
  deliveryAddress: z.string().min(10, "Please enter your full delivery address"),
});

type FormData = z.infer<typeof schema>;

export default function BulkOrderPage() {
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const result = await orderService.submitBulkOrder(data as any);
      if (result.success) {
        setOrderId(result.orderId);
        setSuccess(true);
        reset();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container-custom section-padding">
        <SectionTitle
          eyebrow="Bulk Orders"
          title="Plan Your"
          titleAccent="Celebration"
          subtitle="From 50 to 5000 pieces — we cater to every scale with the same homemade love."
        />

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="card-base p-10 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-6xl mb-4"
                >
                  🎉
                </motion.div>
                <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-display text-3xl font-bold text-brand mb-2">
                  Order Placed!
                </h3>
                <p className="text-brand-light mb-2">Your order ID is:</p>
                <p className="font-display text-2xl font-bold text-primary mb-4">
                  {orderId}
                </p>
                <p className="text-brand-light mb-8">
                  We'll contact you within 2 hours to confirm the details.
                  Thank you for choosing Magic Thepla! 🫓
                </p>
                <Button onClick={() => setSuccess(false)}>Place Another Order</Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card-base p-8"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Full Name"
                      placeholder="Your name"
                      required
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Input
                      label="Mobile Number"
                      placeholder="10-digit mobile"
                      required
                      error={errors.mobile?.message}
                      {...register("mobile")}
                    />
                  </div>

                  <Input
                    label="Email (Optional)"
                    placeholder="your@email.com"
                    type="email"
                    error={errors.email?.message}
                    {...register("email")}
                  />

                  {/* Event type */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-brand">
                      Event Type <span className="text-primary">*</span>
                    </label>
                    <select
                      {...register("eventType")}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-cream-dark focus:border-primary outline-none bg-white text-brand font-body"
                    >
                      <option value="">Select event type</option>
                      {EVENT_TYPES.map((e) => (
                        <option key={e} value={e}>{e}</option>
                      ))}
                    </select>
                    {errors.eventType && (
                      <p className="text-xs text-red-500">{errors.eventType.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Input
                      label="Event Date"
                      type="date"
                      required
                      error={errors.eventDate?.message}
                      {...register("eventDate")}
                    />
                    <Input
                      label="Number of Guests"
                      type="number"
                      placeholder="e.g. 200"
                      required
                      error={errors.guestCount?.message}
                      {...register("guestCount")}
                    />
                  </div>

                  <Input
                    label="Quantity (pieces)"
                    type="number"
                    placeholder="Minimum 50"
                    required
                    error={errors.quantity?.message}
                    helperText="Minimum order: 50 pieces"
                    {...register("quantity")}
                  />

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-brand">
                      Special Requirements <span className="text-primary">*</span>
                    </label>
                    <textarea
                      {...register("requirements")}
                      rows={3}
                      placeholder="Jain, specific flavors, packaging preferences..."
                      className="w-full px-4 py-3 rounded-2xl border-2 border-cream-dark focus:border-primary outline-none bg-white text-brand font-body resize-none"
                    />
                    {errors.requirements && (
                      <p className="text-xs text-red-500">{errors.requirements.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-semibold text-brand">
                      Delivery Address <span className="text-primary">*</span>
                    </label>
                    <textarea
                      {...register("deliveryAddress")}
                      rows={2}
                      placeholder="Full address with pincode"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-cream-dark focus:border-primary outline-none bg-white text-brand font-body resize-none"
                    />
                    {errors.deliveryAddress && (
                      <p className="text-xs text-red-500">{errors.deliveryAddress.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    disabled={loading}
                    icon={PartyPopper}
                  >
                    {loading ? "Submitting..." : "Submit Bulk Order"}
                  </Button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}