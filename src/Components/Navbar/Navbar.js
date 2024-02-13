import React, { useContext, useState } from "react";
import "./Navbar.css";
import Logo from "../Assets/logo.png";
import Cart from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {
  const { getTotalCartItem } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={Logo} />
      </div>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="women">
            Women
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="kid">
            Kid
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={Cart} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
}
