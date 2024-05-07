// import CollectionCard from "@components/common/collection-card";

import Image from "next/image";
import Link from "@components/ui/link";
import { useFoundersPick } from "@framework/homepage/get-founders-pick";

// const data = [
// 	{
// 		id: 1,
// 		slug: "/search",
// 		image: "/assets/images/new-images/founder-pick.png",
// 		title: "Mr. Virat Kohli",
// 		description: "Meet our featured artist and check their exclusive collection at Tesoro Store",
// 	},
// 	{
// 		id: 2,
// 		slug: "/search",
// 		image: "/assets/images/new-images/founders-pick-2.png",
// 		title: "Monthly Featured",
// 		description: "Meet our Artist/Entrepreneur of the Month",
// 	},
// 	{
// 		id: 3,
// 		slug: "/search",
// 		image: "/assets/images/new-images/founders-pick-2.png",
// 		title: "Virat Kohli",
// 		description: "Meet our featured entrepreneur and check their exclusive collection at Tesoro Store",
// 	},
// ];

interface Props {
	className?: string; 
}

const CollectionBlockMobile: React.FC<Props> = ({
	className = "for-mobile mb-12 md:mb-14 xl:mb-16 pb-0.5 lg:pt-1 xl:pt-0",
}) => {
	const {data, error, isLoading} = useFoundersPick();
	if(isLoading){
		return <>Loading...</>
	}
	if(error){
		return <>Error Loading!</>
	}

 	return (
		<div
			className={`${className} for-mobile  bg-[#ffdde3] w-[100vw] -translate-x-4 md:-translate-x-8 2xl:-translate-x-16 overflow-hidden`}
			// style={{backgroundImage: "url(/assets/images/founderspick/banner-main-mobile.jpg)", backgroundSize: '100% 100%'}}
		>
            
			<img src="/assets/images/founderspick/banner-main-mobile.jpg" alt="" className="relative top-0 left-0 w-[60%] m-auto " />

            <img src="/assets/images/founderspick/diamond.png" className="absolute bottom-3 left-0 max-w-[20vw] rotate-45" alt="" />
            <img src="/assets/images/founderspick/diamond.png" className="absolute bottom-[55%] right-0 max-w-[20vw] rotate-[-25deg]" alt="" />

            <img src="/assets/images/founderspick/star.png" className="absolute left-[70%] top-[30%] max-w-[10vw] " alt="" />
            <img src="/assets/images/founderspick/star.png" className="absolute left-[60%] top-[25%] max-w-[10vw] " alt="" />
            <img src="/assets/images/founderspick/star.png" className="absolute left-[65%] top-[35%] max-w-[7vw] " alt="" />

            <img src="/assets/images/founderspick/star.png" className="absolute left-[35%] bottom-[8%] max-w-[10vw] " alt="" />
            <img src="/assets/images/founderspick/star.png" className="absolute left-[25%] bottom-[12%] max-w-[10vw] " alt="" />
            <img src="/assets/images/founderspick/star.png" className="absolute left-[20%] bottom-[5%] max-w-[7vw] " alt="" />

            
			<div className="relative grid grid-cols-2 gap-2 lg:gap-7 pl-[2vw] px-[2.5vw] my-5 ">

				{data?.productRef.slice(0, 2)?.map((item, index) => (
                    <Link key={index} href={`/products/${item.slug}`} className="group text-center flex flex-col justify-between sm:even:flex-col-reverse even:mt-16 odd:mb-16 sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden sm:pb-0"> 
                        <Image
                            src={item.image[0] ?? "/assets/placeholder/collection.svg"}
                            alt={item.title.en || "thumbnail"}
                            width={200}
                            height={200}
                            className="bg-gray-300 w-[40%] object-cover transition duration-200 ease-in-out group-hover:opacity-90"
                        />
                    </Link>
				))}
			</div>

			{/* <Fade> */}
				
			{/* </Fade> */}
			{/* <img src="/assets/images/new-images/diamond_output.gif" className="absolute top-0 right-10 h-[90%]" alt="" /> */}
			{/* <img src="/assets/images/new-images/diamond_output.gif" className="absolute top-0 right-10 h-[90%]" alt="" /> */}
		</div>
	);
};

export default CollectionBlockMobile;
