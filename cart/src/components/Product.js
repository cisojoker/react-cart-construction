// Product.js
import React from "react";

export default function Product(props) {
  if (!props.product) {
    return null;
  }

  return (
    <div className="row">
      <div className="col-4">
        <h2>
          {props.product.name}
          <span className="badge bg-dark">₹{props.product.price}</span>
        </h2>
      </div>
      <div className="col-2">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              props.decrementQuantity(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-secondary">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-3">
        {props.product.quantity * props.product.price}
      </div>
      <div className="col-3">
        <button
          className="btn btn-danger"
          onClick={() => {
            props.removeItem(props.index);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
