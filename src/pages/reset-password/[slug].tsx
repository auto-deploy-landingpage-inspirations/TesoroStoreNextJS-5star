import Container from "@components/ui/container";
import Layout from "@components/layout/layout";
// import ForgetPasswordForm from "@components/auth/forget-password-form";
import PageHeader from "@components/ui/page-header";
import Subscription from "@components/common/subscription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import ResetPasswordForm from "@components/auth/reset-password-form";

export default function ResetPasswordPage() {
	return (
		<>
			<PageHeader pageHeader="Forget Password" />
			<Container>
				<div className="py-16 lg:py-20">
					<ResetPasswordForm />
				</div>
				<Subscription />
			</Container>
		</>
	);
}

ResetPasswordPage.Layout = Layout;

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

