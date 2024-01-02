import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
import Subscription from "@components/common/subscription";
// import ShopDiscount from "@components/shop/discount";
import { ShopFilters } from "@components/shop/filters";
import CategoryLiner from "@containers/CategoryLiner"
import StickyBox from "react-sticky-box";
import { ProductGrid } from "@components/product/product-grid";
import SearchTopBar from "@components/shop/top-bar";
import ActiveLink from "@components/ui/active-link";
import { BreadcrumbItems } from "@components/common/breadcrumb";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ROUTES } from "@utils/routes";
import { GetStaticProps } from "next";
import CategoryBanner from "@containers/category-banner";
// import { fetchCategories } from "@framework/category/get-all-categories";
// import { useRouter } from "next/router";
// import CategoryBlock from "@containers/category-block";
// import CategoryBlock2 from "@containers/CategoryBlock2";

const colors:string[] = [
	'bg-[#f786be]', //pink
	'bg-blue-400', //lavendar
	'bg-yellow-300', //light yellow
	'bg-[#50c79b]', // mint
	'bg-[orange]',
	'bg-green-500'
  ]

const fetchCategories = () => {
// Your data-fetching logic here
return ['category1', 'category2', 'category3']; // Array of category slugs
};

export async function getStaticPaths() {
	
	const categories = fetchCategories()
	const paths = categories.map((category) => ({
		params: {slug:category},
	}))
	return {
		paths,
		fallback: false // Or 'blocking' if you want to use incremental static regeneration (ISR)
	};
}

export default function Products() {
    // const {
    //     query: { slug }
    // } = useRouter();

    // const data = 

	const { t } = useTranslation("common");
	return (
		<>
			{/* <ShopDiscount /> */}
			<Container>
				<CategoryBanner bgColor={colors[0]} />
				{/* <CategoryBlock2 sectionHeading="Categories" /> */}
				<CategoryLiner />
				<div className={`flex pt-8 pb-16 lg:pb-20`}>
					<div className="flex-shrink-0 pe-24 hidden lg:block w-72">
						<StickyBox offsetTop={50} offsetBottom={20}>
							<div className="pb-7">
								<BreadcrumbItems separator="/">
									<ActiveLink
										href={"/"}
										activeClassName="font-semibold text-heading"
									>
										<a>{t("breadcrumb-home") as string}</a>
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
						<SearchTopBar />
						<ProductGrid />
					</div>
				</div>
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
