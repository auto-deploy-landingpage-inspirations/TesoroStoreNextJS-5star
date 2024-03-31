import { QueryOptionsType, OfferZone } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchOfferZone = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await https.get(API_ENDPOINTS.OFFER_ZONE);
	console.log("Offer Zone Data: ");
	console.log(data);
	return data.data[0] as OfferZone;
};
export const useOfferZone = (options: QueryOptionsType) => {
	return useQuery<OfferZone, Error>(
		[API_ENDPOINTS.OFFER_ZONE, options],
		fetchOfferZone
	);
};
