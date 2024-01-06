import ProductsBlock from "@containers/products-block";
import { useNewArrivalProductsQuery } from "@framework/product/get-all-new-arrival-products";

export default function NewArrivalsProductFeed() {
	const { data, isLoading, error } = useNewArrivalProductsQuery({
		limit: 10,
	});
	// const products = data?.productRef;
	console.log("new arrival products 1: ",data)


	return (
		<ProductsBlock
			sectionHeading="text-new-arrivals"
			products={data?.productRef}
			loading={isLoading}
			error={error?.message}
			uniqueKey="new-arrivals"
		/>
	);
}
