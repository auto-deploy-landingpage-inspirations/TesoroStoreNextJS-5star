import React from 'react'
import Layout from "@components/layout/layout";
import Container from "@components/ui/container";
// import { Fade, Wobble, Animation } from 'react-reveal';

export default function AboutUs() {
  return (
    <><Container>
        <div className='mx-auto my-[15vh] bg-indigo-200 grid grid-cols-2 w-full h-[30vh] rounded-md drop-shadow-md'>
            <div className=''>
                <h1 className='text-center justify-center mt-20  text-black items-center flex text-4xl font-bold'>About Us</h1>
            </div>
            <div className='flex justify-center'>
                <img src="/assets/images/new-images/DSC_0066.jpeg"  className='w-[50%] my-auto rounded-md drop-shadow-md' alt="" />
            </div>
        </div>
        
        </Container>
    </>
  )
}


AboutUs.Layout = Layout