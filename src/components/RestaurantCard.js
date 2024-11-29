import React from "react";
const RestaurantCard = (props) => {
    const {resData}=props;
    const{name,avgRating,cuisines,cloudinaryImageId,locality}=resData?.info;
    const{deliveryTime}=resData?.info.sla;
    return(
    <div className="card">
        <div>
            <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} alt="chickenTikka"/>
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