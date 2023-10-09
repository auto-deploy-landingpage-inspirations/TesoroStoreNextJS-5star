import CollectionCard from "@components/common/collection-card";

const data = [
	{
		id: 1,
		slug: "/search",
		image: "/assets/images/new-images/founder-pick.png",
		title: "Mr. Virat Kohli",
		description: "Meet our featured artist and check their exclusive collection at Tesoro Store",
	},
	{
		id: 2,
		slug: "/search",
		image: "/assets/images/new-images/founders-pick-2.png",
		title: "Monthly Featured",
		description: "Meet our Artist/Entrepreneur of the Month",
	},
	{
		id: 3,
		slug: "/search",
		image: "/assets/images/new-images/founders-pick-2.png",
		title: "Virat Kohli",
		description: "Meet our featured entrepreneur and check their exclusive collection at Tesoro Store",
	},
];

interface Props {
	className?: string; 
}

const CollectionBlock: React.FC<Props> = ({
	className = "for-desktop mb-12 md:mb-14 xl:mb-16 pb-0.5 lg:pt-1 xl:pt-0",
}) => {
	const isEven = (value: number) => {
		return value % 2;
	};
	return (
		<div
			className={`${className} for-desktop  bg-[#fda4af] w-[98.5vw] h-[37vh] -translate-x-4 md:-translate-x-8 2xl:-translate-x-16`}
			style={{backgroundImage: "url(/assets/images/founderspick/banner-main.jpg)", backgroundSize: '100% 100%'}}
		>
			<div className="w-2/3 h-[37vh] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 pl-[2vw]">

				{data?.slice(0, 2)?.map((item, index) => (
					<CollectionCard
						key={item.id}
						uniqueKey={index}
						collection={item}
						contactClassName={
							isEven(index + 1) == 0
								? "sm:pb-4 md:pb-5 lg:pb-4 2xl:pb-5 3xl:pb-6 pt-3.5 sm:pt-0.5 lg:pt-1 px-4 sm:px-0"
								: "pt-3.5 lg:pt-4 xl:pt-5 3xl:pt-7 px-4 sm:px-0"
						}
					/>
				))}
			</div>

			{/* <Fade> */}
				
			{/* </Fade> */}
			{/* <img src="/assets/images/new-images/diamond_output.gif" className="absolute top-0 right-10 h-[90%]" alt="" /> */}
			{/* <img src="/assets/images/new-images/diamond_output.gif" className="absolute top-0 right-10 h-[90%]" alt="" /> */}
		</div>
	);
};

export default CollectionBlock;
