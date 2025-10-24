"use client"
import { ProductCard } from "@/components/Common/ProductCard";
import { Header } from "@/components/Common/Header";
import { useProducts } from "@/hooks/products/useProducts";
import { CartDrawer } from "@/components/Cart/CartDrawer";
import { useCartStore } from "@/store/cartStore";
import { FloatingCartButton } from "@/components/Cart/FloatingButton";


const Home = () => {
  const { data, isLoading, isError } = useProducts();
  const { items } = useCartStore()

  if (isLoading) return <p className="text-center mt-10">Loading products...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error loading products!</p>;

  return (
    <main>
      <Header />
      <CartDrawer />
      {items && <FloatingCartButton />}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Home;