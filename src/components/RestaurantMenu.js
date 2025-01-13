import React, {useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import {useRestaurantMenu} from '../utils/useRestaurantMenu';
import RestaurantItems from './RestaurantItems';

const RestaurantMenu = () => {
    const {resID}=useParams();
    const resMenu= useRestaurantMenu(resID);
    const [showIndex, setShowIndex] = useState(0);
if(resMenu===null)
  {
    return <Shimmer/>
  }

  const{text}=resMenu?.cards[0]?.card?.card
const{avgRating,totalRatingsString,costForTwoMessage,cuisines,sla}=resMenu?.cards[2]?.card?.card?.info;
const{slaString}=sla;
const categoryItems=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>(item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
return (
  <div className="m-2 max-w-[900px] mx-auto">
    <div>
      <h3 className='text-black font-semibold text-3xl'>{text}</h3>
      <div className="mt-3  bg-orange-100 p-4 mb-5 rounded-xl shadow-md">
        <p className='text-md'>
          ⭐ {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </p>
        <h4 className="text-orange-600 underline text-lg">{cuisines.join(",")}</h4>
        <p className="text-md">Delivery in: {slaString}</p>
      </div>
    </div>
    <h2 className="text-gray-600 text-3xl my-8 mx-0 text-center">M E N U</h2>
    {categoryItems.map((item,index)=> 
    <RestaurantItems key={item?.card?.card?.title}
      data={item} 
      showIndex={showIndex}
      setShowIndex={setShowIndex}
      indexV={index}/>)}
  </div>
);
}

export default RestaurantMenu