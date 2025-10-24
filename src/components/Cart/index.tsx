"use client"
import { useCartStore } from "@/store/useCartStore";


export const Cart = () => {

  const { items, total, addToCart, 
    removeFromCart, increaseQuantity, 
    decreaseQuantity, clearCart } = useCartStore();

  const sampleProduct = {
    id: "p1",
    name: "Wireless Mouse",
    price: 50,
    quantity: 1,
    image: "https://via.placeholder.com/100",
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">🛍️ Zustand Cart Store</h1>

      {/* Add Product */}
      <button
        onClick={() => addToCart(sampleProduct)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
      >
        Add Product
      </button>

      {/* Cart Items */}
      <div className="w-96 bg-white shadow-md rounded-lg p-4">
        {items.length === 0 ? (
          <p className="text-center text-gray-500">Cart is empty</p>
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 bg-gray-300 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-2 bg-red-500 text-white rounded"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Total + Clear */}
      <div className="mt-6 text-center">
        <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="mt-3 px-4 py-2 bg-red-600 text-white rounded"
          >
            Clear Cart
          </button>
        )}
      </div>
    </div>
  );
}
