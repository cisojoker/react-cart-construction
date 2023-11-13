// ProductList.js
import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    <div>
      {props.productList.map((product, i) => (
        <Product
          product={product}
          key={i}
          index={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
          
        />
      ))}
    </div>
  ) : (
    <h1>NO PRODUCT</h1>
  );
}
