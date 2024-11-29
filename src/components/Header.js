import React from "react";
const Header = () => (
    <div className="header">
      <div className="logo">
        <img
          className="img-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbUoW4aFJx8vSEPQ1m_ZXWTUYMmkadmI-qIQ&s"
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