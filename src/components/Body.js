import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import RestaurantList from "../constants/swiggyRestaurants";
const Body = () => {
  const [resList, setResList] = useState(RestaurantList);
  const [searchProduct,setSearchProduct]=useState("");
  return (
    <div className="body">
      <div className="search">
        <input onChange={(e)=>{
          setSearchProduct(e.target.value)
        }}
          type="text"
          placeholder="Search for food..."
          className="search-bar"
        />
        <svg
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        <button type="button" className="search-btn" onClick={()=>{
          const filteredList = resList.filter(
            (x) =>x?.info?.name.toLowerCase().includes(searchProduct.toLowerCase())
          );
          setResList(filteredList);
        }}>
          Search
        </button>
        <button
          type="button"
          className="search-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (x) =>x?.info?.avgRating >= 4.5
            );
            setResList(filteredList);
          }}
        >
          4.5⭐+ Ratings
        </button>
      </div>
      <div className="restaurant-card">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
