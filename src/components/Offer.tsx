import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white animate-bounce text-5xl font-bold xl:text-6xl mt-4">Delicious Burger & French Fry</h1>
        <p className="animate-pulse bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text text-transparent xl:text-xl">
        Sale of the month, take this delicious burger and pay only <span className="text-yellow-300 text-2xl">$12.00</span> with free delivery.
        Let's go fast, limited time promotion.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6 hover:bg-red-700">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
