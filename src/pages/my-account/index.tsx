import Link from "@components/ui/link";
import Layout from "@components/layout/layout";
import AccountLayout from "@components/my-account/account-layout";
import { ROUTES } from "@utils/routes";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";

export default function AccountPage() {
	const { t } = useTranslation("common");
	return (
		<AccountLayout>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-3 xl:mb-5">
				{t("text-dashboard") as string}
			</h2>
			<p className=" text-sm leading-7 md:text-base md:leading-loose lowercase">
				{t("text-account-dashboard") as string}{" "}
				<Link
					href={'/my-orders'}
					className="text-heading underline font-semibold"
				>
					{t("text-recent-orders") as string}
				</Link>
				, {t("text-manage-your") as string}{" "}
				<Link
					href={ROUTES.ACCOUNT_DETAILS}
					className="text-heading underline font-semibold"
				>
					{t("text-account-details") as string}
				</Link>{" "}
				{t("text-and") as string}{" "}
				<Link
					href={ROUTES.CHANGE_PASSWORD}
					className="text-heading underline font-semibold"
				>
					{t("text-change-your-password") as string}
				</Link>
				.
			</p>
		</AccountLayout>
	);
}

AccountPage.Layout = Layout;

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
