import { QueryOptionsType } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import { ProductDetails } from "./get-product";

export const fetchSearchedProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  console.log("Query Key:", queryKey);
  const { data } = await http.get(`${API_ENDPOINTS.SEARCH}${queryKey[1].text}`);
  return data.products;
};
export const useSearchQuery = (options: QueryOptionsType) => {
  return useQuery<ProductDetails[], Error>(
    [API_ENDPOINTS.SEARCH, options],
    fetchSearchedProducts
  );
};
