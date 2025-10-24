"use client";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";

export const CartDrawer = () => {
  const { isCartOpen, closeCart } = useUIStore();
  const { items, total, removeFromCart, clearCart } = useCartStore();

  return (
    <>
      {isCartOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
        ></div>
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
      
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-lg font-bold text-black">Your Cart</h2>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-y-auto flex-1">
          {items.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">
              Your cart is empty 🛒
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between border-b pb-2"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold text-black">{item.title}</p>
                      <p className="text-xs text-black">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                  >
                    ✖
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex justify-between font-semibold text-lg mb-3 text-black">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            onClick={clearCart}
            className="w-full bg-red-600 cursor-pointer text-white py-2 rounded hover:bg-red-700 transition"
          >
            Clear Cart
          </button>
          <button className="w-full mt-3 cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
