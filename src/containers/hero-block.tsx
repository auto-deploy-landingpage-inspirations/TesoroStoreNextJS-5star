import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { useHomePageBanner } from "@framework/homepage/get-homepage-banners";
// import { homeOneHeroBanner as banners } from "@framework/static/banner";
// import { useWindowSize } from "@utils/use-window-size";
// import { ROUTES } from "@utils/routes";
import { SwiperSlide } from "swiper/react";

const breakpoints = {
	"1500": {
		slidesPerView: 1,
	},
	"0": {
		slidesPerView: 1,
	},
};

const HeroBlock: React.FC = () => {

	const {data, isLoading, isError} = useHomePageBanner({});
	console.log(data);
	const bannerData = data?.banners.data[0].offerBlock.map((banner)=>{
		return {
			id: banner._id,
			title: '',
			slug: banner.offerLink,
			image: {
				mobile: {
					url: banner.imageRef,
					width: 480,
					height: 500,
				},
				desktop: {
					url: banner.mobileImageRef,
					width: 1800,
					height: 800
				},
			}

		}
	})
	// console.log(banners)
	console.log(isLoading);
	console.log(isError)

	// const { width } = useWindowSize();
	return (
		<div className="heroBannerOne relative left-0 mt-[10vh] max-w-[1920px] mb-5 lg:mx-auto overflow-hidden " style={{
			maxHeight: '95vh'
		}}>
			<Carousel
				breakpoints={breakpoints}
				centeredSlides={false}
				autoplay={{ delay: 4000 }}
				className="mx-0 max-w-[100vw]"
				buttonClassName="hidden"
				pagination={{
					clickable: true,
				}}
			>
				{bannerData && bannerData.map((banner: any) => (
					<SwiperSlide
						className="carouselItem px-5 lg:px-0 h-[100vh] max-w-[100vw]"
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
