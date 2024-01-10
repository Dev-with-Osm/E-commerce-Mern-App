import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Items/Item";

export default function ShopCategory(props) {
  const { allProduct } = useContext(ShopContext);
  return (
    <div>
      <img className="block mx-auto my-3 w-4/5" src={props.banner} alt="" />
      <div className="flex py-0 px-8 justify-between items-center mx-40">
        <p>
          <span className="font-semibold ">Showing 1-12 </span>
          out of 36 products
        </p>
        <div className="flex items-center px-5 py-2.5 rounded-xl border border-gray-600 gap-1">
          Sort by{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <div className=" grid grid-cols-4 mt-3 mx-40 gap-5">
        {allProduct.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                newPrice={item.new_price}
                oldPrice={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex gap-1 cursor-pointer justify-center items-center my-20 mx-auto w-[150px] h-[50px] rounded-lg bg-red-200 text-gray-600 text-base font-medium">
        Explore More
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
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
    </div>
  );
}
