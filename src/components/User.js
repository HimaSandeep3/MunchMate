import React, { useState } from "react";
const User=(props)=>{
    const[count,setCount]=useState(0);
    const{name}=props
    return(
        <div className="user">
            <h2>Count={count}</h2>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
            <h2>Functional {name}</h2>
            <h3>User is from Machilipatnam</h3>
            <p>Made by using react Functional component</p>
        </div>
    )
}
export default User;