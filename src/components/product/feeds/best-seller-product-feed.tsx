import ProductsBlock from "@containers/products-block";
import { useBestSellerProductsQuery } from "@framework/product/get-all-best-seller-products";

export default function BestSellerProductFeed() {
	const { data, isLoading, error } = useBestSellerProductsQuery({
		limit: 10,
	});

	return (
		<ProductsBlock
			sectionHeading="Recently Viewed"
			products={data?.productRef}
			loading={isLoading}
			error={error?.message}
			uniqueKey="best-sellers"
		/>
	);
}
