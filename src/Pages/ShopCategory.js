import React, { useContext } from "react";
import "./CSS/shopcategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shopcategory">
      <img className="shopcategory-banner" src={props.banner} />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> Out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sory By <img src={dropdown} />
        </div>
      </div>

      <div className="shopcategory-product">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
}
