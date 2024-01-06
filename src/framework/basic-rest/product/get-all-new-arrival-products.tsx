import { QueryOptionsType, FetchProducts } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

// interface newarrivals {
//   products: HomepageBanner[];
// }

export const fetchNewArrivalProducts = async () => {
  // const [_key, _params] = queryKey;
  const { data } = await https.get(API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS);
  return data.products[0] as FetchProducts;
};
export const useNewArrivalProductsQuery = (options: QueryOptionsType) => {
  return useQuery<FetchProducts, Error>(
    [API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, options],
    fetchNewArrivalProducts
  );
};
