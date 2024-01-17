import React from 'react'
import Layout from "@components/layout/layout";

// import Container from "@components/ui/container";
// import { Fade, Zoom } from 'react-reveal';

import AboutUsDesktop from '@components/about-us/desktop';
import AboutUsMobile from '@components/about-us/mobile'; 
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

// const lefTextBoxCss = 'ml-[15%] col-span-2 w-[70%]';
// const rightTextBoxCss = 'ml-[15%] w-[70%] px-5 col-span-2'
// const boxHeading = 'font-josephine text-center justify-center mt-[58px] text-[#515156] items-center font-bold text-lg'
// const boxPara = 'font-josephine text-center justify-center mt-5 text-[#6a6a70] items-center font-normal'
// const boxCss = 'h-[40vh] my-20 rounded-lg grid grid-cols-3'
// const subheadingCss = 'italic text-[1.3rem] font-semibold';



export default function AboutUs() {
  const { t } = useTranslation("common");
  console.log(t("text-about-us"));
  return (
    <>
      <AboutUsDesktop />
      <AboutUsMobile />
    </>
  )
}


AboutUs.Layout = Layout

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
