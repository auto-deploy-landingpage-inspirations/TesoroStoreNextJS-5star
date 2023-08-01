import Link from "@components/ui/link";
import Text from "@components/ui/text";
import { FaLink } from "react-icons/fa";
import { LinkProps } from "next/link";
import { useTranslation } from "next-i18next";

interface Props {
	item: any;
	effectActive?: boolean;
	href: LinkProps["href"];
}

const IconCard: React.FC<Props> = ({ item, effectActive = false, href }) => {
	const { name, icon } = item ?? {};
	const { t } = useTranslation("common");
	return (
		<Link
			href={href}
			className="group flex justify-center text-center flex-col bg-gray-200 h-28 sm:h-[8.5rem] md:h-40 xl:h-[11.5rem] 2xl:h-44 3xl:h-60 rounded-lg"
		>
			<div className="relative inline-flex items-center mb-3.5 md:mb-4 lg:mb-5 xl:mb-2 2xl:mb-6 3xl:mb-8 mx-auto :h-24">
				<img
					src={icon}
					alt={name || t("text-card-thumbnail")}
					className="mx-auto w-2/4 sm:w-2/3 md:w-8/12 3xl:w-full mb-4 sm:mb-6"
				/>
			</div>
			<Text
				variant="heading"
				className="capitalize absolute text-center inset-x-0 bottom-4 sm:bottom-5 md:bottom-6 xl:bottom-8"
			>
				{name}
			</Text>
			{effectActive === true && (
				<>
					<div className="absolute top left bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30  rounded-lg" />
					<div className="absolute top left h-full w-full flex items-center justify-center  rounded-lg">
						<FaLink className="text-white text-base sm:text-xl lg:text-2xl xl:text-3xl transform opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100" />
					</div>
				</>
			)}
		</Link>
	);
};

export default IconCard;
