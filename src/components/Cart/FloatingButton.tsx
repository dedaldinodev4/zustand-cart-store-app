"use client";

import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { formattedCurrency } from "@/utils/currency";
import { ShoppingCart } from "lucide-react";

export const FloatingCartButton = () => {
  const { items, total } = useCartStore();
  const { toggleCart } = useUIStore();

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      onClick={toggleCart}
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full shadow-lg flex items-center gap-3 px-4 py-3 hover:bg-blue-700 transition-all duration-200 ease-in-out hover:scale-105 z-50"
    >
      <ShoppingCart size={22} />
      <div className="text-sm font-semibold">
        {itemCount} item{itemCount > 1 ? "s" : ""}
      </div>
      <span className="bg-white text-blue-700 text-xs px-2 py-1 rounded-md font-bold">
        {formattedCurrency(total)}
      </span>
    </button>
  );
}
