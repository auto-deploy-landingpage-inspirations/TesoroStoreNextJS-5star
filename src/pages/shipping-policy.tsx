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

export default function UseTermsPage() {
	// const { t } = useTranslation("privacy");
	return (
		<>
			<PageHeader pageHeader="Shipping Policy" />
			<div style={{height: '90vh'}} className="mt-12 lg:mt-14 xl:mt-16 lg:py-1 xl:py-0 border-b border-gray-300 px-4 md:px-10 lg:px-7 xl:px-16 2xl:px-24 3xl:px-32 pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 h-[80vh]">
				<Container className="h-[80vh]">
				<Iframe 
					url="https://docs.google.com/document/d/e/2PACX-1vSA07rjuhixUXhK6d9OO7D20Ig-XU-KnAHpeFgtSdIR1a2o291Lo4RTlatV9MWLZw/pub?embedded=true"
					width="90%"
					height="100%"
					id="something_new"
					className=""
					display="block"
					position="relative"/>
				{/* <iframe src="" className="w-full h-[100%]" style={{height: '100vh'}}></iframe> */}
					{/* <div className="flex flex-col md:flex-row">
						<nav className="md:w-72 xl:w-3/12 mb-8 md:mb-0">
							<ol className="sticky md:top-16 lg:top-28 z-10">
								{privacyPolicy?.map((item, index) => (
									<li key={item.id}>
										<Link
											spy={true}
											offset={-120}
											smooth={true}
											duration={500}
											to={makeTitleToDOMId(item.title)}
											activeClass="text-heading font-semibold"
											className="block cursor-pointer py-3 lg:py-3.5  text-sm lg:text-base  text-gray-700 uppercase"
										>
											{(index <= 9 ? "0" : "") +
												index +
												" " +
												t(`${item.title}`)}
										</Link>
									</li>
								))}
							</ol>
						</nav>

						<div className="md:w-9/12 md:ps-8 pt-0 lg:pt-2">
							{privacyPolicy?.map((item) => (
								// @ts-ignore
								<Element
									key={item.title}
									id={makeTitleToDOMId(item.title)}
									className="mb-10"
								>
									<h2 className="text-lg md:text-xl lg:text-2xl text-heading font-bold mb-4">
										{t(`${item.title}`)as string}
									</h2>
									<div
										className="text-heading text-sm leading-7 lg:text-base lg:leading-loose"
										dangerouslySetInnerHTML={{
											__html: t(`${item.description}`),
										}}
									/>
								</Element>
							))}
						</div>
					</div> */}
				</Container>
			</div>
		</>
	);
}

UseTermsPage.Layout = Layout;

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
