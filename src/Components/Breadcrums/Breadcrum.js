import React from "react";
import "./Breadcrum.css";
import arrow from "../Assets/breadcrum_arrow.png";

export default function Breadcrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum">
      HOME <img src={arrow} /> SHOP <img src={arrow} />
      {product.category} <img src={arrow} />
      {product.name}
    </div>
  );
}
