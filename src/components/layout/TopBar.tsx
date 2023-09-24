import React from 'react'
// import Marquee from "react-fast-marquee";

function TopBar() {
  return (
    <div className='h-7 w-full sticky top-0 left-0 bg-[#FFE583]' 
      style={{
        // backgroundColor: '#7066e0', 
        zIndex: 50}}
    >
      <h1 className='font-bold text-md h-7' style={{color: '#000'}}>
        {/* <Marquee className="h-7"> Free shipping on all orders.{" "}<a href="/collection/sale">Shop Now</a></Marquee> */}
        <div className="h-7 text-center font-josphine"> Free shipping on all orders.{" "}<a href="/collection/sale">Shop Now</a></div>

      </h1>
    </div>
  )
}

export default TopBar;