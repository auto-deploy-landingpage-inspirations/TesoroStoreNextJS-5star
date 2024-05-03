// import BannerCard from "@components/common/banner-card";
import Container from "@components/ui/container";
import CollectionBlock from "@containers/collection-block";
import BannerCarouselBlock from "@containers/banner-carousel-block";
// import Divider from "@components/ui/divider";
// import DownloadApps from "@components/common/download-apps";
// import Support from "@components/common/support";
import Subscription from "@components/common/subscription";
import HeroBlock from "@containers/hero-block";
// import FoundersPick from "@containers/FoundersPick"
// import BrandBlock from "@containers/brand-block";
import CategoryBlock from "@containers/category-block";
// import FeatureBlock from "@containers/feature-block";
import Layout from "@components/layout/layout";
import FlashSaleBlock from "@components/product/feeds/flash-sale-product-feed";
import BestSellerProductFeed from "@components/product/feeds/best-seller-product-feed";
import NewArrivalsProductFeed from "@components/product/feeds/new-arrivals-product-feed";
// import { homeOneBanner as banner } from "@framework/static/banner";
import { GetStaticProps } from "next";
import { QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { fetchFlashSaleProducts } from "@framework/product/get-all-flash-sale-products";
import { fetchCategories } from "@framework/category/get-all-categories";
import { fetchBestSellerProducts } from "@framework/product/get-all-best-seller-products";
import { fetchNewArrivalProducts } from "@framework/product/get-all-new-arrival-products";
import { fetchBrands } from "@framework/brand/get-all-brands";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { ROUTES } from "@utils/routes";
// import { useUI } from "@contexts/ui.context";
// import BusinessMagic from "@containers/BusinessMagic";
import SpecialSection from "@containers/SpecialSection";
import { Feature } from "@containers/featuresIndexPage";
// import SectionHalf from "@containers/halfsectionindex";
import BizMagic2 from "@containers/BizMagic2";
import {Fade} from "react-reveal"
import BizMagic2Mobile from "@containers/BizMagic2Mobile";
import NewArrivalsProductFeedMobile from "@components/product/feeds/new-arrivals-product-feed-mobile";
import BestSellerProductFeedMobile from "@components/product/feeds/best-seller-product-feed-mobile";
import SpecialSectionMobile from "@containers/SpecialSectionMobile";
import CollectionBlockMobile from "@containers/collection-block-mobile";
import { useVisibilityQuery } from "@framework/homepage/get-visibility";
import { useState } from "react";


export default function Home() {
	
	const [bannerLoaded, setBannerLoaded] = useState(false);
	console.log("ENV Variable: ", process.env.NEXT_PUBLIC_ENV);
	const blogsVisibility = false;
	const { data, isLoading, error } = useVisibilityQuery();
	console.log("Visiblity Data")
	console.log(data);
	if(error) return <p>{error.message}</p>
	

	if(isLoading) return <p>Loading...</p>
	
	return (
		<>
			
			<div 
				className="bg-main-gradient pb-10"
			>
			<HeroBlock setLoading={setBannerLoaded} />
			{!bannerLoaded && (

				<Container>
					{/* <h1 className="items-center text-center font-bold text-pink-400" style={{ fontSize: '40px'}}>
						New Arrivals
					</h1> */}
					{/* <h1>{data.NAP.web}</h1> */}
					
					<NewArrivalsProductFeed />
					<NewArrivalsProductFeedMobile />
					

					<CategoryBlock sectionHeading="Top Selling Categories" />
					
					
					<BannerCarouselBlock /> 
					<FlashSaleBlock />
					
					<BestSellerProductFeed />
					
					<BestSellerProductFeedMobile />
					
					<BizMagic2 />
					<BizMagic2Mobile />
					
					
					<Fade bottom>
						<CollectionBlock />
					</Fade>
					
					
					<Fade bottom>
						<CollectionBlockMobile />
					</Fade>
					
					{blogsVisibility && (
						<>
							<SpecialSection /> 
							<SpecialSectionMobile /> 
						</>
					)}
					{/* <SectionHalf /> */}
					<Feature />
					{/* <FeatureBlock /> */}
					{/* <DownloadApps className="bg-linen" /> */}
					{/* <Support /> */}
					<Subscription className="bg-linen px-5 sm:px-8 md:px-16 2xl:px-24" />
				</Container>
			)}
			</div>
		</>
	);
}

Home.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery(
		[API_ENDPOINTS.FLASH_SALE_PRODUCTS, { limit: 10 }],
		fetchFlashSaleProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.CATEGORIES, { limit: 10 }],
		fetchCategories
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.BEST_SELLER_PRODUCTS, { limit: 10 }],
		fetchBestSellerProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.NEW_ARRIVAL_PRODUCTS, { limit: 10 }],
		fetchNewArrivalProducts
	);
	await queryClient.prefetchQuery(
		[API_ENDPOINTS.BRANDS, { limit: 0 }],
		fetchBrands
	);

	return {
		props: {
			dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
		revalidate: 60,
	};
};
