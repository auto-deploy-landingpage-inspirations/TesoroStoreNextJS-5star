// import { Product } from "@framework/types";
export type prices = {
	finalPrice: number;
	finalDiscountedPrice: number;
	slabPrice: number;
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

export type ProductVariants = {
	images: string[];
	image: string;
	_id: string;
	variantIds: string[];
	originalPrice: number;
	description: string;
	price: number;
	quantity: number;
	discount: number;
	productId: string;
	barcode: string;
	sku: string;
}

export type AttributeVariant = {
	status: string;
	_id: string;
	name: title;
}

export type AttributeData = {
	type: string;
	name: title;
	title: title;
	_id: string;
	status: string;
	variants: AttributeVariant[];
	option: string;
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
	variants?: ProductVariants[];
	gallery?:string[];
	height?: string;
	width?: string;
	length?: string;
	weight: number;
	composition?: string;
	shippingTime?: string;
	returnable: boolean;
	uploads: boolean;
	// collection?: string;
	// status?: string;
	limit?: number;
	productRating?: ProductRating;
	reviews?: string | ProductReviews[];
	variantData?: AttributeData[];
	storeName: string;
  };

export type ProductRating = {
	overallRating?: number;
	ratingCount?: number;
}

export type ProductReviews = {
	_id: string;
	isApproved: boolean;
	createdAt: string;
	productId: string;
	rating: number;
	review: string;
	reviewer: string;
	updatedAt: string;

}
import https from "@framework/utils/https";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchProduct = async (_slug: string) => {
	let data:ProductDetails;
	// console.log("Loading Products!!")
	data = (await https.get(`${API_ENDPOINTS.PRODUCT}${_slug}`)).data;
	// console.log("fetchProduct:",data)
	return data;
};
export const useProductQuery = (slug: string) => {
	return useQuery<ProductDetails, Error>([API_ENDPOINTS.PRODUCT, slug], () =>
		fetchProduct(slug)
	);
};
