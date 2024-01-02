import { CategoriesQueryOptionsType } from "@framework/types";
import { category } from "@framework/product/get-product";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchCategories = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const {
		data: { data },
	} = await http.get(API_ENDPOINTS.CATEGORIES);
	return { categories: { data: data as category[] } };
};
export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
	return useQuery<{ categories: { data: category[] } }, Error>(
		[API_ENDPOINTS.CATEGORIES, options],
		fetchCategories
	);
};
