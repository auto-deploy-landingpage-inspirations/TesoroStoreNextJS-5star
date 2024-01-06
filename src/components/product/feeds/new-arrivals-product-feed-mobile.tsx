import ProductCarousel from "@containers/product-carousel";
// import ProductsBlock from "@containers/products-block";
import { useNewArrivalProductsQuery } from "@framework/product/get-all-new-arrival-products";

export default function NewArrivalsProductFeedMobile() {
	const { data, isLoading, error } = useNewArrivalProductsQuery({
		limit: 10,
	});
	
	return (
		<ProductCarousel
			sectionHeading="text-new-arrivals"
			products={data?.productRef}
			loading={isLoading}
			error={error?.message}
			uniqueKey="new-arrivals"
		/>
	);
}
