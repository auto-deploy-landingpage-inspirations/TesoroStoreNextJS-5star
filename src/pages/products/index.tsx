import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ShopDiscount from "@components/shop/discount";
// import { ShopFilters } from "@components/shop/filters";
// import StickyBox from "react-sticky-box";
// import { ProductGrid } from "@components/product/product-grid";
// import SearchTopBar from "@components/shop/top-bar";
// import ActiveLink from "@components/ui/active-link";
// import { BreadcrumbItems } from "@components/common/breadcrumb";
// import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { ROUTES } from "@utils/routes";
import { GetStaticProps } from "next";
// import { useWindowSize } from "@utils/use-window-size";
import { useEffect } from "react";

export default function Products() {
	
	// const { t } = useTranslation("common");
	useEffect(() => {
		window.location.href = '/categories/home';
	}, []);
	return (
		<>
			<ShopDiscount />
			<Container>
				
				<Subscription />
			</Container>
		</>
	);
}

Products.Layout = Layout;

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
