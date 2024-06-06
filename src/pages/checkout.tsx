import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
// import Subscription from "@components/common/subscription";
import PageHeader from "@components/ui/page-header";
import CheckoutForm from "@components/checkout/checkout-form";
import CheckoutCard from "@components/checkout/checkout-card";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import React from "react";

export default function CheckoutPage() {
	const [paymentMethod, setPaymentMethod] = React.useState("");
	const [couponCode, setCouponCode] = React.useState("");
	return (
		<> 
			<PageHeader pageHeader="text-page-checkout" />
			<Container>
				<div className="py-14 xl:py-20 px-0 2xl:max-w-screen-2xl xl:max-w-screen-xl mx-auto flex flex-col md:flex-row w-full">
					<div className="md:w-full lg:w-3/5 flex  h-full flex-col -mt-1.5">
						<CheckoutForm paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} couponCode={couponCode} />
					</div>
					<div className="md:w-full lg:w-2/5 md:ms-7 lg:ms-10 xl:ms-14 flex flex-col h-full -mt-1.5">
						<CheckoutCard paymentMethod={paymentMethod} couponCode={couponCode} setCouponCode={setCouponCode} />
					</div>
				</div>
			</Container>
		</>
	);
}

CheckoutPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};
