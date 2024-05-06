// import ProductCard from "@components/product/product-card";
// import Button from "@components/ui/button";
import type { FC } from "react";
import { useProductsByCategoryQuery } from "@framework/product/get-product-by-category";
import { useRouter } from "next/router";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import ProductCategoryCard from "./product-category-card";
import { ProductDetails } from "@framework/product/get-product";
import React, { useEffect } from "react";
// import axios from "axios";

interface ProductGridProps {
	className?: string;
	setProductCount: (value: number) => void;
	products?: ProductDetails[];
	setProducts?: (value: ProductDetails[]) => void;
}

export const ProductCategoryGrid: FC<ProductGridProps> = ({ className = "" , setProductCount}) => {
	const { query } = useRouter();
	
	const { 
		isFetching: isLoading,
		data,
		error,
		refetch
	} = useProductsByCategoryQuery(query.slug as string);

	
	if (error) return <p>{error.message}</p>;

	useEffect(() => {
		refetch();
	}, [query, refetch]);
	if(data?.products){
		setProductCount(data.products.length)
	}

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
							<ProductCategoryCard
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
