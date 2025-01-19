import React, { useState } from 'react'
import { FOOD_URL } from '../constants/constants';
import Description from './Description';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const RestaurantItems = ({data,showIndex,setShowIndex,indexV}) => {
    const{title,itemCards}=data?.card?.card
    const toggleAccordion=indexV === showIndex?true:false;
    const handleToggle = () => {
        if (indexV === showIndex) {
          setShowIndex(-1);
        } else {
          setShowIndex(indexV);
        }
      };
      const dispatch=useDispatch();
      const addtoCart=(item)=>{
        dispatch(addItem(item));
      }
    return (
        <div className='cursor-pointer p-3 border-x-0 border-t-0 border-b-[16px] border-[#ddd]'>
            <div className='flex justify-between my-2 bg-white' onClick={handleToggle}>
            <span className='text-xl font-bold'>{title} ({itemCards?.length})</span>
            <span className='text-xl font-bold'>{toggleAccordion ? "⬆️" : "⬇️"}</span>
            </div>
            {toggleAccordion && (
                <div className="">
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
                        <div className="flex flex-col items-end relative">
                            <img className="w-32 h-32 mb-3 rounded-xl bg-red-300" src={FOOD_URL + item?.card?.info?.imageId} alt="Food Item" />
                            <button className="absolute top-24 right-[25px] py-3 px-5 bg-white text-green-500 font-bold border-none rounded-md cursor-pointer items-center hover:bg-gray-300"
                            onClick={()=>addtoCart(item)}>Add +</button>
                            </div>
                      </div>
                      <hr className="mt-4 w-[100%] border-[1px] border-[#dddddd]" />
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
        </div>
    );
}

export default RestaurantItems