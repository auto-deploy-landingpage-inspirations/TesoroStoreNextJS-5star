import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@components/icons/search-icon";
import { siteSettings } from "@settings/site-settings";
import HeaderMenu from "@components/layout/header/header-menu";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@utils/routes";
import { addActiveScroll } from "@utils/add-active-scroll";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import FavoriteIcon from "@components/icons/favorites-icon";
const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
	ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const Header: React.FC = () => {
	const [isWebsiteLoading, setIsLoading] = useState(true);
	const {
		// openSidebar,
		// setDrawerView,
		openSearch,
		openModal,
		setModalView,
		isAuthorized,
	} = useUI();
	const { t } = useTranslation("common");
	const siteHeaderRef = useRef() as DivElementRef;
	addActiveScroll(siteHeaderRef);

	function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}
	// function handleMobileMenu() {
	// 	setDrawerView("MOBILE_MENU");
	// 	return openSidebar();
	// }

	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1800)
		const handleScroll = () => {
		  setScrollY(window.scrollY);
		};
	
		// just trigger this so that the initial state 
		// is updated as soon as the component is mounted
		// related: https://stackoverflow.com/a/63408216
		handleScroll();
	
		window.addEventListener("scroll", handleScroll);
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		  clearTimeout(timer);
		};
	
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

	return (
		<>
		{isWebsiteLoading === true && (
				<div className=" text-center items-center justify-center absolute w-screen h-screen z-50 top-[-30px] left-0 bg-blue-400">
					<img src="/assets/images/loader.gif" alt="loading" className="w-[10vw] for-desktop absolute top-[25vh] left-[45vw] mx-auto my-auto"/>
					<img src="/assets/images/loader.gif" alt="loading" className="w-[100vw]"/>
				</div>
			)}
			
		
		<header className={`top-7 z-100 page-header ${scrollY > 150 ? 'is-sticky': ''}`}>
			<div className="h-16 w-full">
				<nav className="px-10 h-full w-full items-center justify-center" style={{justifyContent: 'center'}}>
					<div className="justify-start ">
						<Logo />
					</div>
					<HeaderMenu
		 				data={site_header.menu}
		 				className="for-desktop lg:flex md:ms-6 xl:ms-10 justify-center"
		 			/>
					<div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
		 				<button
		 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
		 					onClick={openSearch}
		 					aria-label="search-button"
		 				>
		 					<SearchIcon />
		 				</button>
		 				<button
		 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
		 					onClick={() => {
		 						console.log("not working yet")
		 					}}
		 					aria-label="search-button"
		 				>
		 					<FavoriteIcon />
		 				</button>
		 				<div className="-mt-0.5 flex-shrink-0">
		 					<AuthMenu
		 						isAuthorized={isAuthorized}
		 						href={ROUTES.ACCOUNT}
		 						className="text-sm xl:text-base text-heading menu-text font-semibold"
		 						btnProps={{
		 							className:
		 								" font-josephine text-sm xl:text-base text-heading font-semibold focus:outline-none",
		 							children: "Sign in",
		 							onClick: handleLogin,
		 						}}
		 					>
		 						{t("text-account") as string}
		 					</AuthMenu>
		 				</div>
		 				<CartButton />
		 			</div>
				</nav>
			</div>
			{/* <div className="container h-12 w-full">
				<ul className="flex justify-center">
					<li>hi</li>
					<li>hi</li>
					<li>hi</li>
					<li>hi</li>
					<li>hi</li>
				</ul>
			</div> */}
		</header>
		
		</>
	);
};

export default Header;
