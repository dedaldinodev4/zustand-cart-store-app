"use client"
import React from 'react';
import { useProductModalStore } from "@/store/productModalStore";
import { useCartStore } from "@/store/cartStore";
import { formattedCurrency } from "@/utils/currency";
import { motion, AnimatePresence } from "framer-motion";


export const ProductModal: React.FC = () => {

  const { isOpen, product, closeModal } = useProductModalStore();
  const { addToCart } = useCartStore();

  return (
    product && <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 w-[90%] max-w-lg bg-white rounded-2xl shadow-2xl z-50 p-6 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-gray-800">{product.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800"
              >
                ✖
              </button>
            </div>

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-contain mb-4"
            />

            <p className="text-gray-600 text-sm mb-4">{product.description}</p>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-blue-600">
                {formattedCurrency(product.price)}
              </span>
              <span className="text-lg font-bold text-blue-950">
                {product.category}
              </span>
              <button
                onClick={() => {
                  addToCart({
                    ...product,
                    quantity: 1
                  });
                  closeModal();
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

  );
}