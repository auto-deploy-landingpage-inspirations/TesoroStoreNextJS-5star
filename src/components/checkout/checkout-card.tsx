import usePrice from "@framework/product/use-price";
import { useCart } from "@contexts/cart/cart.context";
import { CheckoutItem } from "@components/checkout/checkout-card-item";
import { CheckoutCardFooterItem } from "./checkout-card-footer-item";
import { useTranslation } from "next-i18next";
// import Input from "@components/ui/input";
// import Button from "@components/ui/button";
import axios from "axios";
import React, { useEffect } from "react";

interface CheckoutCardProps { 
	paymentMethod: string;
	couponCode: string;
	setCouponCode: any;
};

const CheckoutCard: React.FC<CheckoutCardProps> = ({paymentMethod, couponCode, setCouponCode}) => {
	const [couponApplied, setCouponApplied] = React.useState("");
	const [couponError, setCouponError] = React.useState("");
	const [couponDiscount, setCouponDiscount] = React.useState(0);
	
	let { items, total, isEmpty } = useCart();
	
	const [finalCartAmount, setFinalCartAmount] = React.useState(total);
	let { price: totalAmount } = usePrice({
		amount: total,
		currencyCode: "INR",
	});
	const { t } = useTranslation("common");
	const checkoutFooter = [
		{
			id: 1,
			name: t("text-sub-total"),
			price: totalAmount,
		},
		{
			id: 2,
			name: t("text-shipping"),
			price: t("text-free"),
		},
		{
			id: 3,
			name: "COD Charges",
			price: paymentMethod === "cod" ? "₹50/-" : "₹0/-",
		},
		
	];

	const secondFooter = [
		{
			id: 2,
			name: 'Coupon Discount',
			price: `-₹${couponDiscount}`,
			className: "text-red-500 font-bold"
		},
		{
			id: 3,
			name: t("text-total"),
			price: `₹${finalCartAmount}`,
		}
	];

	useEffect(() => {
		let finalAmount = total - couponDiscount;
		if(paymentMethod === "cod"){
			console.log("COD Selected! Adding Rs 50/-");
			finalAmount = finalAmount + 50;
		}
		setFinalCartAmount(finalAmount);

	}, [couponDiscount, paymentMethod])

	const applyCoupon = async() => {
		// http://localhost:5055/api/coupon/apply-coupon-to-cart/
		const alreadyAppliedCoupon = couponApplied === "" ? null : couponApplied;
		try{
			const response = await axios.post(`https://tesoro-backend.onrender.com/api/coupon/apply-coupon-to-cart`, {
				couponCode: couponCode,
				cart: items,
				alreadyAppliedCoupon: alreadyAppliedCoupon
			})
			console.log("Apply coupon response");
			console.log("response: ", response.data);
			if(response.data.couponSuccess === true){
				setCouponApplied(couponCode);
				setCouponDiscount(response.data.discountAmount);
				setCouponError("");
			} else {
				setCouponApplied("");
				setCouponError("Invalid Coupon Code");
				setCouponDiscount(0);
			}
		} catch(err){
			console.log("Error in applying coupon: ", err);
			setCouponApplied("");
			setCouponError("Invalid Coupon Code");
			setCouponDiscount(0);
		}

		
	}
	return (
		<div className="pt-12 md:pt-0 2xl:ps-4">
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{t("text-your-order") as string}
			</h2>
			<div className="flex p-4 rounded-md mt-6 md:mt-7 xl:mt-9 bg-gray-150 text-sm font-semibold text-heading">
				<span>{t("text-product") as string}</span>
				<span className="ms-auto flex-shrink-0">{t("text-sub-total") as string}</span>
			</div>
			
			{!isEmpty ? (
				items.map((item) => <CheckoutItem item={item} key={item.id} />)
			) : (
				<p className="text-red-500 lg:px-3 py-4">{t("text-empty-cart") as string}</p>
			)}
			
			{/* {paymentMethod === "cod" && (
				<div className="flex items-center py-4 lg:py-5 border-b border-gray-300 text-sm lg:px-3 w-full font-semibold text-heading last:border-b-0 last:text-base last:pb-0">
					<span>COD Charges</span>
					<span className="ms-auto flex-shrink-0">₹50/-</span>
				</div>
			)} */}
			{checkoutFooter.map((item: any) => (
				<CheckoutCardFooterItem item={item} key={item.id} />
			))}

			<div
				className="pt-4 flex flex-col"
			>
				<h3 className="text-indigo-600 text-base font-bold ml-3 mb-1">Coupon Code</h3>
				<div className="flex justify-start border-none w-full">
					<input
						type="text"
						name="Coupon"
						value={couponCode}
						onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
						required={false}

						className="w-full lg:w-1/2 lg:ms-3 text-center text-xs font-bold p-1 mt-2 md:mt-0 uppercase border border-gray-800 rounded"
					/>
					<button
						className="text-[#4f46e5] w-1/4 p-1 text-sm font-bold uppercase "
						onClick={applyCoupon}
					>
						APPLY
					</button>
					<button
						className="text-[#dc2626] w-1/4 p-1 text-sm font-bold uppercase "
						onClick={() => {
							setCouponCode("");
							setCouponApplied("");
							setCouponError("");
							setCouponDiscount(0);
						}}
					>
						CLEAR
					</button>
				</div>
				<div className="">
					{couponApplied !== "" && (
						<p className="text-green-500 text-sm lg:ms-3 py-1 font-bold">Coupon Applied!</p>
					)}
					{couponError !== "" && (
						<p className="text-red-500 text-sm lg:ms-3 py-1 font-bold">{couponError}</p>
					)}
				</div>
			</div>


			{secondFooter.map((item: any) => (
				<CheckoutCardFooterItem item={item} key={item.id} />
			))}
		</div>
	);
};

export default CheckoutCard;
