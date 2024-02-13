import React from "react";
import "./offer.css";
import exclusive_img from "../Assets/exclusive_image.png";
export default function Offer() {
  return (
    <div className="offer">
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offer For You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive_img} />
      </div>
    </div>
  );
}
