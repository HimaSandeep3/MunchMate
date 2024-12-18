import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import { CORS_URL,MENU_URL } from '../constants/constants';

const RestaurantMenu = () => {
    const[resMenu,setResMenu]=useState(null);
    const {resID}=useParams();
    useEffect(()=>{
        fetchRestaurantMenu();
    },[])

const fetchRestaurantMenu=async()=>{
    const response=await fetch(CORS_URL + encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resID));
    const temp=await response.json();
    const tempData=JSON.parse(temp.contents);
    const res=tempData.data?.cards[2]?.card?.card?.info
    console.log(res,"cardData");
    setResMenu(tempData.data);
    console.log(tempData.data,"overallData");
};
if(resMenu===null)
  {
    return <Shimmer/>
  }
  const{text}=resMenu?.cards[0]?.card?.card
const{avgRating,totalRatingsString,costForTwoMessage,cuisines}=resMenu?.cards[2]?.card?.card?.info;
// const{name,description,defaultPrice}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info;
const{itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div>
        <h3>{text}</h3>
        <p>⭐{avgRating}{" "}({totalRatingsString}) • {costForTwoMessage}</p>
        <h4 style={{color:'orange',textDecoration:'underLine'}}>{cuisines.join(",")}</h4>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item)=><li key={item?.card?.info.id}>{
            item?.card?.info?.name
          }
          </li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu