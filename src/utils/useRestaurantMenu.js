import { useEffect, useState } from "react";
import { CORS_URL } from "../constants/constants";
const useRestaurantMenu=(resID)=>{
    const[resMenu,setResMenu]=useState(null);
    useEffect(()=>{
        fetchRestaurantMenu();
    },[])
    const fetchRestaurantMenu=async()=>{
        try{
            const response=await fetch(CORS_URL + encodeURIComponent("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId="+resID));
            const temp=await response.json();
            const tempData=JSON.parse(temp.contents);
            const res=tempData.data?.cards[2]?.card?.card?.info
            console.log(res,"cardData");
            setResMenu(tempData.data);
            console.log(tempData.data,"overallData");
        }
        catch(e){
            throw e;
        }
    }
    return resMenu;
}
export {useRestaurantMenu};