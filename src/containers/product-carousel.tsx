// import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import SectionHeader from "@components/common/section-header";
import ProductFeedLoader from "@components/ui/loaders/product-feed-loader";
import ProductCard from "@components/product/product-card";
import {Fade} from 'react-reveal';
import Alert from "@components/ui/alert";
import { Product } from "@framework/types";

const breakpoints = {
	"1025": {
		slidesPerView: 3,
		spaceBetween: 28,
	},
	"480": {
		slidesPerView: 2,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 2,
		spaceBetween: 12,
	},
};

interface ProductsProps {
	sectionHeading: string;
	categorySlug?: string;
	className?: string;
	products?: Product[];
	loading: boolean;
	error?: string;
	uniqueKey?: string;
}

const ProductCarousel: React.FC<ProductsProps> = ({
	sectionHeading,
	categorySlug,
	products,
	loading,
	error,
	uniqueKey,
	className = "mb-6 md:mb-6 lg:mb-8 pb-0.5 xl:pb-1.5 for-mobile",
}) => {
	return (
		<div className={className}>
			<SectionHeader
				sectionHeading={sectionHeading}
				categorySlug={categorySlug}
			/>
			{error ? (
				<Alert message={error} />
			) : (
				<div className="gap-x-4 md:gap-x-6 xl:gap-x-8 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
					<Fade bottom>
						{loading && !products?.length ? (
							<ProductFeedLoader limit={2} uniqueKey={uniqueKey} />
						) : (
							<Carousel breakpoints={breakpoints} autoplay={{ delay: 3000 }}>
								{products?.map((product: Product) => (
									<SwiperSlide key={`promotion-banner-key-${product.id}`}>
										<ProductCard
											key={`product--key${product.id}`}
											product={product}
											imgWidth={340}
											imgHeight={440}
											variant="grid"
										/>
									</SwiperSlide>
								))}
							</Carousel>
						)}
					</Fade>
				</div>
			)}
			{/* <Carousel breakpoints={breakpoints} autoplay={{ delay: 3000 }}>
				{products?.map((product: Product) => (
					<SwiperSlide key={`promotion-banner-key-${product.id}`}>
						<ProductCard
							key={`product--key${product.id}`}
							product={product}
							imgWidth={340}
							imgHeight={440}
							variant="grid"
						/>
					</SwiperSlide>
				))}
			</Carousel> */}
		</div>
	);
};

export default ProductCarousel;
