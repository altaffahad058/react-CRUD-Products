import React from "react";
import ProductDetails from "./ProductDetails";

function Products(props) {
  //For Changing classes dynamically
  let availability = props.isAvailable;
  let isAvailable = availability ? "available" : "unavailable";
  let availabilityLabelClass =
    "px-2 py-1 rounded-full font-mono text-xs text-white font-bold ";
  availabilityLabelClass =
    availabilityLabelClass +
    (isAvailable === "available" ? "bg-green-700" : "bg-red-700");

  return (
    <li className="rounded w-7/12 py-2">
      <div className={`flex gap-2 rounded ${props.isAvailable ? 'bg-white' : 'bg-gray-300'} border-2 shadow-gray-400 shadow-2xl border-none p-2 font-serif`}>
      <div>
          <div className="flex justify-between">
            <p className="py-1">{props.pName}</p>
            <div className="px-5">
              <label className={availabilityLabelClass}>{isAvailable}</label>
            </div>
          </div>
          <p className="py-1 text-gray-500 text-sm">{props.desc}</p>
          <ProductDetails price={props.price} stock={props.stock} />
        </div>
        <div className="flex flex-col items-center">
            <img className="w-40 h-36" src={props.img} alt="placeholdePic" />
            <p>Stock Remaining: {props.stock}</p>
        </div>
      </div>
    </li>
  );
}

export default Products;
