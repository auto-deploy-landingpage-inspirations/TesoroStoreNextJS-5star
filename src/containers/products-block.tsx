import React from "react";
import SectionHeader from "@components/common/section-header";
import ProductCard from "@components/product/product-card";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import { Product } from "@framework/types";
import Alert from "@components/ui/alert";
import {Fade} from 'react-reveal';

interface ProductsProps {
	sectionHeading: string;
	categorySlug?: string;
	className?: string;
	products?: Product[];
	loading: boolean;
	error?: string;
	uniqueKey?: string;
}

const ProductsBlock: React.FC<ProductsProps> = ({
	sectionHeading,
	categorySlug,
	className = "mb-9 md:mb-9 lg:mb-10 xl:mb-12 for-desktop",
	products,
	loading,
	error,
	uniqueKey,
}) => {
	return (
		<div className={className}
		style={
			{
				maxWidth: '80vw',
				margin: 'auto',
				borderRadius: '12px',
				padding: '10px',
				marginBottom: '5vh'
			}
		}
		>
			<SectionHeader
				sectionHeading={sectionHeading}
				categorySlug={categorySlug}
			/>

			{error ? (
				<Alert message={error} />
			) : (
				<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
					<Fade bottom>
						{loading && !products?.length ? (
							<ProductFeedLoader limit={10} uniqueKey={uniqueKey} />
						) : (
							products?.map((product: Product) => (
								<ProductCard
									key={`product--key${product.id}`}
									product={product}
									imgWidth={340}
									imgHeight={440}
									variant="grid"
								/>
							))
						)}
					</Fade>
				</div>
			)}
		</div>
	);
};

export default ProductsBlock;
