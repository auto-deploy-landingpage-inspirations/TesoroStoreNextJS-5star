// import { useOrderQuery } from "@framework/order/get-order";
import usePrice from "@framework/product/use-price";
import { OrderedProduct } from "@framework/types";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useGuestOrderQuery } from "@framework/order/get-guest-order";
import { toast } from "react-toastify";
import { useOrderQuery } from "@framework/order/get-order";
const OrderItemCard = ({ product }: { product: OrderedProduct }) => {
	const { price: itemOriginalTotal } = usePrice({
		amount: product.originalPrice * product.quantity,
		currencyCode: "INR",
	});
	const { price: itemTotal } = usePrice({
		amount: product.price * product.quantity,
		currencyCode: "INR",
	});
	return (
		<tr
			className="border-b font-normal border-gray-300 last:border-b-0"
			key={product.id}
		>
			<td className="p-4">
				{product.productName} * {product.quantity}
			</td>
			<td className="p-4"><span style={{fontWeight: 'bolder'}}>{itemTotal}</span>  <span style={{textDecoration: 'line-through'}}>  {itemOriginalTotal}  </span></td>
		</tr>
	);
};
const OrderDetails: React.FC<{ className?: string }> = ({
	className = "pt-10 lg:pt-12",
}) => {
	const {
		query: { id },
	} = useRouter();
	const { t } = useTranslation("common");
	const {pathname} = useRouter();
	const base = pathname.split("/");
	
	let order, isLoading, error:any;
	if(base[1] === "guest-order"){
		console.log("Guest Order")
		const result = useGuestOrderQuery(id?.toString()!);
		console.log(result)
		error = result.error;
		order = result.data;
		isLoading = result.isLoading;
	} else {
		console.log("Logged In User Order")
		const result = useOrderQuery(id?.toString()!);
		order = result.data;
		error = result.error;
		isLoading = result.isLoading;
	}
	if(error){
		// console.log(order.error.response.error)
		toast(`${error.response.data.error}`, {
			type: "error",
		})
	}
	// const products = order?.cart;
	// const paymentDetails = order?.ccavData;
	
	const { price: subtotal } = usePrice(
		order && {
			amount: order.subTotal,
			currencyCode: "INR",
		}
	);
	const { price: total } = usePrice(
		order && {
			amount: order.total,
			currencyCode: "INR",
		}
	);
	const { price: shipping } = usePrice(
		order && {
			amount: order?.shipping,
			currencyCode: "INR",
		}
	);
	
	const { price: discount } = usePrice(
		order && {
			amount: order?.discount,
			currencyCode: "INR",
		}
	);
	
	if (isLoading) return <p>Loading...</p>;
	return (
		<div className={className}>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{t("text-order-details") as string}:
			</h2>
			<table className="w-full text-heading font-semibold text-sm lg:text-base">
				<thead>
					<tr>
						<th className="bg-gray-150 p-4 text-start first:rounded-ts-md w-1/2">
							{t("text-product")as string}
						</th>
						<th className="bg-gray-150 p-4 text-start last:rounded-te-md w-1/2">
							{t("text-total")as string}
						</th>
					</tr>
				</thead>
				<tbody>
					{order?.cart.map((product:any, index:number) => (
						<OrderItemCard key={index} product={product} />
					))}
				</tbody>
				<tfoot>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">{t("text-sub-total")as string}:</td>
						<td className="p-4">{total}  <span style={{textDecoration: 'line-through'}}>  {subtotal}</span></td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">Order Status:</td>
						<td className="p-4">{order?.status}</td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">{t("text-shipping")as string}:</td>
						<td className="p-4">
							{shipping??"0"}
							<span className="text-[13px] font-normal ps-1.5 inline-block">
								via Flat rate
							</span>
						</td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">Shipping Address:</td>
						<td className="p-4">{order?.user_info.name}: {order?.user_info.address}, {order?.user_info.city}, {order?.user_info.country}, {order?.user_info.zipCode} </td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">Contact:</td>
						<td className="p-4">{order?.user_info.contact}</td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">{t("text-payment-method")as string}:</td>
						<td className="p-4">{order?.paymentMethod}</td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">Discount Amount:</td>
						<td className="p-4">{discount}</td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">{t("text-total")as string}:</td>
						<td className="p-4">{total}</td>
					</tr>
					<tr className="odd:bg-gray-150">
						<td className="p-4 italic">{t("text-note")as string}:</td>
						<td className="p-4">New Order</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default OrderDetails;
