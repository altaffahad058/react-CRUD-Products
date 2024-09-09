import React, { useState } from "react";
import Button from "./Button";

function ProductDetails(props) {

    let [productCount, setProductCount] = useState(0)

    const increment = () => {
        productCount++ ;
        return setProductCount(productCount);
    }
    
    const decrement = () => {
        if(productCount > 0) {
            return  setProductCount(--productCount);
        }
    }

    function displayFormattedProductCount() {
        return (productCount > 0 ? productCount : 'zero')
    }
    
    return (
        <div className="flex gap-10 py-3">
            <p className="">${props.price}</p>
            <div className="flex gap-2">
                <Button disableButton={productCount === 0} eventHandler={decrement} children="-" />
                <label htmlFor="" className="">{displayFormattedProductCount()}</label>
                <Button disableButton={productCount === props.stock} eventHandler={increment}>+</Button>
            </div>
        </div>
    )
}

export default ProductDetails