import React from "react";
import footerLogo from "../Assets/logo_big.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pintrestIcon from "../Assets/pintester_icon.png";
import wtspIcon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex items-center gap-2">
        <img src={footerLogo} alt="" />
        <p className="text-gray-800 font-semibold text-xl">HOOJAN</p>
      </div>
      <ul className="flex gap-6 text-gray-700 ">
        <li className=" cursor-pointer">Company</li>
        <li className=" cursor-pointer">Product</li>
        <li className=" cursor-pointer">Offices</li>
        <li className=" cursor-pointer">About</li>
        <li className=" cursor-pointer">Contact</li>
      </ul>
      <div className="flex gap-4">
        <div className="rounded-full p-2 pb-1 bg-red-100 border">
          <img className=" mb-0.5" src={instagramIcon} alt="" />
        </div>
        <div className="rounded-full p-2 pb-1 bg-red-100 border">
          <img className=" mb-0.5" src={pintrestIcon} alt="" />
        </div>
        <div className="rounded-full p-2 pb-1 bg-red-100 border">
          <img className=" mb-0.5" src={wtspIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 w-full mb-6 text-gray-900">
        <hr className="w-4/5 border-none rounded-md h-0.5 bg-red-100" />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
}
