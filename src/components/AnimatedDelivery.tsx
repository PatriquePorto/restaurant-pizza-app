'use client'

import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../public/animated_delivery.json'

const AnimatedDelivery = () => {
    return (
        <div className="bg-green-400 h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]">
        {/* TEXT CONTAINER */}
        <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
          <h1 className="text-white text-5xl font-bold xl:text-6xl">Most Fast Delivery In Town</h1>
          <p className="text-white font-bold xl:text-xl">        
              Try shopping with us and have the fastest delivery experience in town.
          </p>
         
          <button className="bg-yellow-500 text-white rounded-md py-3 px-6 hover:bg-yellow-400">Order Now</button>
        </div>
        {/* ANIMATION CONTAINER */}
        <div className="flex-1 w-full relative md:h-full">
          <Lottie animationData={animationData} className='w-3/4 mb-2 relative md:h-full left-8'/>
        </div>
      </div>
  )
}

export default AnimatedDelivery