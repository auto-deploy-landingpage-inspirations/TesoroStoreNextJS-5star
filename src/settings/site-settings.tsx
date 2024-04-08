// import { ILFlag } from "@components/icons/ILFlag";
// import { SAFlag } from "@components/icons/SAFlag";
// import { CNFlag } from "@components/icons/CNFlag";
// import { USFlag } from "@components/icons/USFlag";
// import { DEFlag } from "@components/icons/DEFlag";
// import { ESFlag } from "@components/icons/ESFlag";
export const siteSettings = {
	name: "Tesoro Store",
	description:
		"Your own gift shop",
	author: {
		name: "Reillusions",
		websiteUrl: "https://reillusions.com/",
		address: "",
	},
	logo: {
		url: "/assets/images/logo.png",
		alt: "Tesoro Store",
		href: "/",
		width: 110,
		height: 50,
	},
	defaultLanguage: "en",
	currencyCode: "INR",
	site_header: {
		menu: [
			{
				id: 1,
				path: "/",
				label: "Home Decor",
				subMenu: [
					{
						id: 1,
						path: "/categories/planters",
						label: "Planters",
					},
					{
						id: 2,
						path: "/categories/candles",
						label: "Candles",
					},
					{
						id: 3,
						path: "/categories/candle-stand",
						label: "Candle Stand",
					},
					{
						id: 4,
						path: "/categories/mirrors",
						label: "Mirrors",
					},
					{
						id: 5,
						path: "/categories/vases",
						label: "Vases",
					},
					{
						id: 6,
						path: "/categories/frames",
						label: "Frames",
					},
				],
			},
			{
				id: 2,
				path: "/",
				label: "Stationery",
				subMenu: [
					{
						id: 1,
						path: '/categories/pens-and-highlighters',
						label: 'Pens & Highlighters'
					},
					{
						id: 2,
						path: '/categories/notebooks-and-planners',
						label: 'Notebook & Planners'
					},
					{
						id: 3,
						path: '/categories/journals',
						label: 'Journals'
					},
					{
						id: 4,
						path: '/categories/photo-books',
						label: 'Photo Books'
					},
					{
						id: 5,
						path: '/categories/bookmarks',
						label: 'Bookmarks'
					},
					{
						id: 6,
						path: '/categories/sticky-notes',
						label: 'Sticky Notes'
					},
					{
						id: 7,
						path: '/categories/to-do-lists-notepad',
						label: 'To-Do List & Notepad'
					},
					{
						id: 8,
						path: '/categories/pencils',
						label: 'Pencils'
					}
				]
			},
			{
				id: 3,
				path: "/",
				label: "Tableware",
				subMenu: [
					{
						id: 1,
						path: '/categories/ceramic-bowl',
						label: 'Ceramic Bowls'
					},
					{
						id: 2,
						path: '/categories/cutlery',
						label: 'Cutlery'
					},
					{
						id: 3,
						path: '/categories/plates',
						label: 'Plates'
					},
					{
						id: 4,
						path: '/categories/serving-plates-and-bowls',
						label: 'Serving Plates and Bowls'
					},
					{
						id: 5,
						path: '/categories/mugs',
						label: 'Mugs'
					},
					{
						id: 6,
						path: '/categories/cups',
						label: 'Cups'
					},
					{
						id: 7,
						path: '/categories/customizable-products',
						label: 'Customizable Products'
					},
					{
						id: 8,
						path: '/categories/glassware',
						label: 'Glassware'
					}
				]
			},
			{
				id: 4,
				path: '/accessories',
				label: 'Accessories',
				subMenu: [
					{
						id: 1,
						path: "",
						label: "Sunglasses"
					},
					{
						id: 2,
						path: "",
						label: "Jewellery"
					},{
						id: 3,
						path: "",
						label: "Bags"
					},
					{
						id: 4,
						path: "",
						label: "Hair"
					},
				]
			},
			{
				id: 5,
				path: "/",
				label: "Gifting",
				subMenu: [
					{
						id: 1,
						path: '/categories/gifts-for-her',
						label: 'Gifts for Her'
					},
					{
						id: 2,
						path: '/categories/gifts-for-him',
						label: 'Gift for Him'
					},
					{
						id: 3,
						path: '/categories/gifts-for-kids',
						label: 'Kids for Kids'
					},
					{
						id: 4,
						path: '/categories/gifts-for-mom',
						label: 'Gifts for Mom'
					},
					{
						id: 5,
						path: '/categories/gifts-for-dad',
						label: 'Gifts for Dad'
					}
				]
			},
			
			
			{
				id: 6,
				path: "/categories/handmade-with-love",
				label: "Handmade with Love"
			},
			{
				id: 7,
				path: "/categories/personal-care",
				label: "Personal Care"
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
								path: "/categories/planters",
								label: "Planters",
							},
							{
								id: 2,
								path: "/categories/candles",
								label: "Candles",
							},
							{
								id: 3,
								path: "/categories/candle-stand",
								label: "Candle Stand",
							},
							{
								id: 4,
								path: "/categories/mirrors",
								label: "Mirrors",
							},
							{
								id: 5,
								path: "/categories/vases",
								label: "Vases",
							},
							{
								id: 6,
								path: "/categories/frames",
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
								path: "/categories/pens-&-highlighters",
								label: 'Pens & Highlighters',
							},
							{
								id: 2,
								path: "/categories/notebook-&-planers",
								label: 'Notebook & Planners',
							},
							{
								id: 3,
								path: "/categories/photo-books",
								label: 'Photo Books',
							},
							{
								id: 4,
								path: "/categories/bookmarks",
								label:'Bookmarks',
							},
							{
								id: 5,
								path: "/sticky-notes",
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
					{
						id: 7,
						path: '/accessories',
						label: 'Accessories'
					},
				],
			},
			{
				id: 2,
				path: "/sale-page",
				label: "Sale",
			},
			{
				id: 3,
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
