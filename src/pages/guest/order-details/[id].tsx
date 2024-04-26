import Layout from "@components/layout/layout"
import Container from "@components/ui/container";
import { useGuestOrderQuery } from "@framework/order/get-guest-order";
import axios from "axios";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
    const {
		query: { id },
	} = useRouter();
    const {data, error, isLoading} = useGuestOrderQuery(id?.toString()!);
    
    if(error){
        console.log("ERror: ", error)
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
                <div className="flex w-full justify-between mb-5">
                    <h1 className="text-gray-900 font-bold text-2xl">Order #{data?.invoice}
                        <span className="ml-2 text-[#6366f1] text-sm cursor-pointer">View Invoice</span>
                    </h1>
                    <p className="text-sm text-gray-700 flex flex-col items-end">
                        Order Placed
                        <span className="font-bold text-sm"> {data?.createdAt && !isNaN(new Date(data.createdAt).valueOf()) ? new Date(data.createdAt).toDateString() : 'Invalid Date'}</span>
                    </p>
                </div>
                {data?.cart !== undefined && data?.cart.map((product:any) => {
                    return (
                        <ProductBox product={product} customer={data.user_info} sellerStatus={data?.sellerStatus} />
                    )
                })}
                <div className="my-5 flex justify-between items-start">
                    <div>
                        <h1 className="font-bold text-md">Payment Information</h1>
                        <p className="mt-2 mb-0 p-0 text-sm">Payment Method: {data?.paymentMethod === "cod" ? "Cash on Delivery": "Prepaid"}</p>
                        <p className="mt-1 mb-0 p-0 text-sm">Payment Status: {data?.paymentStatus ? "Paid" : "Pending"}</p>
                    </div>
                    <div className="flex flex-col w-[33%] mr-[5%]">
                        <div className="flex justify-between py-3"
                            style={{
                                borderBottom: '1px solid #e5e7eb',
                            }}
                        >
                            <p className="text-sm m-0 p-0">Subtotal</p>
                            <p className="text-sm font-semibold m-0 p-0">₹{data?.subTotal}</p>
                        </div>
                        <div className="flex justify-between py-3"
                            style={{
                                borderBottom: '1px solid #e5e7eb',
                            }}
                        >
                            <p className="text-sm m-0 p-0">Cod Charges</p>
                            <p className="text-sm font-semibold m-0 p-0">₹{data?.codCharges}</p>
                        </div>
                        <div className="flex justify-between py-3"
                            style={{
                                borderBottom: '1px solid #e5e7eb',
                            }}
                        >
                            <p className="text-sm mb-1">Discounts</p>
                            <p className="text-sm font-semibold mb-1">₹{data?.discount}</p>
                        </div>
                        <div className="flex justify-between py-3">
                            <p className="font-bold text-sm m-0 p-0">Order Total</p>
                            <p className="text-sm font-bold text-blue-500 m-0 p-0">₹{data?.total}</p>
                        </div>
                    </div>
                </div>
                
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
        <div className="w-full rounded-md p-3 flex flex-col mb-10"
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
                <div className="h-2 w-[95%] ml-[2.5%] bg-gray-500 mt-4 rounded-md">
                    <div className={`h-2 ${text_status||'w-[10%]'} bg-blue-500 rounded-md`}></div>
                </div>
                <div className="grid grid-cols-4 w-[95%] ml-[2.5%] mt-3">
                    <div className={`text-left text-sm font-bold ${statuses[sellerStatus[product.store].status] > 0 ? 'text-blue-500': ''}`}>
                        <p className="text-xs">Order Placed</p>
                    </div>
                    <div className={`text-center text-sm font-bold ${statuses[sellerStatus[product.store].status] > 30 ? 'text-blue-500': ''}`}>
                        <p className="text-xs">Processing</p>
                    </div>
                    <div className={`text-center text-sm font-bold ${statuses[sellerStatus[product.store].status] > 55 ? 'text-blue-500': ''}`}>
                        <p className="text-xs">Shipped</p>
                    </div>
                    <div className={`text-right text-sm font-bold ${statuses[sellerStatus[product.store].status] > 90 ? 'text-blue-500': ''}`}>
                        <p className="text-xs">Delivered</p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

OrderDetails.Layout = Layout;

export const getServerSideProps: GetServerSideProps = async({locale}) => {
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