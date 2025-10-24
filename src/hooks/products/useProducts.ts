import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/axios";

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get("/products");
      if (!response) throw new Error("Failed to fetch products");
      return response.data;
    },
  });
};
