import React from "react";
import exclusiveImg from "../Assets/exclusive_image.png";

export default function Offers() {
  return (
    <div className=" w-4/6 h-[60vh] overflow-hidden flex m-auto py-0 px-20  bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200">
      <div className="flex flex-1 flex-col justify-center ">
        <h1 className="text-gray-800 text-4xl font-semibold">Exclusive</h1>
        <h1 className="text-gray-800 text-4xl font-semibold">Offers For You</h1>
        <p className="text-gray-800 mt-4 text-base font-medium">
          ONLY ON BEST SELLERS <br /> PRODUCTS
        </p>
        <button className="w-[150px] mt-4 cursor-pointer text-lg h-[55px] border-none text-white bg-red-300">
          Check Now
        </button>
      </div>
      <div className="flex flex-1 items-center ">
        <img className=" w-4/5" src={exclusiveImg} alt="" />
      </div>
    </div>
  );
}
