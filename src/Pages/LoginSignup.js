import React from "react";
import "./CSS/loginsignup.css";

export default function LoginSignup() {
  return (
    <div className="loginup">
      <div className="loginup-container">
        <h1>Sign Up</h1>
        <div className="loginup-fields">
          <input type="text" placeholder="Your Name " />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button>Continue</button>
          <p className="loginup-login">
            Already have an account? <span>Login Here!</span>
          </p>

          <div className="loginup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing, I agree to the terms of privacy policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
