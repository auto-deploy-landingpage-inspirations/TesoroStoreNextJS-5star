import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { useHomePageBanner } from "@framework/homepage/get-homepage-banners";
import { useWindowSize } from "react-use";
// import { homeOneHeroBanner as banners } from "@framework/static/banner";
// import { useWindowSize } from "@utils/use-window-size";
// import { ROUTES } from "@utils/routes";
import { SwiperSlide } from "swiper/react";
import React from 'react';

const breakpoints = {
	"1500": {
		slidesPerView: 1,
	},
	"0": {
		slidesPerView: 1,
	},
};

interface HeroBlockProps {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  }

const HeroBlock: React.FC<HeroBlockProps> = ({ setLoading }) => {
	const { width } = useWindowSize();
	const {data, isLoading, isError} = useHomePageBanner({});
	if(!isLoading){
		setLoading(false);
	}
	// console.log(data);
	const bannerData = data?.banners.data[0].offerBlock.map((banner)=>{
		return {
			id: banner._id,
			title: '',
			slug: banner.offerLink,
			image: {
				desktop: {
					url: banner.imageRef,
					width: 1800,
					height: 800,
				},
				mobile: {
					url: banner.mobileImageRef,
					width: 480,
					height: 480
				},
			}

		}
	})
	// console.log(banners)
	console.log(isLoading);
	console.log(isError);

	// const { width } = useWindowSize();
	return (
		<div className="heroBannerOne relative mt-[12vh] max-w-[1920px] mb-5 md:mb-12 lg:mb-14 2xl:mb-16 mx-auto overflow-hidden px-4 md:px-8 2xl:px-0">
			<Carousel
				breakpoints={breakpoints}
				centeredSlides={width > 1500 ? false: true}
				autoplay={{ delay: 4000 }}
				className="mx-0"
				buttonClassName="hidden"
				pagination={{
					clickable: true,
				}}
			>
				{bannerData && bannerData.map((banner: any) => (
					<SwiperSlide
						className="carouselItem px-0 2xl:px-3.5 max-h-[85vh]"
						key={`banner--key-${banner?.id}`}
					>
						<BannerCard
							banner={banner}
							href={`${banner.slug}`}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default HeroBlock;
