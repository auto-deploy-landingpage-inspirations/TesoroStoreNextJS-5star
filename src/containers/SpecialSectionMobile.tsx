import Carousel from '@components/ui/carousel/carousel'
import React from 'react'
import {Fade} from 'react-reveal'
import { SwiperSlide } from "swiper/react";


const breakpoints = {
	"1025": {
		slidesPerView: 3,
		spaceBetween: 28,
	},
	"480": {
		slidesPerView: 1,
		spaceBetween: 20,
	},
	"0": {
		slidesPerView: 1,
		spaceBetween: 12,
	},
};

const data = [
    {
        title: 'Blog #1',
        subtitle: 'When the market ...',
        createdDate: '6th Sept',
        imgLink: '/assets/images/new-images/IMG_8488.jpg'
    },
    {
        title: 'Blog #2',
        subtitle: 'How we are supporting ...',
        createdDate: '7th Sept',
        imgLink: '/assets/images/new-images/IMG_8541.jpg'
    },
    // {
    //     title: 'Blog #1',
    //     subtitle: 'When the market ...',
    //     createdDate: '6th Sept',
    //     imgLink: '/assets/images/new-images/IMG_8488.jpg'
    // }
    // {
    //     title: 'Blog #3',
    //     subtitle: 'When the market ...',
    //     createdDate: '6th Sept',
    //     imgLink: '/assets/images/instagram/4.jpg'
    // },
    // {
    //     title: 'Blog #4',
    //     subtitle: 'How we are supporting ...',
    //     createdDate: '7th Sept',
    //     imgLink: '/assets/images/instagram/4.jpg'
    // }
]

export default function SpecialSectionMobile() {
  return (
    <>
    <Fade bottom>
    {/* 60a5fa */}
        <div className='for-mobile grid grid-cols-1 lg:grid-cols-4 px-4 my-4 drop-shadow-lg bg-[#F4769F]'  
            style={{borderRadius: '20px'}}
        >   
            <div className='col-span-4 text-center py-5 text-[white] text-4xl font-bold w-full'
					style={{fontFamily: 'Van'}}>
                Blogs
            </div>
            <div className='col-span-4'>
                
            <Fade left>
                <Carousel breakpoints={breakpoints} autoplay={{ delay: 3000}}>
                    {data&&data.map((item, idx:number) => (
                        <SwiperSlide key={`blog-section-key-${item.title}`}>
                                
                                <div className='col-span-4 my-2 pb-5 lg:col-span-2 rounded-xl hover:drop-shadow-xl drop-shadow-lg grid grid-cols-2' key={idx} style={{
                                    // background: 'rgba(255, 165, 0, 0.8)',
                                    background: 'rgba(255, 255, 255, 1)'

                                }}>
                                    <div style={{borderRadius: '12px'}}>
                                        <img className='p-5 hover:drop-shadow-lg -translate-x-3' src={item.imgLink} style={{borderRadius: '12%'}} />
                                    </div>
                                    <div className='py-2 rounded-xl -translate-x-5' style={{
                                        // background: 'rgba(255, 165, 0, 0.8)',

                                    }}>
                                        <p className='text-xs text-[#F6C0C9] pt-5 text-left pb-0 mb-0'>
                                            <span className='font-semibold pr-3'>{item.createdDate}</span>
                                        </p>
                                        <h2 className='font-bold text-2xl text-black text-left pb-5'
                                            style={{fontFamily: 'Hap'}}>
                                            {item.title}
                                        </h2>
                                    </div>
                                    <div className='mx-auto col-span-2 px-5'>
                                        <p className='text-justify text-sm m-auto' 
                                            style={{fontFamily: 'Hap'}}>
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam ut facere accusantium voluptatibus. Sed quibusdam, commodi rerum provident incidunt reprehenderit animi nam ...
                                        </p>
                                        <div className='w-full flex justify-center'>
                                            <button className='rounded-3xl hover:drop-shadow-md font-bold bg-[#F6C0C9]  text-white px-3 py-1 mt-5'>Read More ...</button>
                                        </div>
                                        {/* <p className='text-bold text-sm text-black'>
                                            
                                        </p> */}
                                    </div>
                                </div>
                        </SwiperSlide>
                    ))}
                </Carousel>
                
                </Fade>
            </div>
            
            
            
            {/* <div className=''>
                <img className='drop-shadow-2xl rounded-xl' src="/assets/images/instagram/4.jpg" alt="" style={{ transform: 'translateY(15%)'}} />
            </div>
            <div className='-ml-8'>
                <img className='drop-shadow-2xl rounded-xl' src="/assets/images/instagram/4.jpg" alt="" style={{ transform: 'translateY(15%)'}} />
            </div> */}
            {/* <div></div> */}
            {/* <div className='mt-10 -ml-5' style={{width: '90%'}}>
                <h1 className='text-2xl font-semibold text-white'>Blogs</h1>
                <p className='text-sm text-white mt-5 mb-10'>
                    On the hunt for a present they're guaranteed to love? Enter our top-rated gifts – all given the seal of approval by our customers. From personalised jewellery to foodie treats, there's epic stuff for all your fave people.
                </p>
                <p className='pt-5 mt-10'>
                    <a href="" className='underline text-sm font-semibold text-white hover:text-gray-350'>Shop Top Rated Gifts</a>
                </p>
            </div> */}
        </div>
    </Fade>
    </>
  )
}
