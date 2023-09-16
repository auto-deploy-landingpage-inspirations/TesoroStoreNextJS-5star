import classNames from "classnames";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface ItemProps {
	icon: string;
	title: string;
	description: string;
}

interface Props {
	className?: string;
	item: ItemProps;
}

const TextInformation: React.FC<Props> = ({ item, className }) => {
	const { t } = useTranslation("common");
	return (
		<div
			className={classNames(
				`text-center drop-shadow-md bg-gray-200 border-gray-300 xl:border-l xl:first:border-s-0 px-4 sm:px-2.5 2xl:px-8 3xl:px-12 xl:py-12`,
				className
			)}
			style={{border: '1px solid gray', margin: '5px', borderRadius: '10px'}}
		>
			<div className="mb-3.5 md:mb-5 xl:mb-3.5 2xl:mb-5 w-14 md:w-auto mx-auto">
				<Image
					src={item.icon}
					alt={t(`${item.title}`)}
					width="100"
					height="100"
				/>
			</div>
			<div className="-mb-1">
				<h3 className="text-heading text-base md:text-lg font-semibold mb-1.5 md:mb-2">
					{t(`${item.title}`) as string}
				</h3>
				<p className="text-body text-xs md:text-sm leading-6 md:leading-7">
					{t(`${item.description}`) as string}
				</p>
			</div>
		</div>
	);
};

export default TextInformation;
