import ProductCard from "@components/product/product-card";
// import Button from "@components/ui/button";
import type { FC } from "react";
import { useProductsByCategoryQuery } from "@framework/product/get-product-by-category";
import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
// import { useTranslation } from "next-i18next";
interface ProductGridProps {
	className?: string;
}

export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {
	const { query } = useRouter();
	// console.log(query)
	const {
		isFetching: isLoading,
		data,
		error,
	} = useProductsByCategoryQuery(query.slug as string);
	// console.log("Product Data: ",data)
	// console.log("IsLoading Product: ",isLoading)
	if (error) return <p>{error.message}</p>;

	// const { t } = useTranslation("common");

	return (
		<>
			<div
				className={`grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
			>
				{isLoading && !data?.products?.length ? (
					<ProductFeedLoader limit={20} uniqueKey="search-product" />
				) : (
					data?.products.map((product:any) => {
						return (
							<ProductCard
								key={`product--key${product._id}`}
								product={product}
								variant="grid"
							/>
						);
					})
				)}
			</div>
			{/* <div className="text-center pt-8 xl:pt-14">
				{hasNextPage && (
					<Button
						loading={loadingMore}
						disabled={loadingMore}
						onClick={() => fetchNextPage()}
						variant="slim"
					>
						{t("button-load-more") as string}
					</Button>
				)}
			</div> */}
		</>
	);
};


// import ProductCard from "@components/product/product-card";
// import type { FC } from "react";
// import { useProductsByCategoryQuery } from "@framework/product/get-product-by-category";
// import { useRouter } from "next/router";
// import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
// import { useTranslation } from "next-i18next";

// interface ProductGridProps {
//   className?: string;
// }

// export const ProductGrid: FC<ProductGridProps> = ({ className = "" }) => {
//   const { query } = useRouter();
//   console.log(query)
//   const {
//     isFetching: isLoading,
//     data,
//     error,
//   } = useProductsByCategoryQuery('accessories');
//   if (error) return <p>{error.message}</p>;

//   const { t } = useTranslation("common");

//   return (
//     <div
//       className={`grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8 ${className}`}
//     >
//       {isLoading && !data?.length ? (
//         <ProductFeedLoader limit={20} uniqueKey="search-product" />
//       ) : (
//         data?.map((product:any) => (
//           <ProductCard
//             key={`product--key${product.id}`}
//             product={product}
//             variant="grid"
//           />
//         ))
//       )}
//     </div>
//   );
// };