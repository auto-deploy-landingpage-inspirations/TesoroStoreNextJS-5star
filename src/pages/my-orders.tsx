import Layout from "@components/layout/layout"
import Container from "@components/ui/container";
import { useMyOrdersQuery } from "@framework/order/get-all-orders";
// import { useGuestOrderQuery } from "@framework/order/get-guest-order";
import axios from "axios";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface statusProps {
    [key: string]: number
}

const statuses: statusProps = {
    'PaymentPending': 10,
    'Confirmed': 20,
    'Processing': 25,
    'ReadyToShip': 40,
    'PickupInitiated': 45,
    'Shipped': 60,
    'Delivered': 100,
    'Cancelled': 0,
}

export default function OrderDetails () {
    const {data, error, isLoading} = useMyOrdersQuery({});
    const orders = data?.orders;
    if(error){
        console.log("Error: ", error)
        toast(`${error}`, {
            type: "error",
        })
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(data)
    if(!isLoading)
    return (
        <>
        <div className="mt-[20vh] w-[80vw] ml-[10vw]">
            <Container>
                <h1 className="text-2xl text-black font-bold mt-10 mb-1">Order History</h1>
                <p className="text-md text-gray-900 m-0 p-0 mb-5">Check the status of recent orders, manage returns, and discover similar products.</p>
                
                {Array.isArray(orders) && orders.length > 0 && orders.map((order: any) => {
                    return (
                        <div className="mb-10">
                            <div className="flex w-full justify-around rounded-md py-5 mt-5" 
                                style={{
                                    border: '1px solid #e5e7eb',
                                }}
                            >
                                <div className="flex flex-col justify-around items-start">
                                    <p className="font-bold text-sm p-0 m-0">
                                        Order number
                                    </p>
                                    <p className="text-sm">#{order?.orderId}</p>
                                    {/* <span className="ml-2 text-[#6366f1] text-sm cursor-pointer">View Invoice</span> */}
                                </div>
                                <div className="flex flex-col justify-around items-start">
                                    <p className="font-semibold text-sm p-0 m-0">
                                        Date Placed
                                    </p>
                                    <p className="text-sm"> {order?.createdAt && !isNaN(new Date(order.createdAt).valueOf()) ? new Date(order.createdAt).toDateString() : 'Invalid Date'}</p>
                                </div>
                                <div className="flex flex-col justify-around items-start">
                                    <p className="font-semibold text-sm p-0 m-0">
                                        Payment Method
                                    </p>
                                    <p className="text-sm p-0 m-0">{order?.paymentMethod === "cod"? "COD": "Prepaid"}</p>
                                </div>
                                <div className="flex flex-col justify-around items-start">
                                    <p className="font-semibold text-sm p-0 m-0">
                                        Total Amount
                                    </p>
                                    <p className="text-sm p-0 m-0 font-bold text-blue-500">₹{order?.total}</p>
                                </div>
                                <div className="flex">
                                    <button 
                                        className="px-2 rounded-md font-semibold"
                                        style={{
                                            border: '1px solid #e5e7eb',
                                            height: '45px'
                                        }}
                                    >   
                                        <Link
                                            href={`/my-account/orders/${order?.orderId}`}
                                        >
                                            View Order
                                        </Link>
                                    </button>
                                    <button
                                        className="px-2 rounded-md font-semibold"
                                        style={{
                                            border: '1px solid #e5e7eb',
                                            height: '45px',
                                            marginLeft: '5px'
                                        }}
                                    >
                                        View Invoice
                                    </button>
                                </div>
                            </div>
                            {order?.cart !== undefined && order?.cart.map((product:any) => {
                                return (
                                    <ProductBox product={product} customer={order.user_info} sellerStatus={order?.sellerStatus} />
                                )
                            })}
                        </div>
                    )
                })}
            </Container>
        </div>
        </>
    )
}

const ProductBox = ({product, customer, sellerStatus}: any) => {

    const [productThumbnail, setProductThumbnail] = useState<string>("");
    console.log(product)
    const text_status = `w-[${statuses[sellerStatus?.[product?.store]?.status]}%]`;
    console.log(text_status)
    // console.log(text_status)
    useEffect(() => {
        const getThumbnailImageById = async(id: string) => {
            const url = `https://tesoro-backend.onrender.com/api/products/thumbnail/${id}`;
            const response = await axios.get(url);
            console.log(response.data)
            setProductThumbnail(response.data);
        }
        getThumbnailImageById(product.id);
        
    }, [])
    return (
        <>
        <div className="w-full rounded-md p-3 flex flex-col"
            style={{
                border: '1px solid #e5e7eb',
            }}
            key={product.id}
        >
            <div
                className="flex w-full justify-evenly items-start px-4 py-2"
            >
                <div
                    className="m-4 rounded-md"
                    style={{
                        backgroundImage: `url(${productThumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '128px',
                        height: '128px',
                    }}
                >
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h1 className="text-gray-900 font-bold text-lg">{product.productName}</h1>
                    <p className="text-gray-700 text-md p-0 m-0">SKU: {product.sku}</p>
                    <p className="text-gray-700 text-sm p-0 m-0">₹{product.price}/- <span style={{textDecoration: 'line-through'}} className="text-sm">₹{product.originalPrice}/-</span></p>
                    <p className="text-gray-700 text-sm p-0 m-0">Quantity: {product.quantity} unit.</p>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h1 className="font-bold text-sm">Delivery Address</h1>
                    <p className="text-xs">
                        {customer.name}
                        <br/>
                        {customer.address}, <br/>
                        {customer.city}, {customer.state}, {customer.zipCode}
                    </p>
                </div>
                <div className="flex flex-col justify-start items-start">
                    <h1 className="font-bold text-sm">Shipping Updates</h1>
                    <p className="text-xs">
                        {customer.email.substring(0,1)}****{customer.email.split('@')[1]}
                        <br/>
                        ******{customer.contact.toString().substring(6,)}
                    </p>
                </div>
            </div>
            <div 
                style={{
                    borderTop: '1px solid #e5e7eb',
                }}
            >
                <p className="my-4 ml-[2.5%] text-sm font-semibold">
                    Order Status: {" "}
                    {sellerStatus[product.store].status ==="PaymentPending" && <p className=" text-green-600 cursor-pointer inline-block py-2">Order Recieved</p>}
                    {sellerStatus[product.store].status ==="Confirmed" && <p className=" text-blue-600 cursor-pointer inline-block py-2">Order Confirmed</p>}
                    {sellerStatus[product.store].status ==="Processing" && <p className=" text-yellow-600 cursor-pointer inline-block py-2">Processing</p>}
                    {sellerStatus[product.store].status ==="ReadyToShip" && <p className=" text-blue-500 cursor-pointer inline-block py-2">Ready To Ship</p>}
                    {sellerStatus[product.store].status ==="PickupInitiated" && <p className=" text-green-600 cursor-pointer inline-block py-2">Pickup Initiated</p>}
                    {sellerStatus[product.store].status ==="Shipped" && <p className=" text-green-600 cursor-pointer inline-block py-2">Shipped</p>}
                    {sellerStatus[product.store].status ==="Delivered" && <p className=" text-green-600 border-2 border-green-500 rounded-lg p-2 cursor-pointer inline-block py-2">Delivered</p>}
                    <span className="text-xs ml-4 text-blue-500 bg-blue-200 border-2 border-blue-500 px-1 rounded-lg cursor-pointer"> 
                        <Link href={`https://84991.ordrtrak.live/${sellerStatus[product.store].awb}`} passHref>
                            XpressBees Tracking
                        </Link>
                    </span>
                </p>
            </div>
        </div>
        </>
    )
}

OrderDetails.Layout = Layout;

export const getStaticProps: GetStaticProps = async({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, [
                "common",
                "forms",
                "menu",
                "footer",
            ])),
        }
    }
}