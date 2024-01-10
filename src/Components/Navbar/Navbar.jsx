import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const [userDropdownVisibilityClass, setUserDropdownVisibilityClass] =
    useState("hidden ");
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);

  function toggleUserDropdown() {
    if (userDropdownVisibilityClass === "hidden ") {
      setUserDropdownVisibilityClass("block ");
    } else {
      setUserDropdownVisibilityClass("hidden ");
    }
  }

  return (
    <div className="flex items-center justify-around border-b-2 py-2">
      <div className="">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={logo} alt="app logo" />
          <p className=" font-semibold text-xl">HOOJAN</p>
        </Link>
      </div>
      <ul className="flex items-center gap-6">
        <li onClick={() => setMenu("shop")}>
          <Link to={"/"}>Shop</Link>
          {menu === "shop" ? (
            <hr className=" border-none w-4/5 h-[2px] rounded-md bg-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to={"/mens"}>Men</Link>
          {menu === "mens" ? (
            <hr className=" border-none w-4/5 h-[2px] rounded-md bg-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to={"/womens"}>Women</Link>
          {menu === "womens" ? (
            <hr className=" border-none w-4/5 h-[2px] rounded-md bg-red-400" />
          ) : (
            <></>
          )}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to={"/kids"}>Kids</Link>
          {menu === "kids" ? (
            <hr className=" border-none w-4/5 h-[2px] rounded-md bg-red-400" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex gap-3 font-medium">
        <OutsideClickHandler
          onOutsideClick={() => setUserDropdownVisibilityClass("hidden")}
        >
          <button onClick={() => toggleUserDropdown()}>
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
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
        </OutsideClickHandler>
        <Link to={"/cart"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>
        <div className="nav-cart-count flex items-center justify-center w-5 h-5 -mt-1 -ml-5 rounded-full font-medium text-white text-xs bg-red-600">
          {getTotalCartItems()}
        </div>
        {/* the dropDown menu */}
        <div
          className={
            " absolute bg-gray-600 top-16 flex flex-col gap-2 overflow-hidden p-1 rounded-md text-gray-300 " +
            userDropdownVisibilityClass
          }
        >
          <Link
            to={"/register"}
            className="flex  py-2 px-8 text-base gap-3 transition ease-in-out delay-75 font-semibold hover:bg-gray-300 rounded-md hover:text-black  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Sign Up
          </Link>
          <Link
            to={"login"}
            className=" flex  py-2 px-8 text-base gap-3 transition ease-in-out delay-75 font-semibold hover:bg-gray-300 hover:text-black rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
              />
            </svg>
            Log In
          </Link>
          <button className=" flex  py-2 px-8 text-base gap-3 transition ease-in-out delay-75 font-semibold hover:bg-gray-300 hover:text-black rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
              />
            </svg>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
