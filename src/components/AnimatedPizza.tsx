'use client'

import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../public/animated_pizza.json'

const AnimatedPizza = () => {
  return (
    <div className="bg-red-500 h-screen flex flex-col md:flex-row md:justify-between  md:bg-[url('/bg-pizza.jpg')] md:h-[70vh] object-cover">
    {/* TEXT CONTAINER */}
    <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
      <h1 className="text-black text-5xl font-bold xl:text-6xl">Ours Delicious Pizza</h1>
      <p className="text-black font-bold xl:text-xl">
      Come and delight yourself with our wonderful pizzas and delight yourself with the most varied flavors and be surprised!
      </p>
     
      <button className="bg-black text-white rounded-md py-3 px-6 hover:bg-gray-900">Order Now</button>
    </div>
    {/* ANIMATION CONTAINER */}
    <div className="flex-1 w-full relative md:h-full">
      <Lottie animationData={animationData} className='w-3/4 mb-2 relative md:h-full left-8'/>
    </div>
  </div>
  )
}

export default AnimatedPizza