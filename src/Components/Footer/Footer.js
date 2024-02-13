import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo.png";
import instagram from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} />
      </div>
      <ul className="footer-link">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={instagram} />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest} />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserve</p>
      </div>
    </div>
  );
}
