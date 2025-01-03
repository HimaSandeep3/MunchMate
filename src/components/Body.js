import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredData,setFilteredData]=useState([]);
  const [searchProduct,setSearchProduct]=useState("");
  useEffect(()=>{
    fetchRestaurants();
  },[]);
  const fetchRestaurants = async () => {
    try {
      const response = await fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"));
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const temp = await response.json();
      const tempData=JSON.parse(temp.contents);
      const res=tempData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(res,'resssssss');
      setResList(res);
      setFilteredData(res);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return resList.length===0 ? <Shimmer/> :(
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
          setFilteredData(filteredList);
        }}>
          Search
        </button>
        <button
          type="button"
          className="search-btn"
          onClick={() => {
            const filteredList = resList.filter(
              (x) =>x?.info?.avgRating >= 4.3
            );
            setFilteredData(filteredList);
          }}
        >
          4.3⭐+ Ratings
        </button>
      </div>
      <div className="restaurant-card">
        {filteredData.map((restaurant) => (
          <Link to={`/restaurantId/${restaurant.info.id}`} key={restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
