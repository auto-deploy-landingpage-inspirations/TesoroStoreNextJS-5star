import React from 'react'
// import ''
import {Fade} from 'react-reveal'
import {Zoom} from 'react-reveal'


interface ShowcaseInterface{
    img: string,
    name: string,
    price: string
}

const showCaseProducts:ShowcaseInterface[] = [
    {
        img: '/assets/images/smallBiz/product-1.jpg',
        name:'Raspberry + Champagne Marshmallows',
        price: '500'
    },
    {
        img: '/assets/images/smallBiz/product-2.jpg',
        name:'Raspberry + Champagne Marshmallows',
        price: '600'
    },
    {
        img: '/assets/images/smallBiz/product-3.jpg',
        name:'Raspberry + Champagne Marshmallows',
        price: '1500'
    },
    {
        img: '/assets/images/new-images/01f1cee7-b377-4689-98a3-a6f3b0606acf.jpg',
        name: 'Raspberry + Champagne Marshmallows',
        price: '3000'
    },
    {
        img: '/assets/images/new-images/17e765f2-58a0-47cd-ab7d-1d06ff512611.jpg',
        name: 'Raspberry + Champagne Marshmallows',
        price: '3000'
    }
]


export default function BusinessMagic() {
  return (
    <div className='w-full mb-10 pb-10'>
        <Fade bottom>
        <h2 className='text-center font-bold text-3xl pb-3 text-[black]'>
            Small Biz Stars
        </h2>
        </Fade>
        <Fade bottom delay={500}>
            <h3 className='text-center font-semibold mb-20 text-lg '>
                Our marketplace champions over 5,000 small businesses – including these ones…
            </h3>
        </Fade>
        <div className='bg-[#d4d1f5]' style={{borderRadius: '20px', marginTop: '20px', padding: '0px 20px 20px 20px'}}>
            <div className='grid lg:grid-cols-9 md:grid-cols-5 gap-8 mt-10' style={{background: 'transparent'}}>
                
                <Zoom>
                    <div className='col-span-3'>
                        {/* <div className='w-32 h-full'></div> */}
                        <img className='drop-shadow-2xl rounded-xl' src="/assets/images/smallBiz/main.png" alt="" style={{ transform: 'translateY(-15%)', aspectRatio: '1', maxHeight: '60vh'}} />
                    </div>
                </Zoom>
                
                <div className='pt-5 col-span-3 '>
                    <h2 className='font-bold text-xl pb-5 text-gray-700 text-center cursor-pointer hover-underline-animation'>
                        Manvi & Tanisha | Quoso Home
                    </h2>
                    <p className='pb-10 font-light text-justify text-gray-600 pt-10'>
                        Manvi & Tanisha run the beautifully homegrown decor brand Quoso which is a medley of quirkiness and sophistication, offering truly one of a kind range of products that would give your home a distinct personality. Extremely passionate about home interiors, they are set to win hearts with their fantastic collection!
                    </p>
                    <h2 className='font-bold relative bottom-0 pt-5 text-lg pb-5 text-center cursor-pointer align-bottom w-full'> 
                        <a className='underline font-bold text-lg text-gray-600' href="">Shop Their Collection</a>
                    </h2>
                    
                </div>
                <Zoom>
                    <div className='col-span-3'>
                        <img className='drop-shadow-2xl rounded-xl' height={'17vh'} src="/assets/images/smallBiz/product-3.jpg" alt="" style={{ transform: 'translateY(-15%)', aspectRatio: '1', maxHeight: '60vh'}}/>   
                    </div>
                </Zoom>
            
            </div>
            <div className='flex w-full'>
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
                {/* <Fade bottom>
                    <div className='w-1/6 ml-10 hover:drop-shadow-md bg-[#c89634] cursor-pointer  max-h-full flex items-center justify-center' style={{aspectRatio: '1/1', borderRadius: '10px'}}>
                        <div className='items-center flex-col justify-center'>
                            <h2 className='text-2xl items-center pt-5 h-1/3 font-bold text-center text-gray-200'>Explore More</h2>
                            <svg className='p-0 m-auto' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="#7b21b8" d="m15.06 5.283l5.657 5.657a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 0 1-2.122-2.122l3.096-3.096H4.5a1.5 1.5 0 0 1 0-3h11.535L12.94 7.404a1.5 1.5 0 0 1 2.122-2.121Z"/></g></svg>
                            
                        </div>
                        <img className='drop-shadow-xl' src="/assets/images/smallBiz/product-3.jpg" alt="" style={{borderRadius: '10px'}}/>
                    </div>
                </Fade> */}
                {/* <div className='w-1/6 ml-4 hover:drop-shadow-lg cursor-pointer'>
                    <div className=' bg-white h-48 w-48 drop-shadow-md items-center justify-center' style={{borderRadius: '50%', aspectRatio: '1', width: ''}}>
                        <p></p>
                    </div>
                </div> */}
                <div className='w-1/6'></div>
                
            </div>
        </div>
    </div>
  )
}
