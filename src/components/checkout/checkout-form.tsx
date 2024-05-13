import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import { useCheckoutMutation } from "@framework/checkout/use-checkout";
import { CheckBox } from "@components/ui/checkbox";
import Button from "@components/ui/button";
// import Router from "next/router";
// import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import { 
	// cartContext, 
	useCart 
} from "@contexts/cart/cart.context";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import router from "next/router";


const ccav = require('./../../utils/ccavutil.js');
const crypto = require('crypto');


interface CheckoutInputType {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	address: string;
	city: string;
	state: string;
	zipCode: string;
	save: boolean;
	note: string;
	guestCheckout: boolean;
}

interface CheckoutFormProps {
	paymentMethod: string;
	setPaymentMethod: (paymentMethod: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({paymentMethod, setPaymentMethod}) => {
	const { t } = useTranslation();
	// const [paymentMethod, setPaymentMethod] = useState('');
	const {items, removeItemFromCart} = useCart();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [guestCheckout, setGuestCheckout] = useState(false);
	// const [orderDetails, setOrderDetails] = useState({});

	function clearCart(){
		for (let i = 0; i < items.length; i++) {
			removeItemFromCart(items[i].id);
		}
	}
	const { 
		// mutate: updateUser, 
		isLoading } = useCheckoutMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CheckoutInputType>();

	function handleGuestCheckout(event:any) {
		setGuestCheckout(event.target.checked);
	}
	

	function onSubmit(input: CheckoutInputType) {
		try {
			if(Cookies.get('auth_token') === undefined && guestCheckout === false){
				toast("Please Login Or Select Guest Checkout", {
					type: "error",
					autoClose: 2000,
				})
				return;
			}

			if(paymentMethod === ''){
				toast("Please Select Payment Method", {
					type: "error",
					autoClose: 2000,
				})
				return;
			}
			

			const merchantId = 3163052;
			
			let accessCode = '';
			let workingKey = '';
			let redirectUrl = '';
			let cancelUrl = '';
			console.log("ENV: ",process.env.NEXT_PUBLIC_ENV)
			if(process.env.NEXT_PUBLIC_ENV === 'PROD'){
				accessCode += "AVXZ47LA41AP26ZXPA";
				workingKey += "298BE0AC1AF59F06692096195F57D059"
				redirectUrl += "https://tesorostore.in/api/ccavResponseHandler";
				cancelUrl += "https://tesorostore.in/api/ccavResponseHandler";
			} else {
				accessCode += "AVCK53LA79CN78KCNC";
				workingKey += "B119F30E7F577B431660D1EF7065B53B";
				redirectUrl += "http://127.0.0.1:3001/api/ccavResponseHandler";
				cancelUrl += "http://127.0.0.1:3001/api/ccavResponseHandler";
			}
			const currency = "INR";
			// const orderId = "ORD0001";
			const language = "EN";
			// const ccaRequest = `merchantId=${merchantId}&accessCode=${accessCode}`;
			// console.log(workingKey, orderId, currency, amount, redirectUrl, cancelUrl, language, ccaRequest);
			var md5 = crypto.createHash('md5').update(workingKey).digest();
			var keyBase64 = Buffer.from(md5).toString('base64');

			//Initializing Vector and then convert in base64 string
			var ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,0x0e, 0x0f]).toString('base64');

			const submitForm = async () => {
				let orderDetails = await createOrder();
				
				if(orderDetails === false){
					// toast("Error Creating Order", {
					// 	type: "error"
					// })
					return;
				}
				clearCart();
				if(paymentMethod === 'online'){
					toast("Redirecting to Payment Gateway", {
						type: "info"
					})
					var form = document.createElement("form");
					form.setAttribute("method", "post");
					form.setAttribute("action", "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction");
					form.setAttribute("name", "redirect");
					form.setAttribute("id", "nonseamless");
					
					const username = `${input.firstName} ${input.lastName}`
					
					const body = `merchant_id=${merchantId}&order_id=${orderDetails.orderId}&currency=${currency}&amount=${orderDetails.total}&redirect_url=${redirectUrl}&cancel_url=${cancelUrl}&language=${language}&billing_name=${username}&billing_address=${input.address}&billing_city=${input.city}&billing_state=${input.state}&billing_zip=${input.zipCode}&billing_country=&billing_tel=${input.phone}&billing_email=${input.email}&delivery_name=&delivery_address=&delivery_city=&delivery_state=&delivery_zip=&delivery_country=&delivery_tel=&merchant_param1=&merchant_param2=&merchant_param3=&merchant_param4=&merchant_param5=&promo_code=&customer_identifier=`
					
					const encRequest = ccav.encrypt(body, keyBase64, ivBase64);
					
	
					// form fields
					var encRequestInput = document.createElement("input");
					encRequestInput.setAttribute("type", "hidden");
					encRequestInput.setAttribute("name", "encRequest");
					encRequestInput.setAttribute("value", encRequest);
					form.appendChild(encRequestInput);
	
					var accessCodeInput = document.createElement("input");
					accessCodeInput.setAttribute("type", "hidden");
					accessCodeInput.setAttribute("name", "access_code");
					accessCodeInput.setAttribute("value", accessCode);
					form.appendChild(accessCodeInput);
	
					document.body.appendChild(form);
					form.submit();
				} else {
					toast("Order Placed!", {
						type: "success"
					})
					let redirectUrl = ''
					if(guestCheckout === true){
						redirectUrl = `/guest-order/${orderDetails.orderId}`;
					} else {
						redirectUrl = `/my-account/orders/${orderDetails.orderId}`;
					}
					router.push(redirectUrl);
				}
			}
			

			const createOrder = async() => {
				// const items:any = [];
				
				const orderDetails = {
					cart: items,
					billing: input,
					guestCheckout: guestCheckout,
					paymentMethod: paymentMethod
				}

				let host = '';
				if(process.env.NEXT_PUBLIC_ENV === 'PROD'){
					host += 'https://tesoro-backend.onrender.com';
				} else {
					host += 'http://localhost:5055';
				}
				let api = '';
				if(guestCheckout){
					api += '/api/order/guest-add';
				} else {
					api += '/api/order/add';
				}
				const response = await fetch(`${host}${api}`, {
					method: 'POST',
					body: JSON.stringify(orderDetails),
					headers: {
						'Content-Type': 'application/json',
						'auth': Cookies.get('auth_token')??''
					}
				})
				// console.log("API Response: ");
				const data = await response.json();
				console.log('response from failed requests = ', data)
				if(data.error){
					if(data.message !== undefined){
						console.log(data)
						toast(data.message, {
							type: "error"
						})
						return false;
					}
				} else {
					toast(data.message, {
						type: "success"
					})
				}
				// console.log(data.order);
				return data.order;
			}
			
			submitForm();
			

		} catch (error: any) {
			toast(`${error.message}`, {
				type: "error"
			})
			console.log("Error Creating Order: ")
			console.log(error)
		}
	}

	useEffect(()=>{
		if(Cookies.get('auth_token') !== undefined){
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [isLoggedIn, Cookies.get('auth_token')])

	return (
		<>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{t("text-shipping-address") as string}
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full mx-auto flex flex-col justify-center "
				noValidate
			>
				<div className="flex flex-col space-y-4 lg:space-y-5">
					{!isLoggedIn && (
						<div>
							<div className="relative flex items-center">
								<CheckBox label="Guest Checkout" onChange={handleGuestCheckout} />
							</div>
						</div>
					)}
					
					<div className="mt-4">
					<span className="text-lg font-medium text-heading">Payment Method</span>
					<div className="mt-2 flex flex-col">
						<label className="inline-flex items-center">
						<input 
							type="radio" 
							className="form-radio h-5 w-5 text-primary" 
							name="paymentMethod" 
							value="cod" 
							onChange={e => setPaymentMethod(e.target.value)}
						/>
						<span className="ml-2 text-sm text-body">Cash on Delivery [Cod Charges Rs 50/- extra]</span>
						</label>
						<label className="inline-flex items-center mt-3">
						<input 
							type="radio" 
							className="form-radio h-5 w-5 text-primary" 
							name="paymentMethod" 
							value="online" 
							onChange={e => setPaymentMethod(e.target.value)}
						/>
						<span className="ml-2 text-sm text-body">Online Payment</span>
						</label>
					</div>
					</div>
					
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							labelKey="forms:label-first-name"
							{...register("firstName", {
								required: "forms:first-name-required",
							})}
							errorKey={errors.firstName?.message}
							variant="solid"
							className="w-full lg:w-1/2 "
						/>
						<Input
							labelKey="forms:label-last-name"
							{...register("lastName", {
								required: "forms:last-name-required",
							})}
							errorKey={errors.lastName?.message}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
						/>
					</div>
					<Input
						labelKey="forms:label-address"
						{...register("address", {
							required: "forms:address-required",
						})}
						errorKey={errors.address?.message}
						variant="solid"
					/>
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							type="tel"
							labelKey="forms:label-phone"
							{...register("phone", {
								required: "forms:phone-required",
							})}
							errorKey={errors.phone?.message}
							variant="solid"
							className="w-full lg:w-1/2 "
						/>

						<Input
							type="email"
							labelKey="forms:label-email-star"
							{...register("email", {
								required: "forms:email-required",
								pattern: {
									value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
									message: "forms:email-error",
								},
							})}
							errorKey={errors.email?.message}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
						/>
					</div>
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							labelKey="forms:label-city"
							{...register("city")}
							variant="solid"
							className="w-full lg:w-1/2 "
						/>

						<Input
							labelKey="State"
							{...register("state")}
							variant="solid"
							className="w-full lg:w-1/2 "
						/>


						<Input
							labelKey="forms:label-postcode"
							{...register("zipCode")}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
						/>
					</div>
					<div className="relative flex items-center ">
						<CheckBox labelKey="forms:label-save-information" />
					</div>
					<TextArea
						labelKey="forms:label-order-notes"
						{...register("note")}
						placeholderKey="forms:placeholder-order-notes"
						className="relative pt-3 xl:pt-6"
					/>
					<div className="flex w-full">
						<Button
							className="w-full sm:w-auto"
							loading={isLoading}
							disabled={isLoading}
						>
							{t("Pay & Place Order") as string}
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
