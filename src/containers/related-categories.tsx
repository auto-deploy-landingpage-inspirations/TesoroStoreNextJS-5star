import React from 'react'

const data:string[] = [
    'home decor',
    'planters',
    'stationary',
    'Customized Frames',
    'Pen Stand',
    'DIY Giftbox'
]

export default function RelatedCategories() {
  return (
    <div className='items-center mt-4 mb-10'>
        <h1 className='mb-2 text-xs text-black'>You may also like: </h1>
        <div>
            <ul className='flex max-w-screen overflow-auto scrollbar-hide'>
                {data.map((item, index:number) => (
                    <li key={index} className='mx-[0.4rem]  items-center whitespace-nowrap inline-flex px-3 bg-indigo-100 border-2 border-indigo-500 rounded-full hover:bg-indigo-200 cursor-pointer' >
                        <span className="text-indigo-500 text-xs font-normal">{item}</span>
                    </li>
                ))}
                
            </ul>
        </div>
    </div>
  )
}
