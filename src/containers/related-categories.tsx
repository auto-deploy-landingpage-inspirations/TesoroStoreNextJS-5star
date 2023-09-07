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
    <div className='flex items-center my-10'>
        <h1>You may also like: </h1>
        <div>
            <ul className='flex'>
                {data.map((item, index:number) => (
                    <li key={index} className='border-indigo-500 ml-5  py-1 px-2 text-white hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-500 cursor-pointer' style={{ borderRadius: '20px', border: '0.5px indigo solid'}}>
                        <p className='text-indigo-500 hover:text-white'>
                            {item}
                        </p>
                    </li>
                ))}
                
            </ul>
        </div>
    </div>
  )
}
