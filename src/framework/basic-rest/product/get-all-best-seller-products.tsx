import { QueryOptionsType, FetchProducts } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchBestSellerProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await https.get(API_ENDPOINTS.RECENTLY_VIEWED);
	return data.data[0] as FetchProducts;
};
export const useBestSellerProductsQuery = (options: QueryOptionsType) => {
	return useQuery<FetchProducts, Error>(
		[API_ENDPOINTS.RECENTLY_VIEWED, options],
		fetchBestSellerProducts
	);
};
