import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
import PageHeader from "@components/ui/page-header";
import Iframe from "react-iframe";
// import { privacyPolicy } from "@settings/privacy-settings";
// import { Link, Element } from "react-scroll";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";

// function makeTitleToDOMId(title: string) {
// 	return title.toLowerCase().split(" ").join("_");
// }

export default function ReturnPage() {
	// const { t } = useTranslation("privacy");
	return (
		<>
			<PageHeader pageHeader="Return & Cancellation Policy" />
			<div style={{height: '90vh'}} className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 h-[80vh]">
				<Container className="h-[80vh]">
				<Iframe 
					url=""
					width="95%"
					height="100%"
					id="something_new"
					className="ml-[2%]"
					display="block"
					position="relative"
				/>
				</Container>
			</div>
		</>
	);
}

ReturnPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"privacy",
				"footer",
			])),
		},
	};
};
