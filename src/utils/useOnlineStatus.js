import { useState } from "react";

const useOnlineStatus=()=>{
    const[isOnline,setOnline]=useState(true);
    window.addEventListener("online",()=>setOnline(true));
    window.addEventListener("offline",()=>setOnline(false));
    return isOnline
}
export  {useOnlineStatus};