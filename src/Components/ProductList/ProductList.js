import React from "react";
import Products from "./Products";

export default function ProductList(props) {
  return props.newProductList.length === 0 ? (
    <p className="bg-red-600 text-white px-2 py-1 text-center py=4">
      There is currently no product. List is empty
    </p>
  ) : (
    <ul className="flex flex-wrap justify-center py-4">
      {/* mapping the jsx for each product in the products object. */}
      {props.newProductList.map((index) => {
        return (
          <Products
            key={index.pID}
            id={index.pID}
            pName={index.pName}
            desc={index.desc}
            isAvailable={index.isAvailable}
            img={index.image}
            price={index.price}
            stock={index.stock}
          />
        );
      })}
    </ul>
  );
}
