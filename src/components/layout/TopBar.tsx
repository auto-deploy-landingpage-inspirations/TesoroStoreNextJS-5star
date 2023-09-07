import React from 'react'

function TopBar() {
  return (
    <div className='h-7 w-full sticky top-0 left-0 bg-gradient-topbar ' 
      style={{
        // backgroundColor: '#7066e0', 
        zIndex: 50}}
    >
        
            <h1 className='font-bold text-md h-7' style={{color: '#fff'}}>
              <marquee width="100%" direction="left" height="100px" className="h-7"> Free shipping on all orders. <a href="/collection/sale">Shop Now</a></marquee>
            </h1>
        
    </div>
  )
}

export default TopBar;