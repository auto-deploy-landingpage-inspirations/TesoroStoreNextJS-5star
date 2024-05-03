import React from 'react'
import {Fade} from "react-reveal"
import {Zoom} from "react-reveal"
import {Reveal} from "react-reveal"



// interface ShowcaseInterface{
//     img: string,
//     name: string,
//     price: string
// }

// const showCaseProducts:ShowcaseInterface[] = [
//     {
//         img: '/assets/images/smallBiz/product-1.jpg',
//         name:'Raspberry + Champagne Marshmallows',
//         price: '500'
//     },
//     {
//         img: '/assets/images/smallBiz/product-2.jpg',
//         name:'Raspberry + Champagne Marshmallows',
//         price: '600'
//     },
//     {
//         img: '/assets/images/smallBiz/product-3.jpg',
//         name:'Raspberry + Champagne Marshmallows',
//         price: '1500'
//     },
    // {
    //     img: '/assets/images/new-images/01f1cee7-b377-4689-98a3-a6f3b0606acf.jpg',
    //     name: 'Raspberry + Champagne Marshmallows',
    //     price: '3000'
    // },
    // {
    //     img: '/assets/images/new-images/17e765f2-58a0-47cd-ab7d-1d06ff512611.jpg',
    //     name: 'Raspberry + Champagne Marshmallows',
    //     price: '3000'
    // }
// ]

const {useSmallBizStars} = require('@framework/homepage/get-small-biz')

export default function BizMagic2Mobile() {
    const {data, error, isLoading} = useSmallBizStars();
    console.log("Small Biz Stars")
    console.log(data);
    if(isLoading) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>
  return (
    <>
    <div className='w-full h-auto my-10 pb-0 text-center items-center bg-[#f3d4da] drop-shadow-md relative overflow-hidden for-mobile'>
        {/* <h3 className='absolute top-10 mt-2 left-0 z-10 w-full text-center font-semibold mb-20 text-lg '>
                Our marketplace champions over 5,000 small businesses – including these ones…
            </h3> */}
        
        <img className='top-1 mb-2 mt-5 m-auto w-[40%] z-0' src="/assets/images/smallBiz/small.jpg" alt="" />
        <div className='z-10'>
            <Fade bottom>
                <h2 className='z-10 w-full text-center text-2xl font-bold text-blue-500 drop-shadow-md mb-1' style={{fontFamily: 'Van'}}>Small Biz Stars</h2>
            </Fade>
            <Fade bottom delay={100}>
                <h2 className='text-xl font-bold' style={{fontFamily: 'Hap'}}>
                    {isLoading && data.storeDetails ? (<>Loading....</>): data.storeDetails.subtitle }
                </h2>
            </Fade>
            <Fade bottom delay={400} style={{fontFamily: 'Hap'}}>
                <p className='text-sm my-2 w-[90%] mx-auto'>
                {isLoading? (<>Loading...</>): data.storeDetails.description}
                </p>
            </Fade>
            <Zoom delay={500} style={{fontFamily: 'Hap'}}>
                <button className='text-black text-sm hover:bg-blue-400 bg-blue-300 rounded-xl py-1 px-5 drop-shadow hover:drop-shadow-xl mt-2'onClick={() => window.location.href = `${data.storeDetails.storeLink}`}
                >
                    Shop their Collection
                </button>
            </Zoom>
            <Fade bottom delay={1000}>
                <div className='flex w-full my-2 mx-auto justify-center'>
                    {isLoading? (<>Loading...</>): data.productRef.map((product: any, index: number) => {
                        return (
                            <div key={index} onClick={() => window.location.href = `/products/${product.slug}`} className='w-28 h-28 cursor-pointer rounded-xl drop-shadow-md mx-3 mt-2' style={{background: `url(${product.image[0]})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                        )
                    })}
                    {/* <div className='w-28 h-28 rounded-xl drop-shadow-md mx-3 mt-2' style={{background: `url(${showCaseProducts[0].img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                    <div className='w-28 h-28 rounded-xl drop-shadow-md mx-3 mt-2' style={{background: `url(${showCaseProducts[1].img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                    <div className='w-28 h-28 rounded-xl drop-shadow-md mx-3 mt-2' style={{background: `url(${showCaseProducts[2].img})`, backgroundPosition: 'center', backgroundSize: 'cover'}}></div> */}
                </div>
            </Fade>
        </div>
        <Reveal effect="fadeInUp">
            <div className='w-[45%] h-[100%] relative bottom-0'>
                    {/* <img className='absolute bottom-0 left-[10%] h-[60vh] z-20' src="/assets/images/smallBiz/hero.png"/> */}
            </div>
        </Reveal>
        {/* <div className='flex w-full'>
            <div className='w-1/6'></div>
            <Fade bottom>
                {showCaseProducts?.map((product, index:number) => (
                    <div key={index} className='w-1/6 hover:drop-shadow-md cursor-pointer ml-10'>
                        <img className='drop-shadow-xl' src={product.img} alt="" style={{borderRadius: '10px'}}/>
                        <p className='font-semibold text-gray-700 mt-4 mb-1 text-sm'>{product.name}</p>
                        <p className='text-lg font-normal text-gray-600'>Rs. {product.price}/-</p>
                    </div>
                ))}
            </Fade>
            </div> */}
        </div>
    {/* <div className='z-30 absolute right-0  w-[20vw] h-[40vh] border-2 border-red-600'>
        yo ho
    </div> */}
    </>
    
  )
}
