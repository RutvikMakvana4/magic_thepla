import { BulkOrderForm, ContactForm } from "@/types";

// Mock service — replace with real API calls when backend is ready
export const orderService = {
  submitBulkOrder: async (
    data: BulkOrderForm,
  ): Promise<{ success: boolean; orderId: string }> => {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1500));
    const orderId = `MT-${Date.now().toString().slice(-6)}`;
    console.log("Bulk order submitted:", data);
    return { success: true, orderId };
  },

  submitContact: async (data: ContactForm): Promise<{ success: boolean }> => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Contact form submitted:", data);
    return { success: true };
  },
};
