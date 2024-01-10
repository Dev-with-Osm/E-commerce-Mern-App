import React from "react";
import handeIcon from "../Assets/hand_icon.png";
import heroImage from "../Assets/hero_image.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero h-full bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 flex ">
      <div className="flex flex-1  mx-32 mt-40  flex-col  gap-5 pl-10">
        <h2 className=" text-zinc-950 text-lg font-semibold">
          NEW ARRIVALS ONLY
        </h2>
        <div>
          <div className="flex items-center gap-4">
            <p className="text-7xl font-semibold" style={{ color: "#171717" }}>
              new
            </p>
            <img className="w-12" src={handeIcon} alt="" />
          </div>
          <p className="text-7xl font-semibold">collection</p>
          <p className="text-7xl font-semibold">for everyone</p>
        </div>
        <div>
          <Link className="flex justify-center items-center gap-4 w-48 h-12 rounded-md mt-6 bg-transparent border-2 border-red-500 text-red-500 font-semibold transition-all delay-75 hover:text-white hover:bg-red-500">
            Latest Collection
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img className=" w-4/5" src={heroImage} alt="" />
      </div>
    </div>
  );
}
