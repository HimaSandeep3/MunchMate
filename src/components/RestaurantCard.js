import React from "react";
import { FOOD_URL } from "../constants/constants";
const RestaurantCard = (props) => {
    const {resData}=props;
    const{name,avgRating,cuisines,cloudinaryImageId,locality}=resData?.info;
    const{deliveryTime}=resData?.info.sla;
    return(
        <div className="flex flex-col m-[10px] rounded-md w-[250px] h-[320px] hover:cursor-pointer hover:border-2 border-black hover:-translate-y-5 hover:shadow-md bg-slate-100">
        <div>
            <img className="h-[200px] w-[250px] rounded-b-3xl rounded-t-lg" src={FOOD_URL+cloudinaryImageId} alt="chickenTikka"/>
        </div>
        <div className="p-1 m-0">
            <h3 className="font-bold m-0 text-lg">{name}</h3>
            <p className="m-0 text-sm font-medium text-gray-900">⭐{avgRating} • {deliveryTime} mins</p>
            <p className="m-0 text-sm font-medium text-gray-900">{cuisines.slice(0,3).join(",")}</p>
            <p className="m-0 text-sm font-medium text-gray-900">{locality}</p>
        </div>
    </div>
    )
}
export default RestaurantCard;