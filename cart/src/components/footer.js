import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-dark col-2"
        onClick={() => {
          props.resetQuantity();
        }}
      >
        RESET
      </button>
      <div className="btn btn-dark text-white col-8">
        Total:{props.totalAmount}
      </div>
      <button className="btn btn-success col-2">PAY NOW</button>
    </div>
  );
}
