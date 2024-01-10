import React from "react";

export default function NewsLetter() {
  return (
    <div className="w-4/6 h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-36 mb-32 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 gap-3">
      <h1 className="text-2xl text-gray-800 font-semibold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-base text-gray-800">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex items-center justify-between bg-white w-[700px] h-[70px] rounded-[80px] border-1 border-red-300">
        <input
          className="w-[500px] ml-8 border-none outline-none text-gray-800"
          type="email"
          placeholder="user Email Address"
        />
        <button className="w-[150px] mr-4 h-[50px] rounded-full bg-fuchsia-400">
          Subscribe
        </button>
      </div>
    </div>
  );
}
