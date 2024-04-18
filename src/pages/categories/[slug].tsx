import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
// import ShopDiscount from "@components/shop/discount";
import { ShopFilters } from "@components/shop/filters";
import CategoryLiner from "@containers/CategoryLiner"
import StickyBox from "react-sticky-box";
import SearchTopBar from "@components/shop/top-bar";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetServerSideProps } from "next";
import CategoryBanner from "@containers/category-banner";
import React from "react";
import { ProductCategoryGrid } from "@components/product/product-category-grid";

const colors:string[] = [
	'bg-[#f786be]', //pink
	'bg-blue-400', //lavendar
	'bg-yellow-300', //light yellow
	'bg-[#50c79b]', // mint
	'bg-[orange]',
	'bg-green-500'
  ]


export default function Products() {
    
	// const category = data?.category;
	const [productCount, setProductCount] = React.useState<number>(0);

	return (
		<>
			{/* <ShopDiscount /> */}
			<Container>
				<CategoryBanner bgColor={colors[0]} />
				{/* <CategoryBlock2 sectionHeading="Categories" /> */}
				<CategoryLiner />
				{/* <CategoryLiner categoryData={data} /> */}
				<div className={`flex pt-8 pb-16 lg:pb-20`}>
					<div className="flex-shrink-0 pe-24 hidden lg:block w-72">
						<StickyBox offsetTop={50} offsetBottom={20}>
							<div className="pb-7">
								<BreadcrumbItems separator="/">
									<ActiveLink
										href={"/"}
										activeClassName="font-semibold text-heading"
									>
										<a>Home</a>
									</ActiveLink>
									<ActiveLink
										href={ROUTES.PRODUCT}
										activeClassName="font-semibold text-heading"
									>
										<a className="capitalize">{"Categories"}</a>
									</ActiveLink>
								</BreadcrumbItems>
							</div>
							<ShopFilters />
						</StickyBox>
					</div>

					<div className="w-full lg:-ms-9">
						<SearchTopBar productCount={productCount} />
						<ProductCategoryGrid setProductCount={setProductCount} />
					</div>
				</div>
				<Subscription />
			</Container>
		</>
	);
}

Products.Layout = Layout;

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
