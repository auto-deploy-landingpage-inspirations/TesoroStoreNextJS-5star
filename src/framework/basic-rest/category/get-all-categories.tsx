// import { CategoriesQueryOptionsType } from "@framework/types";
// import { category } from "@framework/product/get-product";
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";
import { FetchCategories, QueryOptionsType } from "@framework/types";

export const fetchCategories = async () => {

	const {	data } = await https.get(API_ENDPOINTS.TOP_CATEGORIES);
	console.log("categories data:");
	console.log(data)
	console.log(data.categories[0]);
	return data.categories[0] as FetchCategories;
};
export const useCategoriesQuery = (options: QueryOptionsType) => {
	return useQuery<FetchCategories, Error>(
		[API_ENDPOINTS.TOP_CATEGORIES, options],
		fetchCategories
	);
};
