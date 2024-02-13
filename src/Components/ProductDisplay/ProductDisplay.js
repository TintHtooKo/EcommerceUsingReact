import React, { useContext } from "react";
import "./ProductDisplay.css";
import star from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
          <img src={product.image} />
        </div>
        <div className="product-display-img">
          <img src={product.image} className="product-display-main" />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star_dull} />
          <p>(122)</p>
        </div>
        <div className="product-display-right-price">
          <div className="product-display-right-old">${product.old_price}</div>
          <div className="product-display-right-new">${product.new_price}</div>
        </div>
        <div className="product-display-right-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add To Cart
        </button>
        <p className="product-display-right-category">
          <span>Category : </span>Women, T-shirt, Crop-Top
        </p>
        <p className="product-display-right-category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
}
