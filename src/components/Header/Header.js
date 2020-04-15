import React from "react";
import logo from "../../images/header.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo} alt=""></img>
      <nav>
        <a href="/Home">Home</a>
        <a href="/ContactUs">Contact Us</a>
        <a href="/AboutUs">About Us</a>
      </nav>
    </div>
  );
};

export default Header;
