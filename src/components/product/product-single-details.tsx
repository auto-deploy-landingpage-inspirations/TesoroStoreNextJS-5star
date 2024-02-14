import React, { 
	useEffect, 
	useState } from "react";
import Button from "@components/ui/button";
import Counter from "@components/common/counter";
import { useRouter } from "next/router";
import { useProductQuery } from "@framework/product/get-product";
import { getVariations } from "@framework/utils/get-variations";
// import usePrice from "@framework/product/use-price";
import { useCart } from "@contexts/cart/cart.context";
import { generateCartItem } from "@utils/generate-cart-item";
import { ProductAttributes } from "./product-attributes";
import isEmpty from "lodash/isEmpty";
import Link from "@components/ui/link";
import { toast } from "react-toastify";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
// import ProductMetaReview from "@components/product/product-meta-review";
import PinCodeCheckForm from "./pinCodeForm";
import ProductRating from "./productRating";
// import CardRoundedLoader from "@components/ui/loaders/card-rounded-loader";
import ProductReviewCards from "./product-review";
import { Item } from "@contexts/cart/cart.utils";
import { useUI } from "@contexts/ui.context";



// const productGalleryCarouselResponsive = {
// 	"768": {
// 		slidesPerView: 2,
// 	},
// 	"0": {
// 		slidesPerView: 1,
// 	},
// };

// const productGalleryCarouselResponsive2 = {
// 	"768": {
// 		slidesPerView: 2,
// 	},
// 	"0": {
// 		slidesPerView: 1,
// 	},
// };

// const productVerticalGalleryCarouselResponsive = {
// 	"1200": {
// 		slidesPerview: 6
// 	}
// }
// import { Product } from "@framework/types";
// import { useTranslation } from "next-i18next";

// interface ProductProps {
// 	slug: string;
// 	variant?: "grid" | "gridSlim" | "list" | "listSmall" | "grid_grad";
// }

const ProductSingleDetails: React.FC = () => {
	const [imgToShow, setImgToShow] = useState("");
	const {
		query: { slug },
	} = useRouter();
	
	const { width } = useWindowSize();
	const { data, isLoading } = useProductQuery(slug as string);
	useEffect(() => {
		setImgToShow(data?.image[0] ?? "");
	}, [data]);
	const { items, removeItemFromCart, addItemToCart } = useCart();
	const {closeCart} = useUI();
	const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
	const [quantity, setQuantity] = useState(1);
	const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
	const [buyNowLoader, setBuyNowLoader] = useState<boolean>(false);
	const router = useRouter();
	// const { 
	// 	price, basePrice, 
	// 	discount } = usePrice(
	// 	data && {
	// 		amount: data.prices.price ? data.prices.price : data.prices.orginalPrice,
	// 		baseAmount: data.prices.price,
	// 		currencyCode: "INR",
	// 	}
	// );
	// const discount = data?.prices.price
	// console.log(price, basePrice)
	// useEffect(() => {
	// 	setImgToShow(data?.image??"")
	// }, [data])
	if (isLoading) return <p>Loading...</p>;
	const variations = getVariations(data?.variants);
	
	// let tags:string[];
	// if(data?.tag){
	// 	tags = data?.tag.toString().replace(/\"/g, "")
	// 		.replace(/\[/g,"")
	// 		.replace(/\]/g,"")
	// 		.split(",");
	// }
	// console.log(tags);
	
	// console.log("tags: ",tags)
	const isSelected = !isEmpty(variations)
		? !isEmpty(attributes) &&
		  Object.keys(variations).every((variation) =>
				attributes.hasOwnProperty(variation)
		  )
		: true;

	function addToCart() {
		if (!isSelected) return;
		// to show btn feedback while product carting
		setAddToCartLoader(true);
		setTimeout(() => {
			setAddToCartLoader(false);
		}, 600);

		const precart: Item = {
			id: data?._id || '', 
			name: data?.title.en || ' ', 
			slug: data?.slug || ' ', 
			image: data?.image[0] || '',
			price: data?.prices.originalPrice || 0, 
			sale_price: data?.prices.price || 0
		}

		const item = generateCartItem(precart, attributes);
		addItemToCart(item, quantity);
		toast("Added to the bag", {
			type: "dark",
			progressClassName: "fancy-progress-bar",
			position: width > 768 ? "bottom-right" : "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
		// console.log(item, "item");
	}

	function clearCart(){
		for (let i = 0; i < items.length; i++) {
			removeItemFromCart(items[i].id);
		}
	}

	function buyNow() {
		if (!isSelected) return;
		// to show btn feedback while product carting
		setBuyNowLoader(true);
		setTimeout(() => {
			setBuyNowLoader(false);
		}, 600);

		const precart: Item = {
			id: data?._id || '', 
			name: data?.title.en || ' ', 
			slug: data?.slug || ' ', 
			image: data?.image[0] || '',
			price: data?.prices.originalPrice || 0, 
			sale_price: data?.prices.price || 0
		}

		const item = generateCartItem(precart, attributes);
		addItemToCart(item, quantity);
		toast("Added to the bag", {
			type: "dark",
			progressClassName: "fancy-progress-bar",
			position: width > 768 ? "bottom-right" : "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
		// console.log(item, "item");
		// close cart
		closeCart();
		// go to checkout page
		router.push("/checkout");
	}

	function handleAttribute(attribute: any) {
		setAttributes((prev) => ({
			...prev,
			...attribute,
		}));
	}
	
	
	// const { t } = useTranslation("common");

	return (
		<>
		<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start">
			{width < 1025 ? (
				<>
					<div className="md:col-span-1 xl:col-span-1 lg:col-span-1 sm:col-span-0 w-full">
					</div>
						<div className="lg:col-span-4 md:col-span-6 w-full flex">
							<div className="w-full h-full">
								<img src={imgToShow ?? data?.image[0]} alt="" className=" object-fit p-2" style={{borderRadius: '20px', height: '75vh', margin: 'auto'}} />
								<div className="col-span-2">
									<Carousel
										// pagination={{
										// 	clickable: true,
										// }}
										// breakpoints={productGalleryCarouselResponsive}
										slidesPerView={data?.image.length}
										className="product-gallery"
										buttonClassName="hidden"
									>
									{data?.image?.map((item:any, index: number) => (
										<SwiperSlide key={`product-gallery-key-${index}`}>
											<div className="col-span-1 transition duration-150 ease-in hover:opacity-90"
												onClick={() => {
													setImgToShow(item)
												}}
												style={{
													// height: '20vh'
													// width: '10vh'
												}}
											>
												<img
													src={
														item?.original ??
														"/assets/placeholder/products/product-gallery.svg"
													}
													alt={`${data?.title.en}--${index}`}
													className="object-cover w-full" 
													style={{
														borderRadius: '15px',
														padding: '5px',
														// height: '10vh',
														// width: '10vh'
													}}
												/>
											</div>
										</SwiperSlide>
									))}
								</Carousel>
								</div>
							</div>
						</div>
						<div className="lg:col-span-1 md:hidden lg:w-full">

						</div>
				</>
			) : (
				<>
					
						<div 
							className="lg:col-span-1"
						 	style={{
								maxHeight: '80vh',
								overflow: 'auto'
							}}
						>
							<ul>
								{data?.image?.map((item:any, index:number) => (
									<li 
										key={index}
										className=""
										onClick={() => {
											setImgToShow(item)
										}}
										style={{
											border: '1px solid gray',
											padding: '2px',
										}}
									>
										<img 
											src={item ?? "/assets/placeholder/products/product-gallery.svg"} 
											// height={'10vh'} 
											// width={'10vh'} 
										/>
									</li>
								))}
							</ul>
						</div>
						<div className="lg:col-span-4">
							<img src={imgToShow ?? data?.image[0]} alt="" style={{height: '80vh'}} />
						</div>
				</>
				// {/* // <div className="col-span-5 grid grid-cols-2 gap-2.5">
				// // 	{data?.gallery?.map((item, index: number) => ( 
				// // 		<div
				// // 			key={index}
				// // 			className="col-span-1 transition duration-150 ease-in hover:opacity-90"
				// // 		>
				// // 			<img
				// // 				src={
				// // 					item?.original ??
				// // 					"/assets/placeholder/products/product-gallery.svg"
				// // 				}
				// // 				alt={`${data?.name}--${index}`}
				// // 				className="object-cover w-full"
				// // 			/>
				// // 		</div>
				// // 	))}
				// // </div>*/}
			 )}

			<div className="col-span-4 pt-8 lg:pt-0 hide-scrollbar" style={{height: '80vh', overflowY: 'scroll', overflowX: 'hidden'}}>
				<div className="pb-4 mb-4 border-b border-gray-300">
					<h2 className="font-josephine text-gray-600 text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-slate-800 mt-10 uppercase mb-3">
						{data?.title["en"]}
					</h2>
					{/* <p className="font-bold pb-5 font-josephine">
						{data?.description["en"]}
					</p> */}
					<ProductRating />
					{/* <p className="text-body text-sm lg:text-base leading-3 lg:leading-6">
						{data?.description}
					</p> */}
					<div className="flex items-center mt-5">
						<div className="font-josephine text-gray-600 font-semibold text-base md:text-md lg:text-lg 2xl:text-2xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
							₹{data?.prices.price}/-
						</div>
						{data?.prices.discount && (
							<span className="font-josephine font-normal line-through font-segoe text-gray-400 text-sm md:text-base lg:text-md xl:text-lg ps-2">
								₹{data?.prices.originalPrice}/-
							</span>
						)}
					</div>
				</div>

				<div className="pb-3 border-b border-gray-300">
					{Object.keys(variations).map((variation) => {
						return (
							<ProductAttributes
								key={variation}
								title={variation}
								attributes={variations[variation]}
								active={attributes[variation]}
								onClick={handleAttribute}
							/>
						);
					})}
					<div className="md:w-1/3 sm:w-full mb-2">
						<Counter
							quantity={quantity}
							onIncrement={() => setQuantity((prev) => prev + 1)}
							onDecrement={() =>
								setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
							}
							disableDecrement={quantity === 1}
						/>
					</div>
				</div>

				{/* <div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8">
					
					
				</div> */}
				<div className="mt-4">
				<table className="table-fixed sm:w-full md:w-2/3 " 
					style={
						{ borderBottomRightRadius: '10px', borderTopLeftRadius: '10px', padding: '5px', margin: '10px', boxShadow: '1.5px 1.5px 1.5px 2px rgba(248, 113, 113, 0.3)'}
					}
				>
					<thead>
						<tr>
							<th className="font-josephine text-red-400 text-left pl-5 pt-3">BEST OFFERS FOR YOU!</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="">
								<div className="font-josephine bg-black w-2/3 ml-5 mt-2 mb-2" style={{height: '1px'}}></div>
								<div className="font-josephine font-semibold w-full pl-5 mr-10 mb-0">Get 5% Off sitewide</div>
								<div className="font-josephine flex pl-5 items-center mb-1">Use Code <span className="p-1 ml-4 text-gray-600 border-2 bg-[#FFE583] font-bold text-sm">MAKEHOMESPECIAL</span> </div>
							</td>
						</tr>
						<tr>
							<td>
								<div className="font-josephine bg-black w-2/3 ml-5 mt-2 mb-2" style={{height: '1px'}}></div>
								<div className="font-josephine font-semibold w-full pl-5 mr-10">Get Rs 150 Off on your first purchase</div>
								<div className="font-josephine flex pl-5 items-center mb-1">Use Code <span className="p-1 ml-4 text-gray-600 border-2 bg-[#FFE583] font-bold text-sm">WELCOMETESORO</span> </div>
							</td>
						
						</tr>
					</tbody>
					</table>
				</div>
				<div className="my-5">
					<PinCodeCheckForm />
				</div>
				<div className="flex items-center w-[70%] sm:w-full">
					<Button
						onClick={addToCart}
						variant="new"
						className={`font-josephine w-full md:w-1/2 xl:w-1/3 m-2 ${
							!isSelected && ""
						}`}
						disabled={!isSelected}
						loading={addToCartLoader}
					>
						<span className="py-2 3xl:px-8 text-lg mt-1">ADD TO CART</span>
					</Button>
					<Button
						onClick={() => {
							clearCart();
							buyNow();
						}}
						variant="new-2"
						className={`font-josephine w-full md:w-1/2 m-2 xl:w-1/3 flex hover:bg-white hover:drop-shadow-md bg-indigo-500 hover:text-indigo-500 text-white ${
							!isSelected && ""
						}`}
						disabled={!isSelected}
						loading={buyNowLoader}
					>
						<span className="py-1 3xl:px-8 text-lg mt-1">BUY NOW</span>
					</Button>
				</div>
				<div className="py-6">
					<ul className="text-sm space-y-5 pb-1">
						{/* <li>
							<span className="font-semibold text-heading inline-block pe-2">
								Product Code:
							</span>
							{data?.sku}
						</li> */}
						{data?.category && (
							<li className="productCategory">
									<span className="font-josephine text-xl font-semibold text-gray-900 inline-block pe-2">
										Category:
									</span>
									<Link
										href="/"
										className="font-josephine text-lg transition hover:underline hover:text-heading"
									>
										{data.category.name.en }
									</Link>
							</li>
						)}
						<>
							{data?.tag && Array.isArray(data.tag) && (
								<li className="productTags">
									<span className="text-xl font-josephine font-semibold text-gray-900 inline-block pe-2">
										Tags:
									</span>
									{data.tag[0].substring(1, data.tag[0].length - 1).split(",").map((t:any, index: number) => (
										<Link
											key={index}
											href={t.replace(/"/g, "")}
											className="text-xl font-josephine inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
										>
											{t.replace(/"/g, "")}
											<span className=" text-lg font-josephine text-heading">,</span>
										</Link>
									))}
								</li>
							)}
						</>
					</ul>
				</div>

				{/* <ProductMetaReview data={data} /> */}
			</div>
		</div>
		<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start">
			<div className="lg:col-span-1"></div>
			<div className="lg:col-span-4">
				<h2 className="font-josephine text-left text-xl font-bold text-gray-800">
					Product Details
				</h2>
				<p className="font-josephine ">
					{data?.description["en"]}
				</p>
				
			</div>
			<div className="lg:col-span-4">
				<div className="py-6">
					<ul className="text-lg space-y-5 pb-1">
						
						<li className="font-josephine ">
							<span className="font-josephine font-semibold text-heading inline-block pe-2">
								Dimensions
							</span>
							<span className="font-josephine">
								45cm x 25cm x 53cm
							</span>
						</li>
						<li className="font-josephine ">
							<span className="font-josephine font-semibold text-heading inline-block pe-2">
								Composition
							</span>
							Glass
						</li>
						<li className="font-josephine ">
							<span className="font-josephine font-semibold text-heading inline-block pe-2">
								Product Code:
							</span>
							SKU1253fC
						</li>
						<li className="font-josephine ">
							<span className="font-josephine font-semibold text-heading inline-block pe-2">
								Delivery time:
							</span>
							The product would be delivered in 3-10 days after shipping
						</li>
						{/* <li>
							<span className="font-semibold text-heading inline-block pe-2">
								Composition
							</span>
							Glass
						</li> */}
					</ul>
				</div>
			</div>
		</div>
		<ProductReviewCards ReviewData={data} />
		</>
	);
};

export default ProductSingleDetails;
