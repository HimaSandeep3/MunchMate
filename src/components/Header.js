import React, { useContext, useState } from "react";
import { LOGO_URL } from "../constants/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import cartLogo from '../assets/images/shopping-cart.png';
import UserContext from "../utils/UserContext";
const Header = () => {
  const[text,setText]=useState("Log In");
  const isOnline=useOnlineStatus();
  const {name}=useContext(UserContext);
  return(
    <div className="flex bg-orange-400 sticky top-0 z-20 p-2 h-28 rounded-md justify-between">
      <div className="flex flex-col m-[2px]">
        <Link to="/"><img
          className="h-20 w-[90px] rounded-md"
          src={LOGO_URL}
          alt=""
        /></Link>
        <label className="font-bold text-center justify-center m-[2px]">MunchMate</label>
      </div>
      <div className="px-5 py-0">
        <ul className="flex font-semibold p-6 space-x-9 mt-2">
          <li style={{color:'white'}}>Online : {isOnline ? "✅" : "🛜"}</li>
          <li><Link to="/" className="hover:underline font-bold">Home</Link></li>
          <li><Link to="/about" className="hover:underline font-bold">About Us</Link></li>
          <li><Link to="/contact" className="hover:underline font-bold">Contact</Link></li>
          <li><img src={cartLogo} className="h-5"/></li>
          <button className="flex rounded-md bg-white px-1" onClick={() => setText(text === "Log In" ? "Log Out" : "Log In")}>{text}
          <p className={text==="Log In"?"green":"red"} style={{marginLeft:"5px",textAlign:"center"}}>●</p>
          </button>
          <li className="text- px-1 mx-1">{name}</li>
        </ul>
      </div>
    </div>
  )
};
  export default Header;