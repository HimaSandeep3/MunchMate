import React from "react";
import { FOOD_URL } from "../constants/constants";
const RestaurantCard = (props) => {
    const {resData}=props;
    const{name,avgRating,cuisines,cloudinaryImageId,locality}=resData?.info;
    const{deliveryTime}=resData?.info.sla;
    return(
    <div className="card">
        <div>
            <img className="card-img" src={FOOD_URL+cloudinaryImageId} alt="chickenTikka"/>
        </div>
        <div className="card-context">
            <h3>{name}</h3>
            <p>⭐{avgRating} • {deliveryTime} mins</p>
            <p>{cuisines.slice(0,3).join(",")}</p>
            <p>{locality}</p>
        </div>
    </div>
    )
}
export default RestaurantCard;