import Layout from "@components/layout/layout"
import Container from "@components/ui/container";
import { useGuestOrderQuery } from "@framework/order/get-guest-order";
import axios from "axios";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function WriteProductReview() {
	const {
		query: { id },
	} = useRouter();
    // const {data, error, isLoading} = useGuestOrderQuery(id?.toString()!);
	const {data, error, isLoading} = useGuestOrderQuery('zVdArmmhA');
    
    if(error){
        console.log("ERror: ", error)
    }
    if(isLoading){
        return <h1>Loading...</h1>
    }

	const submitProductReview = async(e:any) => {
		e.preventDefault();

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

					<div className="mt-20 border-2 border-black rounded-md p-5 mb-10">
						<form
							onSubmit={submitProductReview}
						>
							<h1 className="text-gray-900 font-bold text-xl">Write a Review</h1>
							<div className="flex flex-col mt-5">
								<label htmlFor="rating" className="text-gray-900 font-bold text-md">Select Product to Rate</label>
								<select name="rating" id="rating" className="w-72 p-2 border border-gray-300 rounded-md mt-2">
									{data?.cart !== undefined && data?.cart.map((product:any) => {
										return (
											<ProductDropdownOption product={product} />
										)
									})}
								</select>
							</div>
							<div className="flex flex-col mt-5">
								<label htmlFor="rating" className="text-gray-900 font-bold text-md">Rating</label>
								<select name="rating" id="rating" className="w-36 p-2 border border-gray-300 rounded-md mt-2">
									<option value="1">1 Star</option>
									<option value="2">2 Star</option>
									<option value="3">3 Star</option>
									<option value="4">4 Star</option>
									<option value="5">5 Star</option>
								</select>
							</div>
							<div className="flex flex-col mt-5">
								<label htmlFor="review" className="text-gray-900 font-bold text-md">Review</label>
								<textarea name="review" id="review" className="w-full p-2 border border-gray-300 rounded-md mt-2" rows={5}></textarea>
							</div>
							{/* <div className="flex flex-col mt-5">
								<label htmlFor="review" className="text-gray-900 font-bold text-md">Review</label>
								<input type="file" name="review" id="review" className="w-36 p-2 border border-gray-300 rounded-md mt-2" />
							</div> */}
							<div className="flex flex-col mt-5">
								<button type="submit" className="bg-[#6366f1] text-white p-2 rounded-md">Submit Review</button>
							</div>
						</form>
					</div>
				</Container>

			</div>
        </>
    )
}

const ProductDropdownOption = ({product}: any) => {
	const [productThumbnail, setProductThumbnail] = useState<string>("");
    console.log(product)
    
    useEffect(() => {
        const getThumbnailImageById = async(id: string) => {
            const url = `https://tesoro-backend.onrender.com/api/products/thumbnail/${id}`;
            const response = await axios.get(url);
            console.log(response.data)
            setProductThumbnail(response.data);
        }
        getThumbnailImageById(product.id);
        
    }, []);

	return (
		<option key={product.id} id={product.id}
			style={{
				backgroundImage: `url(${productThumbnail})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				width: '128px',
				height: '128px',
			}}
		>
					{product.productName}
		</option>
	)
}
const ProductBox = ({product, customer, sellerStatus}: any) => {

    const [productThumbnail, setProductThumbnail] = useState<string>("");
    console.log(product)
    
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
        <div className="w-full rounded-md p-3 flex flex-col mb-5 border-2 border-purple-600"
            style={{
                // border: '1px solid #e5e7eb',
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
            
        </div>
        </>
    )
}

WriteProductReview.Layout = Layout;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale!, [
				"common",
				"forms",
				"menu",
				"footer",
			])),
		},
	};
};