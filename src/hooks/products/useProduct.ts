import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/axios";

export const useProduct = (id: number) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await api.get(`/products/${id}`);
      if (!response) throw new Error("Failed to fetch product");
      return response.data;
    },
  });
};
