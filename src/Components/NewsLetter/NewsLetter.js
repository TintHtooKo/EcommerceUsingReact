import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="news-letter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe To Our Newletter and Stay Updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
