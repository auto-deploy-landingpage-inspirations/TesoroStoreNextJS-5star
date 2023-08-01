// import { ILFlag } from "@components/icons/ILFlag";
// import { SAFlag } from "@components/icons/SAFlag";
// import { CNFlag } from "@components/icons/CNFlag";
// import { USFlag } from "@components/icons/USFlag";
// import { DEFlag } from "@components/icons/DEFlag";
// import { ESFlag } from "@components/icons/ESFlag";
export const siteSettings = {
	name: "ChawkBazar",
	description:
		"Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
	author: {
		name: "Reillusions",
		websiteUrl: "https://reillusions.com/",
		address: "",
	},
	logo: {
		url: "/assets/images/logo.png",
		alt: "Tesoro Store",
		href: "/",
		width: 95,
		height: 30,
	},
	defaultLanguage: "en",
	currencyCode: "INR",
	site_header: {
		menu: [
			{
				id: 1,
				path: "#",
				label: "Categories",
				columns: [
					{
						id: 1,
						columnItems: [
							{
								id: 1,
								path: "/collections/home-decor",
								label: "Home Decor",
								columnItemItems: [
									{
										id: 1,
										path: "/sub-collections/planters",
										label: "Planters",
									},
									{
										id: 2,
										path: "/sub-collections/candles",
										label: "Candles",
									},
									{
										id: 3,
										path: "/sub-collections/candle-stand",
										label: "Candle Stand",
									},
									{
										id: 4,
										path: "/sub-collections/mirrors",
										label: "Mirrors",
									},
									{
										id: 5,
										path: "/sub-collections/vases",
										label: "Vases",
									},
									{
										id: 6,
										path: "/sub-collections/frames",
										label: "Frames",
									},
								],
							},
							{
								id: 2,
								path: "/collections/handmade-with-love",
								label: "Handmade with Love",
							},
							{
								id: 3,
								path: "/collections/custom-made",
								label: "Custom Made"
							}
						],
					},
					{
						id: 2,
						columnItems: [
							{
								id: 1,
								path: "/collections/stationary",
								label: "Stationary",
								columnItemItems: [
									{
										id: 1,
										path: '/sub-collections/pens-and-highlighters',
										label: 'Pens & Highlighters'
									},
									{
										id: 2,
										path: '/sub-collections/notebooks-and-planners',
										label: 'Notebook & Planners'
									},
									{
										id: 3,
										path: '/sub-collections/journals',
										label: 'Journals'
									},
									{
										id: 4,
										path: '/sub-collections/photo-books',
										label: 'Photo Books'
									},
									{
										id: 5,
										path: '/sub-collections/bookmarks',
										label: 'Bookmarks'
									},
									{
										id: 6,
										path: '/sub-collections/sticky-notes',
										label: 'Sticky Notes'
									},
									{
										id: 7,
										path: '/sub-collections/to-do-lists-notepad',
										label: 'To-Do List & Notepad'
									},
									{
										id: 8,
										path: '/sub-collections/pencils',
										label: 'Pencils'
									}
								]
							},
						],
					},
					{
						id: 3,
						columnItems: [
							{
								id: 1,
								path: "/collections/tableware",
								label: "Tableware",
								columnItemItems: [
									{
										id: 1,
										path: '/sub-collections/ceramic-bowl',
										label: 'Ceramic Bowls'
									},
									{
										id: 2,
										path: '/sub-collections/cutlery',
										label: 'Cutlery'
									},
									{
										id: 3,
										path: '/sub-collections/plates',
										label: 'Plates'
									},
									{
										id: 4,
										path: '/sub-collections/serving-plates-and-bowls',
										label: 'Serving Plates and Bowls'
									},
									{
										id: 5,
										path: '/sub-collections/mugs',
										label: 'Mugs'
									},
									{
										id: 6,
										path: '/sub-collections/cups',
										label: 'Cups'
									},
									{
										id: 7,
										path: '/sub-collections/customizable-products',
										label: 'Customizable Products'
									},
									{
										id: 8,
										path: '/sub-collections/glassware',
										label: 'Glassware'
									}
								]
							},
						],
					},
					{
						id: 4,
						columnItems: [
							{
								id: 1,
								path: "/collections/gifting",
								label: "Gifting",
								columnItemItems: [
									{
										id: 1,
										path: '/sub-collections/gifts-for-her',
										label: 'Gifts for Her'
									},
									{
										id: 2,
										path: '/sub-collections/gifts-for-him',
										label: 'Gift for Him'
									},
									{
										id: 3,
										path: '/sub-collections/gifts-for-kids',
										label: 'Kids for Kids'
									},
									{
										id: 4,
										path: '/sub-collections/gifts-for-mom',
										label: 'Gifts for Mom'
									},
									{
										id: 5,
										path: '/sub-collections/gifts-for-dad',
										label: 'Gifts for Dad'
									}
								]
							},
							
						],
					},
				],
			},
			
			{
				id: 2,
				path: "/pages/sale",
				label: "Sale"
			},
			{
				id: 3,
				path: "/pages/about-us",
				label: "About us"
			},
		],
		mobileMenu: [
			
			{
				id: 1,
				path: "/",
				label: "Categories",
				subMenu: [
					{
						id: 1,
						path: "/",
						label: "Home Decor",
						subMenu: [
							{
								id: 1,
								path: "/search?q=t-shit-shirtrt",
								label: "Planters",
							},
							{
								id: 2,
								path: "/search?q=casual-shirts",
								label: "Candles",
							},
							{
								id: 3,
								path: "/search?q=formal-shirts",
								label: "Candle Stand",
							},
							{
								id: 4,
								path: "/search?q=blazwers-coats",
								label: "Mirrors",
							},
							{
								id: 5,
								path: "/search?q=suits",
								label: "Vases",
							},
							{
								id: 6,
								path: "/search?q=jackets",
								label: "Frames",
							},
						],
					},

					{
						id: 2,
						path: "/",
						label: "Stationary",
						subMenu: [
							{
								id: 1,
								path: "/search?q=t-shit-shirtrt",
								label: 'Pens & Highlighters',
							},
							{
								id: 2,
								path: "/search?q=casual-shirts",
								label: 'Notebook & Planners',
							},
							{
								id: 3,
								path: "/search?q=formal-shirts",
								label: 'Photo Books',
							},
							{
								id: 4,
								path: "/search?q=blazwers-coats",
								label:'Bookmarks',
							},
							{
								id: 5,
								path: "/search?q=suits",
								label: 'Sticky Notes',
							},
							{
								id: 6,
								path: "/search?q=jackets",
								label: 'To-Do List & Notepad',
							},
							{
								id: 7,
								path: "/search?q=suits",
								label: 'Journals',
							},
							{
								id: 8,
								path: "/search?q=jackets",
								label: 'Pencils',
							},
						],
					},
					
					{
						id: 3,
						path: "/search?q=western-wear",
						label: "Tableware",
						subMenu: [
							{
								id: 1,
								path: "/search?q=dresses",
								label: "Ceramic Bowls",
							},
							{
								id: 2,
								path: "/search?q=jumpsuits",
								label: "Cutlery",
							},
							{
								id: 3,
								path: "/search?q=tops-t-shirt",
								label: "Plates",
							},
							{
								id: 4,
								path: "/search?q=shorts-skirts",
								label: 'Serving Plates and Bowls'
							},
							{
								id: 5,
								path: "/search?q=shurgs",
								label: 'Mugs'
							},
							{
								id: 6,
								path: "/search?q=blazers",
								label: 'Cups'
							},
							{
								id: 7,
								path: "/search?q=shurgs",
								label: 'Customizable Products'
							},
							{
								id: 8,
								path: "/search?q=blazers",
								label: 'Glassware'
							},
						],
					},
					{
						id: 4,
						path: "/search?q=footwear",
						label: "Gifting",
						subMenu: [
							{
								id: 1,
								path: "/search?q=flats",
								label: "Gifts for Her",
							},
							{
								id: 2,
								path: "/search?q=casual-shoes",
								label: "gifts for Him",
							},
							{
								id: 3,
								path: "/search?q=heels",
								label: "Gifts for Kids",
							},
							{
								id: 4,
								path: "/search?q=boots",
								label: "Gifts for Mom",
							},
							{
								id: 4,
								path: "/search?q=boots",
								label: "Gifts for Dad",
							},
						],
					},
					
					{
						id: 5,
						path: "/search?q=backpacks",
						label: "Handmade with Love",
					},
					{
						id: 6,
						path: "/search?q=handbags-wallets",
						label: "Custom Made",
					},
				],
			},
			{
				id: 3,
				path: "/sale-page",
				label: "Sale",
			},
			{
				id: 4,
				path: "/contact-us",
				label: "Contact Us",
				subMenu: [
					{
						id: 1,
						path: "/email",
						label: "contact@tesorostore.com",
						
					},
					{
						id: 2,
						path: "/phone",
						label: "+91 931 961 6722",
					},
					{
						id: 3,
						path: "/address",
						label: "Hauz Khas New Delhi",
					},
				],
			},
		],
	},
};
