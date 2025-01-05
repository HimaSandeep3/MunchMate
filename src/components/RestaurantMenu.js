import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import Description from './Description';
import { FOOD_URL } from '../constants/constants';
import {useRestaurantMenu} from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const [expandedSection, setExpandedSection] = useState(null);
    const {resID}=useParams();
    const resMenu= useRestaurantMenu(resID);
if(resMenu===null)
  {
    return <Shimmer/>
  }
  const toggleAccordion = (sectionIndex) => {
    setExpandedSection((prev) => (prev === sectionIndex ? null : sectionIndex));
  };
  const{text}=resMenu?.cards[0]?.card?.card
const{avgRating,totalRatingsString,costForTwoMessage,cuisines,sla}=resMenu?.cards[2]?.card?.card?.info;
const{slaString}=sla;
const totalSections =
  resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.length || 0;

// Generate indices starting from 2 up to totalSections - 2
const sections = Array.from(
  { length: Math.max(totalSections - 2 - 2, 0) }, // Ensure no negative lengths
  (_, i) => i + 2
);

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

    {sections.map((sectionIndex) => {
      const { itemCards, title } =
        resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[sectionIndex]?.card?.card || {};

      if (!itemCards || itemCards.length === 0) return null;

      return (
        <div className="mt-5" key={sectionIndex}>
          <h3 onClick={() => toggleAccordion(sectionIndex)} className="accordion-header text-xl">
            {title} ({itemCards.length})
          </h3>
          {expandedSection === sectionIndex && (
            <div className="accordion-content">
              <ul className="p-0 list-none">
                {itemCards.map((item) => (
                  <li key={item?.card?.info?.id} className="p-4 mb-5 bg-white rounded-xl shadow-md">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4 ">
                        <p className="my-1 mx-0 text-lg text-gray-600 break-words font-bold">{item?.card?.info?.name}</p>
                        <p className="my-1 mx-0 text-md text-gray-600 break-words font-semibold">
                          ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                        </p>
                        <p className="my-1 mx-0 text-md text-gray-600 break-words font-semibold">
                          ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating || 4.1} (
                          {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 10})
                        </p>
                        <Description description={item?.card?.info?.description} />
                      </div>
                      <div className="flex flex-col items-end">
                        <img
                          className="w-32 h-32 mb-3 rounded-xl"
                          src={FOOD_URL + item?.card?.info?.imageId}
                          alt="Food Item"
                        />
                        <button className="py-3 px-5 bg-green-500 text-white font-bold border-none rounded-md cursor-pointer items-center hover:bg-green-600">Add</button>
                      </div>
                    </div>
                    <hr className="mt-4 w-[100%] border-[1px] border-[#dddddd]" />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4 w-[100%] border-[10px] border-[#dddd]"></div>
        </div>
      );
    })}
  </div>
);
}

export default RestaurantMenu