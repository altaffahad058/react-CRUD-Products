import React, { useState } from "react";
import ProductForm from "./ProductForm";

export default function CreateProduct(props) {
  const [displayForm, setDisplayForm] = useState(false);

  const displayCreatProductForm = () => {
    setDisplayForm(!displayForm);
  };

  return (
    <div className="px-20 py-10">
      {!displayForm && (
        <div className="flex justify-center">
          <button
            onClick={displayCreatProductForm}
            className="bg-orange-600 text-white px-2 py-1 rounded-full"
          >
            Create product
          </button>
        </div>
      )}
      {displayForm && (
        <ProductForm
          createProduct={props.createProduct}
          displayCreatProductForm={displayCreatProductForm}
          displayForm={displayForm}
        />
      )}
    </div>
  );
}
