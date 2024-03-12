import { QueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import https from "@framework/utils/https";
import shuffle from "lodash/shuffle";
import { useInfiniteQuery } from "react-query";
type PaginatedProduct = {
	data: Product[];
	paginatorInfo: any;
};
const fetchProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await https.get(API_ENDPOINTS.PRODUCTS);
	return {
		data: shuffle(data),
		paginatorInfo: {
			nextPageUrl: "",
		},
	};
};

const useProductsQuery = (options: QueryOptionsType) => {
	return useInfiniteQuery<PaginatedProduct, Error>(
		[API_ENDPOINTS.PRODUCTS, options],
		fetchProducts,
		{
			getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
		}
	);
};

export { useProductsQuery, fetchProducts };
