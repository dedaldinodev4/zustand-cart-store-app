"use client"
import { useCartStore } from "@/store/cartStore";
import { useProductModalStore } from "@/store/productModalStore";
import { formattedCurrency } from "@/utils/currency";

export const ProductCard = ({ product }: { product: any }) => {
  const { addToCart } = useCartStore();
  const { openModal } = useProductModalStore();

  return (
    <div 
    onClick={() => openModal(product)}
    className="bg-white shadow-sm rounded-2xl p-4 hover:shadow-lg transition flex flex-col cursor-pointer">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mx-auto"
      />
      <h3 className="text-lg font-semibold text-black mt-3 line-clamp-2">{product.title}</h3>
      <p className="text-gray-600 mt-1 font-bold">{formattedCurrency(product.price)}</p>
      <button
        onClick={() =>
          addToCart({
            ...product,
            quantity: 1,
          })
        }
        className="mt-auto cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}
