// import { Product } from "@framework/types";
export type prices = {
	price: number;
	originalPrice: number;
	discount: number;
}
export type title = {
	en: string;
}
export type description = {
	en: string;
}
export type category = {
	status: boolean;
	name: title;
	description: description;
	parentName: string;
	icon: string;
}
export type ProductDetails = {
	_id: string;
	approved?: boolean;
	barcode?: string;
	categories: category[];
	category: category;
	createdAt: object;
	description: description;
	image: string[];
	isCombination: object;
	prices: prices;
	productId: string;
	sku: string;
	slug: string;
	status: string;
	stock: string;
	tag: string[];
	title: title;
	variants?: object;
	gallery?:string[];
	// collection?: string;
	// status?: string;
	limit?: number;
  };
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchProduct = async (_slug: string) => {
	let data:ProductDetails;
	data = (await https.get(`${API_ENDPOINTS.PRODUCT}${_slug}`)).data;
	console.log("fetchProduct:",data)
	return data;
};
export const useProductQuery = (slug: string) => {
	return useQuery<ProductDetails, Error>([API_ENDPOINTS.PRODUCT, slug], () =>
		fetchProduct(slug)
	);
};
