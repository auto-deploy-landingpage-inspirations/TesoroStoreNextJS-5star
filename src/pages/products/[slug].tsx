import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
import ProductSingleDetails from "@components/product/product-single-details";
import RelatedProducts from "@containers/related-products";
import Divider from "@components/ui/divider";
import Breadcrumb from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import RelatedCategories from "@containers/related-categories";
// import { useRouter } from "next/router";
// import { useProductQuery } from "@framework/product/get-product";

export default function ProductPage() {
	
	return (
		<>
			<Divider className="mt-[10vh]" />
			<Container>
				<div className="pt-2">
					<Breadcrumb />
				</div>
				
				<ProductSingleDetails />
						
				<RelatedProducts sectionHeading="PEOPLE BUYING THIS ALSO BOUGHT" />
				<RelatedProducts sectionHeading="SIMILAR PRODUCTS" />
				<RelatedCategories />
				<Subscription />
			</Container>
		</>
	);
}

ProductPage.Layout = Layout;

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
