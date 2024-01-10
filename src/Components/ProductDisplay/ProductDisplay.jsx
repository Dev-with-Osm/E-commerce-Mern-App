import React, { useContext } from "react";
import starIcon from "../Assets/star_icon.png";
import starDullIcon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex mx-32 h-full">
      <div className="flex gap-1">
        <div className="flex -mr-9 flex-col gap-3">
          <img className=" w-2/3" src={product.image} alt="" />
          <img className=" w-2/3" src={product.image} alt="" />
          <img className=" w-2/3" src={product.image} alt="" />
          <img className=" w-2/3" src={product.image} alt="" />
        </div>
        <div>
          <img className="w-[1015px] " src={product.image} alt="" />
        </div>
      </div>
      <div className="my-0 mx-10 flex flex-col">
        <h1 className="text-gray-700 text-3xl font-semibold">{product.name}</h1>
        <div className="flex items-center mt-2 gap-2 text-gray-600 text-sm">
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starIcon} alt="" />
          <img src={starDullIcon} alt="" />
          <p>(122)</p>
        </div>
        <div className="flex my-5 gap-6 font-semibold">
          <div className=" line-through text-gray-500">
            ${product.old_price}
          </div>
          <div className="text-red-500">${product.new_price}</div>
        </div>
        <div className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero,
          modi quisquam nam laudantium error cupiditate saepe qui suscipit
          necessitatibus inventore odit repellat corporis ducimus quae obcaecati
          omnis, minus illum, esse delectus assumenda! Dolorum,
        </div>
        <div>
          <h1 className="mt-5 text-gray-500 text-sm font-semibold   ">
            Select Size
          </h1>
          <div className="flex my-3 gap-2.5">
            <div className="py-2 px-3 bg-gray-300 border border-gray-900 rounded-sm cursor-pointer">
              S
            </div>
            <div className="py-2 px-3 bg-gray-300 border border-gray-900 rounded-sm cursor-pointer">
              M
            </div>
            <div className="py-2 px-3 bg-gray-300 border border-gray-900 rounded-sm cursor-pointer">
              L
            </div>
            <div className="py-2 px-3 bg-gray-300 border border-gray-900 rounded-sm cursor-pointer">
              XL
            </div>
            <div className="py-2 px-3 bg-gray-300 border border-gray-900 rounded-sm cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="py-2 px-4 w-[243px]  text-white bg-gray-400 font-medium my-2 mb-3 border border-gray-900"
        >
          ADD TO CART{" "}
          
        </button>
        <p className="mt-2 text-sm">
          {" "}
          <span className="font-semibold">Category: </span>women, T-shirt, Crop
          Top
        </p>
        <p className="mt-2 text-sm">
          {" "}
          <span className="font-semibold">Tags: </span>Modern Latest
        </p>
      </div>
    </div>
  );
}
