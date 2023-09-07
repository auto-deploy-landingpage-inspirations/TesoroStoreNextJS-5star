import TextInformation from "@components/common/text-information";

const data = [
	{
		id: 1,
		icon: "/assets/images/features/free-deliver.jpg",
		title: "Free Delivery",
		description: "Get Hassle Free Fast Delivery on every product. Buy Now!",
	},
	{
		id: 2,
		icon: "/assets/images/features/made-with-love.png",
		title: "Made With Love",
		description: "Made with Love Description",
	},
	{
		id: 3,
		icon: "/assets/images/features/handpicked-brands.jpg",
		title: "Handpicked Brands",
		description: "Handpicked Brands",
	},
	{
		id: 4,
		icon: "/assets/images/features/multiple-brands.png",
		title: "1000+ Brands",
		description: "More than 1000+ Brands to Shop from ",
	},
];

interface Props {
	className?: string;
}

const FeatureBlock: React.FC<Props> = ({
	className = "mb-12 md:mb-14 xl:mb-16",
}) => {
	return (
		<div
			className={`${className} feature-block-wrapper border border-gray-300 rounded-lg w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 xl:gap-0 overflow-hidden py-12 xl:py-0 sm:px-4 md:px-8 lg:px-16 xl:px-0`}
		>
			{data?.map((item) => (
				<TextInformation item={item} key={item.id} />
			))}
		</div>
	);
};

export default FeatureBlock;
