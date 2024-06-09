import React, {
	useEffect,
	useState
} from "react";
import Button from "@components/ui/button";
import Counter from "@components/common/counter";
import { useRouter } from "next/router";
import { useProductQuery } from "@framework/product/get-product";
import { useCart } from "@contexts/cart/cart.context";
import { generateCartItem } from "@utils/generate-cart-item";
import Link from "@components/ui/link";
import { toast } from "react-toastify";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import PinCodeCheckForm from "./pinCodeForm";
import ProductRating from "./productRating";
import ProductReviewCards from "./product-review";
import { Item } from "@contexts/cart/cart.utils";
import { useUI } from "@contexts/ui.context";
import ProductVariantSelector from "@components/product/product-variant"
// import "./product-single-details.css";

interface VariantPrices {
	finalPrice: number;
	finalDiscountedPrice: number;
	discount: number;
	markedPrice: number;
	salePrice: number;
}


const ProductSingleDetails: React.FC = () => {
	const { width } = useWindowSize();
	const { items, removeItemFromCart, addItemToCart } = useCart();
	const { closeCart } = useUI();
	const router = useRouter();

	const [variantData, setVariantData] = useState<any>({});
	const [variantDesc, setVariantDesc] = useState<string>("");
	const [stockLoading, setStockLoading] = useState<boolean>(true);
	const [outOfStock, setOutOfStock] = useState<boolean>(false);
	const [variantPrices, setVariantPrices] = useState<VariantPrices | null>(null);
	const [selectedVariant, setSelectedVariant] = useState<string>('');
	const [quantity, setQuantity] = useState<number>(1);
	const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
	const [buyNowLoader, setBuyNowLoader] = useState<boolean>(false);
	const [imgToShow, setImgToShow] = useState<string>("");
	const [imagesToShow, setImagesToShow] = useState<any>([]);
	

	const {
		query: { slug },
	} = useRouter();

	const { data, isLoading  } = useProductQuery(slug as string);

	useEffect(() => {

		if(data?.approved === false){
			toast("Product is not available", {
				type: "error"
			})

			window.location.href = "/";
		}
		if (data?.isCombination) {
			if (data?.variants && data?.variants.length > 0) {
				setImgToShow(data?.variants[0].images[0]);
				setImagesToShow(data?.variants[0].images);
				const finalPrice = data?.variants[0].originalPrice + data?.prices.slabPrice;
				const finalDiscountedPrice = data?.variants[0].price + data?.prices.slabPrice;
				const markedPrice = Math.round(finalPrice * (100 + data?.taxPercent) / 100);
				const salePrice = Math.round(finalDiscountedPrice * (100 + data?.taxPercent) / 100);
				const discount = markedPrice - salePrice;
				setVariantPrices({
					finalPrice: finalPrice,
					finalDiscountedPrice: finalDiscountedPrice,
					discount: discount,
					markedPrice: markedPrice,
					salePrice: salePrice
				});
				if(data?.variants[0].quantity === 0){
					setOutOfStock(true);
					setStockLoading(false);
				}
			}
		} else {
			if(Number(data?.stock) === 0){
				setOutOfStock(true);
				setStockLoading(false);
			}
			setImgToShow(data?.image[0] ?? "");
			setImagesToShow(data?.image);
		}

	}, [data]);


	useEffect(() => {
		if(data?.isCombination){
			
		}
	}, [variantData])

	useEffect(() => {
		if(outOfStock === false || stockLoading === true){
			setStockLoading(false);
		}
	}, [outOfStock])

	if (isLoading) return <p>Loading...</p>;

	function addToCart() {
		setAddToCartLoader(true);
		setTimeout(() => {
			setAddToCartLoader(false);
		}, 600);

		let name = data?.title.en;
		let finalPrice = data?.prices.markedPrice;
		let finalDiscountedPrice = data?.prices.salePrice;

		let discount = 0;

		if (data?.isCombination) {
			name = `${name}-${variantData.name.en}`;
			finalDiscountedPrice = variantPrices?.salePrice || 0;
			finalPrice = variantPrices?.markedPrice || 0;
			discount = variantPrices?.discount || 0;
		}

		const precart: Item = {
			id: data?._id || '',
			name: name || ' ',
			slug: data?.slug || ' ',
			image: imgToShow || '',
			price: finalPrice || 0,
			sale_price: finalDiscountedPrice || 0,
			isCombination: data?.isCombination,
			discount: discount,
			variantId: variantData._id
		}

		const item = generateCartItem(precart, variantData);
		console.log("Cart Item: ");
		console.log(item);
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
	}

	function clearCart() {
		for (let i = 0; i < items.length; i++) {
			removeItemFromCart(items[i].id);
		}
	}

	function buyNow() {
		setBuyNowLoader(true);
		setTimeout(() => {
			setBuyNowLoader(false);
		}, 600);

		let name = data?.title.en;
		let finalPrice = data?.prices.finalPrice;
		let finalDiscountedPrice = data?.prices.finalDiscountedPrice;

		let discount = 0;

		if (data?.isCombination) {
			name = `${name}-${variantData.name.en}`;
			finalDiscountedPrice = variantPrices?.finalDiscountedPrice || 0;
			finalPrice = variantPrices?.finalPrice || 0;
			discount = variantPrices?.discount || 0;
		}

		const precart: Item = {
			id: data?._id || '',
			name: name || ' ',
			slug: data?.slug || ' ',
			image: imgToShow || '',
			price: finalPrice || 0,
			sale_price: finalDiscountedPrice || 0,
			isCombination: data?.isCombination,
			discount: discount
		}

		const item = generateCartItem(precart, variantData);
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

		closeCart();
		router.push("/checkout");
	}
	// useEffect(() => {

	// }, [variantData]);
	if(data?.approved === false || data?.status === "hide"){
		window.location.href = "/";
		return <p>Product is not available</p>
	} else if(data?.approved === true) {
		return (
			<>
				<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start">
					{width < 1025 ? (
						<>
							<div className="md:col-span-1 xl:col-span-1 lg:col-span-1 sm:col-span-0 w-full">
							</div>
							<div className="lg:col-span-4 md:col-span-6 w-full flex">
								<div className="w-full h-full">
									<div className="object-cover h-[90vw] w-[90vw] mx-auto p-2"
										style={{
											borderRadius: '20px',
											backgroundImage: `url(${imgToShow ?? data?.image[0]})`,
											backgroundRepeat: 'no-repeat',
											// backgroundAttachment: 'fixed',
											backgroundSize: 'contain',
											backgroundPosition: 'center'
										}}
									>
									</div>
									{Array.isArray(imagesToShow) && imagesToShow.length > 1 && (
										<div className="col-span-2">
											<Carousel
												// pagination={{
												// 	clickable: true,
												// }}
												// breakpoints={productGalleryCarouselResponsive}
												// slidesPerView={data?.image.length}
												slidesPerView={4}
												className="product-gallery"
												buttonClassName="hidden"
											>
												{Array.isArray(imagesToShow) && imagesToShow.map((item: any, index: number) => (
													<SwiperSlide key={`product-gallery-key-${index}`}>
														<div className="col-span-1 transition duration-150 ease-in hover:opacity-90"
															onClick={() => {
																setImgToShow(item)
															}}
														>
															<div className="mt-2 object-cover p-2 w-full border-r-8 aspect-[1/1]"
																style={{
																	borderRadius: '10px',
																	backgroundImage: `url(${item ?? data?.image[0]})`,
																	backgroundRepeat: 'no-repeat',
																	// backgroundAttachment: 'fixed',
																	backgroundSize: 'cover',
																	backgroundPosition: 'center',
																	width: '20vw',
																	height: '20vw'
																}}
															>
															</div>
														</div>
													</SwiperSlide>
												))}
											</Carousel>
										</div>
									)}
									{/* {Array.isArray(imagesToShow) && thumbs} */}
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
									{Array.isArray(imagesToShow) && imagesToShow.map((item: any, index: number) => (
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
											/>
										</li>
									))}
								</ul>
							</div>
							<div className="lg:col-span-4 fixed-gallery">
								<img src={imgToShow ?? data?.image[0]} alt="" style={{ height: '80vh', marginLeft: "auto", marginRight: "auto" }} />
							</div>
						</>
					)}
	
					<div className="col-span-4 pt-8 lg:pt-0 hide-scrollbar" style={{ height: '80vh', overflowY: 'scroll', overflowX: 'hidden' }}>
						<div className="pb-4 mb-4 border-b border-gray-300">
							<h2 className="font-josephine text-gray-600 font-bold hover:text-slate-800 mt-10 uppercase mb-3">
								<span className="font-bold uppercase text-black text-10px">{data?.storeName}</span><br />
								<span className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl ">{data?.title["en"]}</span>
							</h2>
							{
								data?.productRating?.overallRating !== undefined ? (
									<ProductRating productRating={{ overallRating: data?.productRating.overallRating ?? 0, ratingCount: data?.productRating.ratingCount ?? 0 }} />
								) : (
									<ProductRating productRating={{ overallRating: 0, ratingCount: 0 }} />
								)
							}
							{data?.isCombination ? (
								<div className="flex items-center mt-5">
									<div className="font-josephine text-gray-600 font-semibold text-base md:text-md lg:text-lg 2xl:text-2xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
										₹{variantPrices?.salePrice}/-
									</div>
									{variantPrices?.discount !== 0 && (
										<span className="font-josephine font-normal line-through font-segoe text-gray-400 text-sm md:text-base lg:text-md xl:text-lg ps-2">
											₹{variantPrices?.markedPrice }/-
										</span>
									)}
									{variantPrices?.discount !== 0 && (
										<span className="font-josephine font-normal font-segoe text-red-600 border-2 border-red-600 bg-red-200 rounded-2xl ml-4 p-1 text-sm md:text-base lg:text-md xl:text">
											{((variantPrices?.discount || 0)/(variantPrices?.markedPrice || 0) * 100).toFixed(1)}% off
										</span>
									)}
								</div>
							) : (
								<div className="flex items-center mt-5">
									<div className="font-josephine text-gray-600 font-semibold text-base md:text-md lg:text-lg 2xl:text-2xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
										₹{data?.prices.salePrice}/-
									</div>
									{data?.prices.discount !== 0 && (
										<span className="font-josephine font-normal line-through font-segoe text-gray-400 text-sm md:text-base lg:text-md xl:text-lg ps-2">
											₹{data?.prices.markedPrice}/-
										</span>
									)}
									{data?.prices.discount !== 0 && (
										<span className="font-josephine font-normal font-segoe text-red-600 border-2 border-red-600 bg-red-200 rounded-2xl ml-4 p-1 text-sm md:text-base lg:text-md xl:text">
											{((data?.prices?.discount || 0)/(data?.prices?.finalPrice || 0) * 100).toFixed(1)}% off
										</span>
									)}
								</div>
							)}
							<span className="text-sm text-green-600 font-extrabold">inclusive of all taxes</span>
						</div>
						{data?.isCombination && (
							<ProductVariantSelector product={data} selectedVariant={selectedVariant} setSelectedVariant={setSelectedVariant} setVariantData={setVariantData} setImagesToShow={setImagesToShow} setImgToShow={setImgToShow} setPrices={setVariantPrices} slabPrice={data?.prices.slabPrice} setVariantDesc={setVariantDesc} setStockLoading={setStockLoading} setOutOfStock={setOutOfStock} />
						)}
						{stockLoading === true ? 
							(
								<div className="text-red text-sm inline-flex px-5 bg-blue-300 rounded-md p-2 mt-2 text-center"
									style={{ border: '1px solid blue' }}
								>
									Loading...
								</div>
							)
							: outOfStock === true ? 
							(
								<div className="text-red text-sm inline-flex px-5 bg-red-300 rounded-md p-2 mt-2 text-center"
									style={{ border: '1px solid red' }}
								>
									Out Of Stock
								</div>
							)
							: 
							(
								<></>
							)
						}
	
						<div className="py-3 border-b border-gray-300">
							<div className="md:w-1/3 sm:w-1/2">
								<Counter
									quantity={quantity}
									onIncrement={() => setQuantity((prev) => prev + 1)}
									onDecrement={() =>
										setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
									}
									disableDecrement={quantity === 1 || outOfStock}
									disableIncrement={outOfStock || Number(data?.stock) === Number(quantity)}
								/>
							</div>
						</div>
	
						<div className="mt-4">
							<table className="table-fixed sm:w-full md:w-2/3 "
								style={
									{ borderBottomRightRadius: '10px', borderTopLeftRadius: '10px', padding: '5px', margin: '10px', boxShadow: '1.5px 1.5px 1.5px 2px rgba(248, 113, 113, 0.3)' }
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
											<div className="font-josephine bg-black w-2/3 ml-5 mt-2 mb-2" style={{ height: '1px' }}></div>
											<div className="font-josephine font-semibold w-full pl-5 mr-10 mb-0">Get 5% Off sitewide</div>
											<div className="font-josephine flex pl-5 items-center mb-1">Use Code <span className="p-1 ml-4 text-gray-600 border-2 bg-[#FFE583] font-bold text-sm cursor-pointer" onClick={() => {
												navigator.clipboard.writeText("TESOROLOVESYOU");
												toast("Copied to clipboard", {
													type: "dark",
													progressClassName: "fancy-progress-bar",
													position: width > 768 ? "bottom-right" : "top-right",
													autoClose: 2000,
													hideProgressBar: false,
													closeOnClick: true,
													pauseOnHover: true,
													draggable: true,
												});
											}}>TESOROLOVESYOU</span> </div>
											<div className="font-josephine flex pl-5 items-center mb-1 text-xs">Min Order Amount: ₹499/-, apply at checkout!</div>
										</td>
									</tr>
									{/* <tr>
										<td>
											<div className="font-josephine bg-black w-2/3 ml-5 mt-2 mb-2" style={{ height: '1px' }}></div>
											<div className="font-josephine font-semibold w-full pl-5 mr-10">Get Rs 150 Off on your first purchase</div>
											<div className="font-josephine flex pl-5 items-center mb-1">Use Code <span className="p-1 ml-4 text-gray-600 border-2 bg-[#FFE583] font-bold text-sm">WELCOMETESORO</span> </div>
										</td>
									</tr> */}
								</tbody>
							</table>
						</div>
						<div className="my-5">
							<PinCodeCheckForm />
						</div>
						<div className={`flex items-center ${width < 1025 ? ('w-[100%]') : ('w-[70%]')}`}>
							<Button
								onClick={addToCart}
								variant="new"
								disabled={outOfStock}
								className={`font-josephine m-2 inline-flex whitespace-nowrap `}
								// disabled={!isSelected}
								loading={addToCartLoader}
							>
								<span className="px-2 py-1 3xl:px-8 text-lg mt-1">ADD TO CART</span>
							</Button>
							<Button
								onClick={() => {
									clearCart();
									buyNow();
								}}
								disabled={outOfStock}
								variant="new-2"
								className={`font-josephine inline-flex whitespace-nowrap hover:bg-white hover:drop-shadow-md bg-indigo-500 hover:text-indigo-500 text-white`}
								// disabled={!isSelected}
								loading={buyNowLoader}
							>
								<span className=" px-2 py-1 3xl:px-8 text-lg mt-1">BUY NOW</span>
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
											{data.category.name.en}
										</Link>
									</li>
								)}
								{/* <>
									{data?.tag && Array.isArray(data.tag) && (
										<li className="productTags">
											<span className="text-xl font-josephine font-semibold text-gray-900 inline-block pe-2">
												Tags:
											</span>
											{data.tag[0].substring(1, data.tag[0].length - 1).split(",").map((t: any, index: number) => (
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
								</> */}
							</ul>
						</div>
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
						{variantDesc !== "" && (
							<p className="font-josephine ">
								{variantDesc}
							</p>
						)}
	
					</div>
					<div className="lg:col-span-4">
						<div className="py-6">
							<ul className="text-lg space-y-5 pb-1">

								{!((data?.length === undefined && data?.width === undefined && data?.height === undefined) || (data?.length === "" && data?.width === "" && data?.height === "") ) && (
									<li className="font-josephine ">
										<span className="font-josephine font-semibold text-heading inline-block pe-2">
											Dimensions:
										</span>
										<span className="font-josephine">
											{(data?.length===undefined || data?.length === "" ) ? (
												<></>): (<>{data?.length}cm x </>)} {(data?.width===undefined || data?.width === "" ) ? (
													<></>): (<>{data?.width}cm x </>)} {(data?.height===undefined || data?.height === "") ? (
														<></>
													): (<>{data?.height}cm</>)}
										</span>
									</li>
								)}
								<li className="font-josephine ">
									<span className="font-josephine font-semibold text-heading inline-block pe-2">
										Composition:
									</span>
									{data?.composition && data?.composition}
								</li>
								<li className="font-josephine ">
									<span className="font-josephine font-semibold text-heading inline-block pe-2">
										Product Code:
									</span>
									{data?.sku && data?.sku}
								</li>
								<li className="font-josephine ">
									<span className="font-josephine font-semibold text-heading inline-block pe-2">
										Processing time:
									</span>
									{data?.shippingTime && data?.shippingTime || '3'} days.
								</li>
								{data?.returnable === false && (
									<li className="font-josephine ">
										<span className="font-josephine px-2 text-sm font-semibold text-red-500 rounded-lg bg-white border-red-500 border-2 inline-block">
											The product is not returnable!
										</span>
									</li>
								)}
								{data?.uploads === true && (
									<li className="font-josephine ">
										<span className="font-josephine px-2 text-sm font-semibold text-black rounded-lg bg-white border-black border-2 inline-block">
											This product requires User Uploads for Product Personalization!
										</span>
									</li>
								)}
	
								{/* <li>
								<span className="font-semibold text-heading inline-block pe-2">
									Composition
								</span>
								{data?.composition!=undefined && data?.composition}
							</li> */}
							</ul>
						</div>
					</div>
				</div>
				<ProductReviewCards ReviewData={data} />
			</>
		);

	} else {
		return <>Error with Laoading Product</>
	}

};

export default ProductSingleDetails;
