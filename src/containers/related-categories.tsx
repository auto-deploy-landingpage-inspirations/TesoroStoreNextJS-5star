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
    <div className='flex items-center mt-4 mb-10'>
        <h1>You may also like: </h1>
        <div>
            <ul className='flex'>
                {data.map((item, index:number) => (
                    <li key={index} className='mx-1 items-center h-8 px-3 bg-indigo-100 border-2 border-indigo-500 rounded-full hover:bg-indigo-200 cursor-pointer' >
                        <span className="text-indigo-500 text-xs font-normal">{item}</span>
                    </li>
                ))}
                
            </ul>
        </div>
    </div>
  )
}
