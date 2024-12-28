import React, { useState } from "react";
import { LOGO_URL } from "../constants/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const[text,setText]=useState("Log In");
  return(
    <div className="header">
      <div className="logo">
        <Link to="/"><img
          className="img-logo"
          src={LOGO_URL}
          alt=""
        /></Link>
        <label className="title">MunchMate</label>
      </div>
      <div className="nav-items">
        <ul className="list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
          <button className="btn" onClick={() => setText(text === "Log In" ? "Log Out" : "Log In")}>{text}
          <p className={text==="Log In"?"green":"red"} style={{marginLeft:"5px",textAlign:"center"}}>●</p>
          </button>
        </ul>
      </div>
    </div>
  )
};
  export default Header;