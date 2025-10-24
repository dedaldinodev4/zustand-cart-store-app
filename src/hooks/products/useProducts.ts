import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/axios";

export const useProducts = (page: number, limit: number = 8) => {
  return useQuery({
    queryKey: ["products", page],
    queryFn: async () => {
      const response = await api.get(`/products`);
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginated = response.data.slice(start, end);
      const hasNextPage = end < response.data.length;

      return { products: paginated, hasNextPage };
     
    },
    placeholderData: (prev) => prev,
  });
};
