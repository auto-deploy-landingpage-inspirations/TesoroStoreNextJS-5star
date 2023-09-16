import Link from "@components/ui/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface Props {
	uniqueKey: number,
	imgWidth?: number | string;
	imgHeight?: number | string;
	contactClassName?: string;
	collection: {
		slug: string;
		image: string;
		title: string;
		description?: string;
	};
}

const CollectionCard: React.FC<Props> = ({
	uniqueKey,
	collection,
	imgWidth = 580,
	imgHeight = 580,
	contactClassName = "",
}) => {
	const { slug, image, title } = collection;
	const { t } = useTranslation("common");
	console.log(uniqueKey)
	if(uniqueKey<=1)
	return (
			<Link
				href={slug}
				className="group text-center flex flex-col justify-between sm:even:flex-col-reverse even:mt-16 odd:mb-16 sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden sm:pb-0"
			>
				<div className="flex mx-auto flex-col relative">
					<div className="flex">
						<Image
							src={image ?? "/assets/placeholder/collection.svg"}
							alt={t(`${title}`) || t("text-card-thumbnail")}
							width={imgWidth}
							height={imgHeight}
							className="bg-gray-300 object-cover transition duration-200 ease-in-out group-hover:opacity-90"
						/>
					</div>
					<div className="overflow-hidden absolute bottom-3.5 lg:bottom-5 end-3.5 lg:end-5 p-2">
						<span className="inline-block text-[13px] md:text-sm leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-heading shadow-navigation py-3 lg:py-4 px-4 lg:px-6 hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0"
					style={{fontFamily: 'Hap'}}>
							{"View Product"}
						</span>
					</div>
				</div>
			</Link>
	);
	else
	return (
		<div
			className="col-span-2 mt-10 group text-center flex flex-col justify-between border sm:border-0 border-gray-300 overflow-hidden rounded-md items-center "
		>
			<div className={contactClassName}>
				<h1
					className="text-7xl mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5 font-bold overflow-visible"
					style={{fontFamily: 'Van'}}
				>
					{"Founders' Picks"}
				</h1>
				<h3 className="text-body font-semibold text-xs md:text-sm leading-6 md:leading-7 " style={{fontFamily: 'Hap'}}>
					Explore the products that our founders personally adore.
				</h3>
				{/* <p className="pt-10">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, atque vero! Facilis quae dolorem adipisci nam itaque ullam debitis natus atque. In ipsam magnam enim aut praesentium, sit corporis tempore.
				</p> */}
				{/* <div className="flex justify-center items-end relative mt-10">
					<button className="bg-blue-500 text-white hover:drop-shadow-lg rounded-3xl px-3 py-2">View Collections</button>
				</div> */}
			</div>
		</div>
	)
};

export default CollectionCard;
