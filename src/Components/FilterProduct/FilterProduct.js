import React from "react";

function FilterProduct(props) {

  return (
    <div className="py-2 px-52 ml-auto">
        <select onChange={props.filterChangeHandler} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        <option>All</option>
        <option>Available</option>
        <option>Unavailable</option>
        </select>
    </div>
  );
}

export default FilterProduct;
