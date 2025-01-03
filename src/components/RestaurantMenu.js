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
  <div className="menu-container">
    <div className="menu-header">
      <h3>{text}</h3>
      <div className="menu-details subResDetails">
        <p className="menu-rating">
          ⭐ {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </p>
        <h4 className="menu-cuisines">{cuisines.join(",")}</h4>
        <p className="menu-delivery">Delivery in: {slaString}</p>
      </div>
    </div>
    <h2 className="menu-title">M E N U</h2>

    {sections.map((sectionIndex) => {
      const { itemCards, title } =
        resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[sectionIndex]?.card?.card || {};

      if (!itemCards || itemCards.length === 0) return null;

      return (
        <div className="menu-items" key={sectionIndex}>
          <h3 onClick={() => toggleAccordion(sectionIndex)} className="accordion-header">
            {title} ({itemCards.length})
          </h3>
          {expandedSection === sectionIndex && (
            <div className="accordion-content">
              <ul className="menu-list">
                {itemCards.map((item) => (
                  <li key={item?.card?.info?.id} className="menu-item">
                    <div className="menu-item-content">
                      <div className="menu-item-left">
                        <p className="menu-item-name">{item?.card?.info?.name}</p>
                        <p className="menu-item-price">
                          ₹{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                        </p>
                        <p className="menu-item-rating">
                          ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating || 4.1} (
                          {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 || 10})
                        </p>
                        <Description description={item?.card?.info?.description} />
                      </div>
                      <div className="menu-item-right">
                        <img
                          className="menu-item-img"
                          src={FOOD_URL + item?.card?.info?.imageId}
                          alt="Food Item"
                        />
                        <button className="menu-item-button">Add</button>
                      </div>
                    </div>
                    <hr className="menu-item-divider" />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="horizontalBar"></div>
        </div>
      );
    })}
  </div>
);
}

export default RestaurantMenu