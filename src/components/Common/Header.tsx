"use client";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { formattedCurrency } from "@/utils/currency";

export const Header = () => {
  const { items, total } = useCartStore();
  const { toggleCart } = useUIStore();

  return (
    <header className="bg-white shadow-md py-4 px-8 flex items-center justify-between sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">🛍️ MyShop</h1>

      <div className="flex items-center gap-6">
        <div className="text-gray-600">
          <span className="font-semibold">Total:</span> {formattedCurrency(total)}
        </div>
        <div className="relative">
          <button
            onClick={toggleCart}
            className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
            Cart ({items.length})
          </button>
        </div>
      </div>
    </header>
  );
}
