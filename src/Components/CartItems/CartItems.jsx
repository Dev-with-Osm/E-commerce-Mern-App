import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

export default function CartItems() {
  const { allProduct, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="my-24 mx-40">
      <div className="cartitems-main">
        <p>Products</p>
        <p>Title</p>
        <p className="-ml-3">Price</p>
        <p className="-ml-3">Quantity</p>
        <p className="-ml-3">Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-red-100 border-none" />
      {allProduct.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitems-main font-medium text-sm">
                <img src={e.image} alt="" className="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="w-12 h-8 border text-base font-medium border-gray-500 bg-white">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <button
                  className="mx-8"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-24">
        <div className="flex flex-1 flex-col mr-40 gap-5">
          <h1 className=" text-2xl font-semibold">Cart Totals</h1>
          <div>
            <div className="flex justify-between p-2 ">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between p-2 ">
              <p>Shipping free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between p-2 ">
              <h3 className="font-semibold">Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[240px] py-3.5  outline-none border-gray-900 bg-gray-400 text-white  font-medium">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className=" flex-1 text-sm font-medium">
          <p className="text-gray-600">
            If you have a promo code, Enter it here
          </p>
          <div className="w-[500px] mt-3 pl-4 h-[58px] bg-gray-200">
            <input
              className=" w-[330px] h-[50px] border-none outline-none bg-transparent text-base"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[154px] h-[58px] bg-gray-950 text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
