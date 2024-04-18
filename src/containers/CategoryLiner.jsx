import React, { useEffect } from 'react'
import Image from "next/image"
const { useCategoriesQuery } = require("@framework/product/get-category");
import { useRouter } from "next/router";

const CategoryLiner = (category) => {
  const {
		query
	} = useRouter();
  const router = useRouter();
  const [slug, setSlug] = React.useState(query.slug);
	
	const { data, isLoading, error} = useCategoriesQuery(slug);
  
  React.useEffect(() => {
    console.log("Slug is: ", query.slug)
    setSlug(query.slug)
  }, [query.slug])


  if(error){
    console.log("Redirecting to 404")
    router.push('/404')
  }
  return (
    <>
    <div className='grid grid-cols-5 gap-1 bg-pink-100 font-josephine rounded-md px-5 py-10 drop-shadow-lg for-desktop'>
        <div className='col-span-2 text-center grid grid-cols-3'>
            <img className='rounded-full w-[80%] col-span-1 mx-10 drop-shadow-md' src={isLoading? "/assets/images/categories/category.jpg": data[0].icon} />
            <div className='col-span-2 px-10 mt-6'>
              <h1 className='text-4xl text-gray-800'>{isLoading?(<>Loading...</>): data[0].name.en }</h1>
              <p className='text-xl text-gray-700 italic overflow-visible'>{isLoading? (<>Loading...</>): data[0].tagline}</p>
            </div>
        </div>
        <div className='col-span-3'>
            <p className='justify-center text-center text-lg'>
            {isLoading? (<>Loading...</>): data[0].description.en }
            </p>
        </div>
    </div>

    <div className='bg-pink-100 font-josephine rounded-md px-5 py-10 drop-shadow-lg for-mobile'>
        <div className='text-center flex justify-center'>
            <img className='rounded-full w-[60%] mx-10 drop-shadow-md' src={isLoading? "/assets/images/categories/category.jpg": (data[0].icon)} />
        </div>
          <div className='col-span-2 px-10 mt-6 justify-center text-center w-full'>
            <h1 className='text-3xl text-gray-800'>{isLoading?(<>Loading...</>): data[0].name.en }</h1>
            <p className='text-lg text-gray-700 italic overflow-visible'>{isLoading? (<>Loading...</>): data[0].tagline}</p>
          </div>
        <div className='mt-5'>
            <p className='justify-center text-center text-lg'>
            {isLoading? (<>Loading...</>): data[0].description.en }
            </p>
        </div>
    </div>
    </>
    
  )
}
export default CategoryLiner;