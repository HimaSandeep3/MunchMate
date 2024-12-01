import React from "react";
import { LOGO_URL } from "../constants/constants";
const Header = () => (
    <div className="header">
      <div className="logo">
        <img
          className="img-logo"
          src={LOGO_URL}
          alt=""
        />
        <label className="title">MunchMate</label>
      </div>
      <div className="nav-items">
        <ul className="list">
          <li>Home</li>
          <li>About Us</li>
          <li>Offers</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
  export default Header;