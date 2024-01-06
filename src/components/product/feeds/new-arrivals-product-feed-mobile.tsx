// import ProductCarousel from "@containers/product-carousel";
// import ProductsBlock from "@containers/products-block";
import { useNewArrivalProductsQuery } from "@framework/product/get-all-new-arrival-products";

export default function NewArrivalsProductFeedMobile() {
	const { data, isLoading, error } = useNewArrivalProductsQuery({
		limit: 10,
	});
	console.log(data);
	console.log(isLoading)
	console.log(error)
	// const products = data?.products;
	return (
		<></>
		// <ProductCarousel
		// 	sectionHeading="text-new-arrivals"
		// 	products={products}
		// 	loading={isLoading}
		// 	error={error?.message}
		// 	uniqueKey="new-arrivals"
		// />
	);
}
