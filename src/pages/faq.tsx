import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import Accordion from "@components/common/accordion";
import PageHeader from "@components/ui/page-header";
import { faq } from "@settings/faq.settings";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export default function FAQ() {
	return (
		<>
			<PageHeader pageHeader="text-page-faq" />
			<Container>
				<div className="pt-16 lg:pt-20 pb-2 lg:pb-4 px-0 max-w-5xl mx-auto space-y-4">
					<Accordion items={faq} translatorNS="faq" />
				</div>
				<div className="py-4 lg:py-6 px-0 max-w-5xl mx-auto space-y-1">
					<h1>References:</h1>
					<p className="font-bold text-xs my-1 py-0">*1. Return Policy: <a href="https://www.tesorostore.in/return-and-cancellation-policy" className="text-blue-500" target="_blank">Open Return Policy</a></p>
					<p className="font-bold text-xs my-1 py-0">*2. Mail Support:<a href="mailto:support@tesorostore.in" className="text-blue-500" target="_blank">Send a mail to support team</a></p>
					<p className="font-bold text-xs my-1 py-0">*3. Apply to be Seller: <a href="https://forms.gle/XyyyN2MtbvS682Bc7" className="text-blue-500" target="_blank">Apply to be Seller</a></p>
				</div>
				<Subscription />
			</Container>
		</>
	);
}

FAQ.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"faq",
				"footer",
			])),
		},
	};
};
