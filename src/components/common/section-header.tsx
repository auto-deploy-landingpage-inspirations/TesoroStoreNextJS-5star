import Text from "@components/ui/text";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";

interface Props {
	sectionHeading: string;
	categorySlug?: string;
	className?: string;
	boxshadow?: boolean;
}

const SectionHeader: React.FC<Props> = ({
	sectionHeading = "text-section-title",
	categorySlug,
	className = "pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8",
	boxshadow = false
}) => {
	const { t } = useTranslation("common");
	return (
		<div
			className={`font-josephine flex items-center justify-center -mt-2 lg:-mt-2.5 ${className}`}
		>
			{boxshadow?(
				<Text variant="mediumHeading" style={
					{
						backgroundColor: '',
						color: 'black',
						boxShadow: '8px 11px 8px rgba(218, 224, 245, 0)',
						padding: '10px',
						marginTop: '9px',
						borderRadius: '12px',
						alignItems: 'center',
						textAlign: 'center',
						fontFamily: 'Van'
					}
				}>{t(`${sectionHeading}`)}</Text>
			):(
				<Text variant="mediumHeading" style={{fontFamily: 'Van'}}>{t(`${sectionHeading}`)}</Text>
			)}
			
			{categorySlug && (
				<Link
					href={categorySlug}
					className="font-josephine text-xs lg:text-sm xl:text-base text-heading mt-0.5 lg:mt-1"
				>
					{t("text-see-all-product") as string}
				</Link>
			)}
		</div>
	);
};

export default SectionHeader;
