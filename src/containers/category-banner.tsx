// import Image from "next/image";
// import { useRouter } from "next/router";
// import { getDirection } from "@utils/get-direction";
interface CategoryBannerProps {
	className?: string;
	bgColor?: string;
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({
	className = "mb-7",
	bgColor,
}) => {
	

	return (
		<div
			className={`rounded-md relative flex flex-row ${className} ${bgColor} h-0 mt-[10vh] `}
		>
			{/* <div className="hidden md:flex">
				<Image
					src={
						dir === "rtl"
							? "/assets/images/category-banner-reverse.jpg"
							: "/assets/images/category-banner.jpg"
					}
					alt="Category Banner"
					width={1800}
					height={370}
					className="rounded-md"
				/>
			</div>
			<div className="relative md:absolute top-0 start-0 h-auto md:h-full w-full md:w-2/5 flex items-center py-2 sm:py-3.5">
				<h2 className="capitalize text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-heading p-7 text-center w-full">
					#{categoryTitle==undefined? 'Categories': categoryTitle}
				</h2>
			</div> */}
		</div>
	);
};

export default CategoryBanner;
