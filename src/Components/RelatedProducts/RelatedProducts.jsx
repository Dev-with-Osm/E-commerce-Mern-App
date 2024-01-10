import React from "react";
import dataProduct from "../Assets/data";
import Item from "../Items/Item";

export default function RelatedProducts() {
  return (
    <div className="flex flex-col items-center gap-2 h-[90vh]">
      <h1 className="text-gray-800 font-semibold text-2xl">
        {" "}
        Related Products{" "}
      </h1>
      <hr className=" h-[5px] w-[200px] rounded-md bg-gray-800" />
      <div className="mt-8 flex gap-4">
        {dataProduct.map((item, index) => {
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
        })}
      </div>
    </div>
  );
}
