import UserClass from "./UserClass";
import User from "./User";
import React,{ Component } from "react";
class About extends Component{
constructor(){
  super();
  console.log("Parent Constructor");
}
componentDidMount(){
  console.log("Parent component did Mount");
}
render(){
  console.log("Parent Render");
    return (
    <div className="m-3 p-3">
      <h2>About Us</h2>
      <p>
        As of now it is being developed by Sandeep...And Still In-Progress state
      </p>
      <UserClass />
    </div>
  );
}
}
export default About;
