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
				path: "/categories/home-decor",
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
						label: "Wall Frames",
					},
				],
			},
			{
				id: 2,
				path: "/categories/stationery",
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
						label: 'Notebooks & Planners'
					},
					{
						id: 3,
						path: '/categories/journals',
						label: 'Journals'
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
						path: '/categories/to-do-lists-and-notepads',
						label: 'To-Do List & Notepad'
					},
				]
			},
			{
				id: 3,
				path: "/categories/tableware",
				label: "Tableware",
				subMenu: [
					{
						id: 1,
						path: '/categories/ceramic-bowls',
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
				path: '/categories/accessories',
				label: 'Accessories',
				subMenu: [
					{
						id: 1,
						path: "/categories/sunglasses",
						label: "Sunglasses"
					},
					{
						id: 2,
						path: "/categories/earrings",
						label: "Earrings"
					},{
						id: 3,
						path: "/categories/bags",
						label: "Bags"
					},
					{
						id: 4,
						path: "/categories/necklace",
						label: "Necklace"
					},
				]
			},
			{
				id: 5,
				path: "/categories/gifting",
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
						label: 'Gifts for Him'
					},
					{
						id: 3,
						path: '/categories/gifts-for-kids',
						label: 'Gifts for Kids'
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
						path: "/categories/home-decor",
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
								label: "Wall Frames",
							},
						],
					},

					{
						id: 2,
						path: "/categories/stationery",
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
								id: 4,
								path: "/categories/bookmarks",
								label:'Bookmarks',
							},
							{
								id: 5,
								path: "/categories/sticky-notes",
								label: 'Sticky Notes',
							},
							{
								id: 6,
								path: "/categories/to-do-lists-and-notepads",
								label: 'To-Do List & Notepad',
							},
							{
								id: 7,
								path: "/categories/journals",
								label: 'Journals',
							},
						],
					},
					
					{
						id: 3,
						path: "/categories/tableware",
						label: "Tableware",
						subMenu: [
							{
								id: 1,
								path: '/categories/ceramic-bowls',
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
								path: "/categories/sunglasses",
								label: "Sunglasses"
							},
							{
								id: 2,
								path: "/categories/earrings",
								label: "Earrings"
							},{
								id: 3,
								path: "/categories/bags",
								label: "Bags"
							},
							{
								id: 4,
								path: "/categories/necklace",
								label: "Necklace"
							},
						]
					},
					{
						id: 5,
						path: "/categories/gifting",
						label: "Gifting",
						subMenu: [
							{
								id: 1,
								path: "/categories/gifts-for-her",
								label: "Gifts for Her",
							},
							{
								id: 2,
								path: "/categories/gifts-for-him",
								label: "gifts for Him",
							},
							{
								id: 3,
								path: "/categories/gifts-for-kids",
								label: "Gifts for Kids",
							},
							{
								id: 4,
								path: "/categories/gifts-for-mom",
								label: "Gifts for Mom",
							},
							{
								id: 4,
								path: "/categories/gifts-for-dad",
								label: "Gifts for Dad",
							},
						],
					},
					
					{
						id: 6,
						path: "/categories/handmade-with-love",
						label: "Handmade with Love",
					},
					{
						id: 7,
						path: "/categories/personal-care",
						label: "Personal Care",
					},
					// {
					// 	id: 7,
					// 	path: '/accessories',
					// 	label: 'Accessories'
					// },
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
