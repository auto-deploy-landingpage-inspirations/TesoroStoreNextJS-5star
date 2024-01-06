import { QueryOptionsType } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchFlashSaleProducts = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await https.get(API_ENDPOINTS.FLASH_SALE);
	return data.data;
};
export const useFlashSaleProductsQuery = (options: QueryOptionsType) => {
	return useQuery<any, Error>(
		[API_ENDPOINTS.FLASH_SALE, options],
		fetchFlashSaleProducts
	);
};
