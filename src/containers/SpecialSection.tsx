import React from 'react'

export default function SpecialSection() {
  return (
    <div className='mb-20 grid lg:grid-cols-4 md:grid-cols-1 gap-4 mt-10 drop-shadow-lg bg-gradient-special-section' 
        style={{borderRadius: '20px'}}
    >   
        <h2 className='col-span-4 text-center text-xl font-bold text-white pt-10 -mb-5'>
            Featured Products
        </h2>
        <div className='ml-10'>
            <img className='drop-shadow-2xl rounded-xl' src="/assets/images/instagram/4.jpg" alt="" style={{ transform: 'translateY(15%)'}} />
        </div>
        <div className=''>
            <img className='drop-shadow-2xl rounded-xl' src="/assets/images/instagram/4.jpg" alt="" style={{ transform: 'translateY(15%)'}} />
        </div>
        <div className='-ml-8'>
            <img className='drop-shadow-2xl rounded-xl' src="/assets/images/instagram/4.jpg" alt="" style={{ transform: 'translateY(15%)'}} />
        </div>
        {/* <div></div> */}
        <div className='mt-10 -ml-10' style={{width: '90%'}}>
            <h1 className='text-xl font-semibold text-white'>Top Rated Gifts From Tesoro</h1>
            <p className='text-sm text-white mt-5 mb-10'>
                On the hunt for a present they're guaranteed to love? Enter our top-rated gifts – all given the seal of approval by our customers. From personalised jewellery to foodie treats, there's epic stuff for all your fave people.
            </p>
            <p className='pt-5 mt-10'>
                <a href="" className='underline text-sm font-semibold text-white hover:text-gray-350'>Shop Top Rated Gifts</a>
            </p>
        </div>
    </div>
  )
}
