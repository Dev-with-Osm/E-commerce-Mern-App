import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="w-[250px] transition-transform  transform hover:scale-105">
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" onClick={window.scrollTo(0, 0)} />
      </Link>
      <p className="my-1.5 text-sm text-gray-600">{props.name}</p>
      <div className="flex gap-6">
        <div className="text-gray-500 font-semibold">${props.newPrice}</div>
        <div className="text-gray-300 line-through">${props.oldPrice}</div>
      </div>
    </div>
  );
}
