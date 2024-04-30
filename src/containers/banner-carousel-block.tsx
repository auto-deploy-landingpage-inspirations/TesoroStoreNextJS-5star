// import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
// import { ROUTES } from "@utils/routes";
// import { promotionBannerTwo as banners } from "@framework/static/banner";
import BannerCard2 from "./BannerCard";
import BannerCard2Mobile from "./BannerCardMobile";
import { useOfferZone } from "@framework/product/get-offer-zone";

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
		slidesPerView: 1.5,
		spaceBetween: 12,
	},
};

interface BannerProps {
	className?: string;
	mobile?: boolean;
	web?: boolean;
}

const BannerCarouselBlock: React.FC<BannerProps> = ({
	className = "mb-6 md:mb-6 lg:mb-8 pb-0.5 xl:pb-1.5",
	// web,
	// mobile
}) => {
	const {data, error, isLoading} = useOfferZone({});
	// console.log(web, mobile, error, isLoading)
	if(error){

	} 
	if(isLoading){

	}
	if(data){
		console.log("Offer Zone Data")
		console.log(data)
	}
	return (
		<div className={className}>
			<Carousel breakpoints={breakpoints} autoplay={{ delay: 3000 }}>
				{data?.offerBlock?.map((banner: any, idx:number) => (
					<SwiperSlide key={`promotion-banner-key-${banner?._id}`}>
						
						<BannerCard2
							image={banner.imageRef}
							color={banner.backgroundColor}
							idx={idx}
							title={banner.offerTitle}
							banner={banner}
							href={banner.offerLink || '/collections/home'}
							effectActive={true}
						/>
						<BannerCard2Mobile
							idx={idx}
							image={banner.imageRef}
							title={banner.offerTitle}
							color={banner.backgroundColor}
							banner={banner}
							href={banner.offerLink || '/collections/home'}
							effectActive={true}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default BannerCarouselBlock;
