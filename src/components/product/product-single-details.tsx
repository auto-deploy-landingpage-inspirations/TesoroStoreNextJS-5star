import React, { useEffect, useState } from "react";
import Button from "@components/ui/button";
import Counter from "@components/common/counter";
import { useRouter } from "next/router";
import { useProductQuery } from "@framework/product/get-product";
import { getVariations } from "@framework/utils/get-variations";
import usePrice from "@framework/product/use-price";
import { useCart } from "@contexts/cart/cart.context";
import { generateCartItem } from "@utils/generate-cart-item";
import { ProductAttributes } from "./product-attributes";
import isEmpty from "lodash/isEmpty";
import Link from "@components/ui/link";
import { toast } from "react-toastify";
import { useWindowSize } from "@utils/use-window-size";
import Carousel from "@components/ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import ProductMetaReview from "@components/product/product-meta-review";
import PinCodeCheckForm from "./pinCodeForm";
import ProductRating from "./productRating";

const productGalleryCarouselResponsive = {
	"768": {
		slidesPerView: 2,
	},
	"0": {
		slidesPerView: 1,
	},
};

const productGalleryCarouselResponsive2 = {
	"768": {
		slidesPerView: 2,
	},
	"0": {
		slidesPerView: 1,
	},
};

const productVerticalGalleryCarouselResponsive = {
	"1200": {
		slidesPerview: 6
	}
}

const ProductSingleDetails: React.FC = () => {
	const [imgToShow, setImgToShow] = useState("")
	const {
		query: { slug },
	} = useRouter();
	const { width } = useWindowSize();
	const { data, isLoading } = useProductQuery(slug as string);
	const { addItemToCart } = useCart();
	const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
	const [quantity, setQuantity] = useState(1);
	const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
	const { price, basePrice, discount } = usePrice(
		data && {
			amount: data.sale_price ? data.sale_price : data.price,
			baseAmount: data.price,
			currencyCode: "INR",
		}
	);
	useEffect(() => {
		setImgToShow(data?.image?.original)
	}, [data])
	if (isLoading) return <p>Loading...</p>;
	const variations = getVariations(data?.variations);

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

		const item = generateCartItem(data!, attributes);
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
		console.log(item, "item");
	}

	function handleAttribute(attribute: any) {
		setAttributes((prev) => ({
			...prev,
			...attribute,
		}));
	}

	return (
		<>
		<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start">
			{width < 1025 ? (
				<>
					<div className="md:col-span-1 xl:col-span-1 lg:col-span-1 sm:col-span-0 w-full">
					</div>
						<div className="lg:col-span-4 md:col-span-6 w-full flex">
							<div className="w-full h-full">
								<img src={imgToShow ?? data?.image?.original} alt="" className=" object-fit p-2" style={{borderRadius: '20px', height: '75vh', margin: 'auto'}} />
								<div className="col-span-2">
									<Carousel
										// pagination={{
										// 	clickable: true,
										// }}
										// breakpoints={productGalleryCarouselResponsive}
										slidesPerView={data?.gallery?.length}
										className="product-gallery"
										buttonClassName="hidden"
										style={{
											// height: '10vh',
										}}
									>
									{data?.gallery?.map((item, index: number) => (
										<SwiperSlide key={`product-gallery-key-${index}`}>
											<div className="col-span-1 transition duration-150 ease-in hover:opacity-90"
												onClick={() => {
													setImgToShow(item?.original)
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
													alt={`${data?.name}--${index}`}
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
								{data?.gallery?.map((item, index:number) => (
									<li 
										key={index}
										className=""
										onClick={() => {
											setImgToShow(item?.original)
										}}
										style={{
											border: '1px solid gray',
											padding: '2px',
										}}
									>
										<img 
											src={item?.original ?? "/assets/placeholder/products/product-gallery.svg"} 
											// height={'10vh'} 
											// width={'10vh'} 
										/>
									</li>
								))}
							</ul>
						</div>
						<div className="lg:col-span-4">
							<img src={imgToShow ?? data?.image?.original} alt="" style={{height: '80vh'}} />
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
					<h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black ">
						{data?.name}
					</h2>
					<p className="font-bold">
						{"fnp"}
					</p>
					<ProductRating />
					{/* <p className="text-body text-sm lg:text-base leading-3 lg:leading-6">
						{data?.description}
					</p> */}
					<div className="flex items-center mt-5">
						<div className="text-heading font-bold text-base md:text-xl lg:text-xl 2xl:text-3xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
							{price}
						</div>
						{discount && (
							<span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ps-2">
								{basePrice}
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
					<div className="md:w-1/3 sm:w-full">
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
				<div>
				<table className="table-fixed sm:w-full md:w-2/3" 
					style={
						{ borderBottomRightRadius: '10px', borderTopLeftRadius: '10px', padding: '5px', margin: '10px', boxShadow: '1.5px 1.5px 1.5px 2px rgba(5, 5, 255, 0.25)'}
					}
				>
					<thead>
						<tr>
							<th className="text-red-400 text-left pl-5 pt-3">BEST OFFERS FOR YOU!</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="">
								<div className="bg-black w-2/3 ml-5 mt-2 mb-2" style={{height: '1px'}}></div>
								<div className="font-semibold w-full pl-5 mr-10 mb-0">Get 5% Off sitewide</div>
								<div className="flex pl-5 items-center mb-1">Use Code <span className="p-1 ml-4 text-white border-2 bg-indigo-600 font-bold text-sm border-indigo-800">MAKEHOMESPECIAL</span> </div>
							</td>
						</tr>
						<tr>
							<td>
								<div className="bg-black w-2/3 ml-5 mt-2 mb-2" style={{height: '1px'}}></div>
								<div className="font-semibold w-full pl-5 mr-10">Get Rs 150 Off on your first purchase</div>
								<div className="flex pl-5 items-center mb-1">Use Code <span className="p-1 ml-4 text-white border-2 bg-indigo-600 font-bold text-sm border-indigo-800">WELCOMETESORO</span> </div>
							</td>
						
						</tr>
					</tbody>
					</table>
				</div>
				<div>
					<PinCodeCheckForm />
				</div>
				<div className="flex items-center">
					<Button
						onClick={addToCart}
						variant="slim"
						className={`w-full md:w-6/12 xl:w-full m-2 bg-gradient-to-r from-green-200 to-blue-600 hover:from-green-400 hover:to-blue-800 ${
							!isSelected && ""
						}`}
						disabled={!isSelected}
						loading={addToCartLoader}
					>
						<span className="py-2 3xl:px-8">Add to cart</span>
					</Button>
					<Button
						onClick={addToCart}
						variant="slim"
						className={`w-full md:w-6/12 m-2 xl:w-full bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-600 hover:to-blue-700 ${
							!isSelected && ""
						}`}
						disabled={!isSelected}
						loading={addToCartLoader}
					>
						<span className="py-2 3xl:px-8">Buy Now</span>
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
						<li>
							<span className="font-semibold text-heading inline-block pe-2">
								Category:
							</span>
							<Link
								href="/"
								className="transition hover:underline hover:text-heading"
							>
								{data?.category?.name}
							</Link>
						</li>
						{data?.tags && Array.isArray(data.tags) && (
							<li className="productTags">
								<span className="font-semibold text-heading inline-block pe-2">
									Tags:
								</span>
								{data.tags.map((tag) => (
									<Link
										key={tag.id}
										href={tag.slug}
										className="inline-block pe-1.5 transition hover:underline hover:text-heading last:pe-0"
									>
										{tag.name}
										<span className="text-heading">,</span>
									</Link>
								))}
							</li>
						)}
					</ul>
				</div>

				{/* <ProductMetaReview data={data} /> */}
			</div>
		</div>
		<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start">
			<div className="lg:col-span-1"></div>
			<div className="lg:col-span-4">
				<h2 className="text-left text-lg font-bold">
					Product Details
				</h2>
				<p>
					{data?.description}
				</p>
				
			</div>
			<div className="lg:col-span-4">
				<div className="py-6">
					<ul className="text-sm space-y-5 pb-1">
						
						<li>
							<span className="font-semibold text-heading inline-block pe-2">
								Dimensions
							</span>
							<span>
								45cm x 25cm x 53cm
							</span>
						</li>
						<li>
							<span className="font-semibold text-heading inline-block pe-2">
								Composition
							</span>
							Glass
						</li>
						<li>
							<span className="font-semibold text-heading inline-block pe-2">
								Product Code:
							</span>
							SKU1253fC
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
		<div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-3 pb-10 lg:pb-14 2xl:pb-20 items-start">
			{/* <div className="md:col-span-1"></div> */}
		<section className="col-span-6 ml-10 pb-24 pt-10  rounded-t-10xl overflow-hidden" 
			// style={{backgroundColor: 'rgba(102, 153, 204, 0.1)'}}
		>
  <div className="container px-4 mx-auto">
    

    <a className="inline-block mb-14 text-3xl font-heading font-medium underline hover:text-darkBlueGray-700" href="#">{data?.gallery?.length} reviews</a>
		{data?.gallery?.map((item, index:number) => (
			<div className="mb-5 rounded-t-8xl rounded-b-5xl overflow-hidden" key={index} style={{boxShadow: '2px 2px 2px 2px rgba(1, 1, 1, 0.2)', borderRadius: '20px'}}>
				<div className="pt-3 pb-5 md:pb-1 px-4 md:px-16 bg-gray-300 bg-opacity-40" style={{borderTopLeftRadius: '40px', borderTopRightRadius: '40px'}}>
					<div className="flex flex-wrap items-center">
						<div className="bg-white items-center p-2 mr-6" style={{borderRadius: '20%', width: 'min-content', boxShadow: '2px 2px 2px 2px rgba(100, 100, 100, 0.1)'}}>
							<img className="mr-6" src="/assets/images/users/user1.jpg" height={50} width={50} alt="" style={{borderRadius: '50%'}}/>
						</div>
					<h4 className="w-full md:w-auto text-xl font-heading font-semibold">Prashant Mishra</h4>
					<div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-400"></div>
					<span className="mr-4 text-xl font-heading font-semibold">5.0</span>
					<div className="inline-flex">
						<a className="inline-block mr-1" href="#">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
						</svg>
						</a>
						<a className="inline-block mr-1" href="#">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
						</svg>
						</a>
						<a className="inline-block mr-1" href="#">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
						</svg>
						</a>
						<a className="inline-block mr-1" href="#">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
						</svg>
						</a>
						<a className="inline-block text-gray-200" href="#">
						<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z" fill="#FFCB00"></path>
						</svg>
						</a>
					</div>
					</div>
				</div>
				<div className="px-4 overflow-hidden md:px-16 pt-4 pb-6 bg-white">
					<div className="flex flex-wrap">
					<div className="w-full md:w-2/3 mb-6 md:mb-0">
						<p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">My friend really loved this gift. One of the best gifting options ever! </p>
						<div className="-mb-2">
							<div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
								<div className="flex items-center h-12 pl-2 pr-6 bg-indigo-100 border-2 border-indigo-500 rounded-full">
									<div className="flex mr-2 w-6 h-6 items-center justify-center bg-white rounded-full text-indigo-500">
										<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
										</svg>
									</div>
								<span className="text-indigo-500 text-sm font-normal">Aesthetics</span>
								</div>
							</div>
							<div className="inline-flex w-full md:w-auto md:mr-2 mb-2">
								<div className="flex items-center h-12 pl-2 pr-6 bg-indigo-100 border-2 border-indigo-500 rounded-full">
									<div className="flex mr-2 w-6 h-6 items-center justify-center bg-white rounded-full text-indigo-500">
										<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.016 6.366H6.38V10.092H4.472V6.366H0.836V4.638H4.472V0.911999H6.38V4.638H10.016V6.366Z" fill="currentColor"></path>
										</svg>
									</div>
								<span className="text-indigo-500 text-sm font-normal">Finishing</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full md:w-1/3 text-right">
						<p className="mb-8 text-sm text-gray-300">Added {index+1} months ago</p>
					</div>
					</div>
				</div>
				</div>
		))}
      
    
    
    <div className="text-center">
      <button className="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">See all</button>
    </div>
  </div>
</section>
		</div>
		</>
	);
};

export default ProductSingleDetails;
