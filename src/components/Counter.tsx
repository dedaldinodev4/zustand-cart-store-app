"use client"
import React from 'react';
import { useCounterStore } from "@/store/useCounterStore";
import Link from 'next/link';


export const Counter: React.FC = () => {

  const {count, increase, decrease, reset } = useCounterStore()



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Zustand Counter</h1>
      <div className="flex items-center gap-4 mb-4">
        <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded cursor-pointer">
          -
        </button>
        <span className="text-2xl font-semibold">{count}</span>
        <button onClick={increase} className="px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
          +
        </button>
      </div>
      <button onClick={reset} className="px-4 py-2 bg-gray-600 text-white rounded cursor-pointer">
        Reset
      </button>

    </div>
  )
}