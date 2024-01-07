import { QueryOptionsType } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchOfferBanner = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await https.get(API_ENDPOINTS.OFFER_BANNER);
    const data1 = data.data;
	return data1;
};
export const useOfferBanner = (options: QueryOptionsType) => {
	return useQuery<any, Error>(
		[API_ENDPOINTS.OFFER_BANNER, options],
		fetchOfferBanner
	);
};
