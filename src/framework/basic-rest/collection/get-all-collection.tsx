import { CollectionsQueryOptionsType, Collection } from "@framework/types";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchCollections = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const { data } = await https.get(API_ENDPOINTS.COLLECTIONS);
	console.log("collections: ", data);
	return {data: data[0].children};
};
export const useCollectionsQuery = (options: CollectionsQueryOptionsType) => {
	return useQuery<{ data: Collection[] }, Error>(
		[API_ENDPOINTS.CATEGORIES, options],
		fetchCollections
	);
};
