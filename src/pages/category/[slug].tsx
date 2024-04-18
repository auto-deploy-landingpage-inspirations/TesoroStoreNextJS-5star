import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import { ProductGrid } from "@components/product/product-grid";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CategoryBanner from "@containers/category-banner";
import { GetServerSideProps } from "next";
import React from "react";

export default function Category() {
	const [productCount, setProductCount] = React.useState<number>(0);
	console.log("Product Count: ",productCount)
	return (
		<div className="border-t-2 border-borderBottom">
			<Container>
				<CategoryBanner />
				<div className="pb-16 lg:pb-20">
					<ProductGrid setProductCount={setProductCount} className="3xl:grid-cols-6" />
				</div>
				<Subscription />
			</Container>
		</div>
	);
}

Category.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
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
