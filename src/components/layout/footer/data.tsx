import {
	IoLogoInstagram,
	IoLogoTwitter,
	IoLogoFacebook,
	IoLogoYoutube,
} from "react-icons/io5";

export const footer = {
	widgets: [
		{
			id: 1,
			widgetTitle: "widget-title-social",
			lists: [
				{
					id: 1,
					title: "link-instagram",
					path: "https://www.instagram.com/",
					icon: <IoLogoInstagram />,
				},
				{
					id: 2,
					title: "link-twitter",
					path: "https://twitter.com/",
					icon: <IoLogoTwitter />,
				},
				{
					id: 3,
					title: "link-facebook",
					path: "https://www.facebook.com/",
					icon: <IoLogoFacebook />,
				},
				{
					id: 4,
					title: "link-youtube",
					path: "https://www.youtube.com/",
					icon: <IoLogoYoutube />,
				},
			],
		},
		{
			id: 2,
			widgetTitle: "widget-title-contact",
			lists: [
				{
					id: 1,
					title: "link-contact-us",
					path: "/",
				},
				{
					id: 2,
					title: "support@tesorostore.in",
					path: "mailto:support@tesorostore.in",
				},
				{
					id: 3,
					title: "+91 96549 70705",
					path: "tel:+919654970705",
				},
			],
		},
		{
			id: 3,
			widgetTitle: "widget-title-about",
			lists: [
				{
					id: 1,
					title: "link-support-center",
					path: "/contact-us",
				},
				{
					id: 2,
					title: "link-customer-support",
					path: "/",
				},
				{
					id: 3,
					title: "link-about-us",
					path: "/about-us",
				},
				{
					id: 4,
					title: "link-copyright",
					path: "/",
				},
			],
		},
		{
			id: 4,
			widgetTitle: "widget-title-customer-care",
			lists: [
				{
					id: 1,
					title: "link-faq",
					path: "/faq",
				},
				{
					id: 2,
					title: "Shipping Policy",
					path: "/shipping-policy",
				},
				{
					id: 4,
					title: "Return & Cancellation Policy",
					path: "/return-and-cancellation-policy",
				},
			],
		},
		{
			id: 5,
			widgetTitle: "widget-title-our-information",
			lists: [
				{
					id: 1,
					title: "Terms of Service",
					path: "/terms-conditions",
				},
				{
					id: 2,
					title: "Terms of Use",
					path: "/terms-of-use",
				},
				{
					id: 3,
					title: "Privacy Policy",
					path: "/privacy-policy",
				},
				{
					id: 5,
					title: "link-site-map",
					path: "/",
				},
			],
		},
		{
			id: 6,
			widgetTitle: "widget-title-top-categories",
			lists: [
				{
					id: 1,
					title: "Home Decor",
					path: "/search",
				},
				{
					id: 2,
					title: "Stationary",
					path: "/search",
				},
				{
					id: 3,
					title: "Tableware",
					path: "/search",
				},
				{
					id: 4,
					title: "Gifts",
					path: "/search",
				},
				{
					id: 5,
					title: "Handmade with Love",
					path: "/search",
				},
				{
					id: 6,
					title: "Custom Made",
					path: "/search",
				},
			],
		},
	],
	payment: [
		{
			id: 1,
			path: "/",
			image: "/assets/images/payment/mastercard.svg",
			name: "payment-master-card",
			width: 34,
			height: 20,
		},
		{
			id: 2,
			path: "/",
			image: "/assets/images/payment/visa.svg",
			name: "payment-visa",
			width: 50,
			height: 20,
		},
		{
			id: 3,
			path: "/",
			image: "/assets/images/payment/paypal.svg",
			name: "payment-paypal",
			width: 76,
			height: 20,
		},
		{
			id: 4,
			path: "/",
			image: "/assets/images/payment/jcb.svg",
			name: "payment-jcb",
			width: 26,
			height: 20,
		},
		{
			id: 5,
			path: "/",
			image: "/assets/images/payment/skrill.svg",
			name: "payment-skrill",
			width: 39,
			height: 20,
		},
	],
};
