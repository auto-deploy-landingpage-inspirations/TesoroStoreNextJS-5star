import React from 'react'
import Image from "next/image"

const CategoryLiner = () => {
  return (
    <div className='grid grid-cols-5 gap-1 bg-pink-100 font-josephine rounded-md px-5 py-10 drop-shadow-lg'>
        <div className='col-span-2 text-center grid grid-cols-3'>
            <img className='rounded-full w-[80%] col-span-1 mx-10 drop-shadow-md' src={"/assets/images/categories/category.jpg"} />
            <div className='col-span-2 px-10 mt-6'>
              <h1 className='text-4xl text-gray-800'>Home Decor</h1>
              <p className='text-xl text-gray-700 italic overflow-visible'>Unveiling Your Dream Haven</p>
            </div>
        </div>
        <div className='col-span-3'>
            <p className='justify-center text-center text-lg'>
            Elevate your space with a touch of magic! Dive into our Home Decor wonderland and discover treasures that turn houses into uniquely charming homes. From cozy cushions to awe-inspiring wall art, find pieces that resonate with your style and personality. Let your living space tell your story, one decor piece at a time.
            </p>
        </div>
    </div>
  )
}
export default CategoryLiner;