import React from 'react'
// import { Feature } from './featuresIndexPage'

export default function SectionHalf() {
  return (
    <div className='grid translate-y-8 mt-10 sm:grid-cols-1 lg:grid-cols-2 w-[98vw] max-h-[100vh] -translate-x-4 md:-translate-x-8 2xl:-translate-x-16'
        style={{border: '1px solid black'}}
    >
        <div className='h-[70vh]' style={{
            background: "url('/assets/images/new-products/frames1.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottomRightRadius: '12px'
        }}>
            {/* <h2 className='text-[blue] text-4xl align-middle items-center font-bold text-center w-1/3 m-auto'>
                With Tesoro You get to experience gifting..
            </h2> */}
        </div>
        <div className='' >
            <div className="h-full px-4 pb-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
                <h2 className="mb-6 md:mb-10 max-w-md font-sans text-3xl font-bold tracking-tight text-[orange] sm:text-4xl sm:leading-none xl:max-w-lg justify-center">
                    Shop With Mood
                </h2>
            </div>
        </div>
    </div>
  )
}
