import React from "react";
import newCollection from "../Assets/new_collections";
import Item from "../Items/Item";

export default function NewCollections() {
  return (
    <div className="flex flex-col items-center gap-1 my-12 h-full">
      <h1 className=" uppercase text-4xl font-semibold">New collections</h1>
      <hr className="w-[200px] h-[6px] rounded-md bg-gray-800" />
      <div className=" grid grid-cols-4 mt-10 gap-5">
        {newCollection.map((item, index) => {
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
