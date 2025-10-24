"use client"
import { ProductCard } from "@/components/Common/ProductCard";
import { Header } from "@/components/Common/Header";
import { useProducts } from "@/hooks/products/useProducts";
import { CartDrawer } from "@/components/Cart/CartDrawer";
import { useCartStore } from "@/store/cartStore";
import { FloatingCartButton } from "@/components/Cart/FloatingButton";
import { usePaginationStore } from "@/store/paginationStore";


const Home = () => {
  const { page, nextPage, prevPage, setPage } = usePaginationStore();
  const { data, isLoading, isError, isFetching } = useProducts(page, 8);
  const { items } = useCartStore()

  if (isLoading) return <p className="text-center mt-10">Loading products...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Error loading products!</p>;

  const products = data?.products ?? [];
  const hasNextPage = data?.hasNextPage ?? false;

  return (
    <main>
      <Header />
      <CartDrawer />
      {items && <FloatingCartButton />}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <button
          onClick={prevPage}
          disabled={page === 1}
          className="bg-white text-black font-bold cursor-pointer hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-semibold">Page {page}</span>
        <button
          onClick={nextPage}
          disabled={!hasNextPage}
          className="bg-white text-black font-bold cursor-pointer hover:bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </main>
  )
}

export default Home;