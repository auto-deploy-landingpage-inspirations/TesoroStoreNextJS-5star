import cn from "classnames";
import Image from "next/image";
import React, { useState } from 'react';
import type { FC } from "react";
import { useRouter } from "next/router";
// import { useUI } from "@contexts/ui.context";
// import usePrice from "@framework/product/use-price";
// import { Product } from "@framework/types";
import { ProductDetails } from "@framework/product/get-product";
import { Item } from "@contexts/cart/cart.utils";
import { generateCartItem } from "@utils/generate-cart-item";
import { ProductAttributes } from "./product-attributes";
import { useCart } from "@contexts/cart/cart.context";
import { toast } from "react-toastify";
import { useWindowSize } from "react-use";
// import Tooltip from "@components/Tooltip"

interface ProductProps {
	product: ProductDetails;
	className?: string;
	contactClassName?: string;
	imageContentClassName?: string;
	variant?: "grid" | "gridSlim" | "list" | "listSmall" | "grid_grad";
	imgWidth?: number | string;
	imgHeight?: number | string;
	imgLoading?: "eager" | "lazy";
}


const AddToCartButton: React.FC<{setAddToCart:any, addToCart:Boolean, addToCartFunc:any}> = ({setAddToCart, addToCart, addToCartFunc}) => {
	return(
			<button 
				className="w-auto lg:w-3/5 group relative flex rounded-lg items-center py-2 px-2 lg:py-1 lg:px-6 mx-auto text-center bg-[#FFE583] stroke-[black] hover:stroke-[white] transition ease-in-out duration-300 shadow-navigation hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0" 
				type="button"
				onClick={() => {
					setAddToCart(!addToCart);
					addToCartFunc();
				}}
				style={{
					fontWeight: 'bold',
					lineHeight: '4px',
					fontSize: '12px'
				}}
			>	

			<span className="text-sm font-bold text-center w-full">

			{
				addToCart? 
				(
					<p>
						Added!
					</p>
				):(
					<>
						<p className="for-desktop text-xs p-0 m-0">
							Add To Cart
						</p>
						<p className="for-mobile">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g className="" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6"/><path d="M9 11V6a3 3 0 0 1 6 0v5"/></g></svg>
						</p>
					</>
				)
			}
			</span>
		</button>
	)
}


const ProductCard: FC<ProductProps> = ({
	product,
	className = "",
	contactClassName = "",
	imageContentClassName = "",
	variant = "list",
	imgWidth = 300,
	// imgHeight = 300,
	imgLoading,
}) => {
	const { width } = useWindowSize();
	const {addItemToCart} = useCart();
	const [favorite, setFavorite] = useState<boolean>(false);
	const [addToCart, setAddToCart] = useState<boolean>(false);
	const router = useRouter();
	// const { 
	// 	// openModal, 
	// 	setModalView, setModalData } = useUI();
	const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;
	

	let discount = product.prices.markedPrice - product.prices.salePrice;
	const price = `₹${product.prices.salePrice}/-`;
	const basePrice = `₹${product.prices.markedPrice}/-`;
	if(product.prices.salePrice === 0 || product.prices.salePrice === null || product.prices.salePrice === undefined){
		discount = 0;
	}
	function handlePopupView() {
		// setModalData({ data: product });
		// setModalView("PRODUCT_VIEW");
		// return openModal();
		router.push(`/products/${product.slug}`);
	}

	// function handleOpenProductPage() {
	// 	router.push(`/products/${product.slug}`);
	// }

	function addToCartFunc() {
		const precart: Item = {
			id: product._id,
			name: product.title.en,
			quantity: 1,
			image: product.image[0],
			slug: product.slug,
			price: product.prices.markedPrice,
			sale_price: product.prices.salePrice
		}
		const item = generateCartItem(precart, ProductAttributes)
		addItemToCart(item, 1);
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
	return (
		<div
			className={cn(
				"group overflow-hidden flex rounded-md cursor-pointer text-left",
				{
					"pe-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1":
						variant === "grid",
					"pe-0 md:pb-1 flex-col items-start bg-white": variant === "gridSlim",
					"items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct":
						variant === "listSmall",
					"flex-row items-center transition-transform ease-linear bg-gray-200 pe-2 lg:pe-3 2xl:pe-4":
						variant === "list",
				},
				className
			)}
			
			role="button"
			title={product?.title.en}
		>
			<div
				onClick={handlePopupView}
				className={cn(
					"flex relative",
					{
						"mb-3 md:mb-3.5": variant === "grid",
						"mb-3 md:mb-3.5 pb-0": variant === "gridSlim",
						"flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44":
							variant === "listSmall",
					},
					imageContentClassName
				)}
			>
				<Image
					src={product?.image[0] ?? placeholderImage}
					
					width={imgWidth}
					height={imgWidth}
					loading={imgLoading}
					alt={product?.title.en || "Product Image"}
					className={cn("bg-gray-300 hover:hidden object-cover rounded-xl aspect-square", {
						"w-full rounded-md ":
							variant === "grid",
						"rounded-md transition duration-150 ease-linear transform group-hover:scale-105":
							variant === "gridSlim",
						"rounded-s-md transition duration-200 ease-linear transform group-hover:scale-105":
							variant === "list",
					})}
				/>
			</div>
			<div 
				className="absolute top-2 right-2 p-1"
				style={{borderRadius: '50%', background: 'rgba(255, 255, 255, 1)', 
				border: favorite?`1px solid orange`: '1px solid black'}}
				onClick={() => {
					setFavorite(!favorite)
				}}
			>
				{favorite? (
					<>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><g fill="orange"><path d="M232 94c0 66-104 122-104 122S24 160 24 94a54 54 0 0 1 54-54c22.59 0 41.94 12.31 50 32c8.06-19.69 27.41-32 50-32a54 54 0 0 1 54 54Z" opacity=".2"/><path d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62Zm-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8Z"/></g></svg>
					</>
				):(
					<>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path stroke="1" fill="black" d="M178 28c-20.09 0-37.92 7.93-50 21.56C115.92 35.93 98.09 28 78 28a66.08 66.08 0 0 0-66 66c0 72.34 105.81 130.14 110.31 132.57a12 12 0 0 0 11.38 0C138.19 224.14 244 166.34 244 94a66.08 66.08 0 0 0-66-66Zm-5.49 142.36a328.69 328.69 0 0 1-44.51 31.8a328.69 328.69 0 0 1-44.51-31.8C61.82 151.77 36 123.42 36 94a42 42 0 0 1 42-42c17.8 0 32.7 9.4 38.89 24.54a12 12 0 0 0 22.22 0C145.3 61.4 160.2 52 178 52a42 42 0 0 1 42 42c0 29.42-25.82 57.77-47.49 76.36Z"/></svg>
					</>
				)}
			</div>
			<div
				onClick={handlePopupView}
				className={cn(
					"w-full overflow-hidden",
					{
						"ps-0 lg:ps-2.5 xl:ps-3 pe-2 xl:pe-2": variant === "grid",
						"ps-0": variant === "gridSlim",
						"px-4 lg:px-4 2xl:px-2": variant === "listSmall",
					},
					contactClassName
				)}
			>
				<h2
					className={cn("text-heading font-semibold truncate", {
						"text-sm md:text-base": variant === "grid",
						"md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg":
							variant === "gridSlim",
						"text-sm sm:text-base pb-0": variant === "listSmall",
						"text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1":
							variant === "list",
					})}
					style={{fontFamily: 'Hap'}}
				>
					{product?.title.en}
				</h2>
				{product?.description && (
					<p className="text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate" 
					style={{fontFamily: 'Hap'}}>
						{product?.description.en}
					</p>
				)}
				<div
					className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-s-2 ${
						variant === "grid"
							? "lg:text-lg lg:mt-2.5"
							: "sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3"
					}`}
				>
					<span className="inline-block"
					style={{fontFamily: 'Hap'}}>{price}</span>
					{discount!==0 && (
						<del className="sm:text-base font-normal text-red-600" 
						style={{fontFamily: 'Hap'}}>
							{basePrice}
						</del>
					)}
				</div>
				
				<div className="text-center justify-center flex mt-2">
					
				</div>
			</div>
			<div className="overflow-hidden flex justify-center  absolute bottom-3.5 lg:bottom-5 p-2 w-full">
				<AddToCartButton setAddToCart={setAddToCart} addToCart={addToCart} addToCartFunc={addToCartFunc}  />
			</div>
		</div>
	);
};

export default ProductCard;
