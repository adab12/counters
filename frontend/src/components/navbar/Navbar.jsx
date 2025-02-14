import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">WaveBudget</div>
      <div className="nav-link">
        <a href="/">Home</a>
        <a href="/">Services</a>
        <a href="/">Products</a>
        <a href="/">About us</a>
        <a href="/">Contact us</a>
      </div>
      <div className="nav-link">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
