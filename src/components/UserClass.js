import React from "react";
class UserClass extends React.Component {
    constructor(){
        super();
        // console.log("child constructor");
        this.state={
            userInfo:{
                name:"Sandeep"
            }
        }
        console.log("child constructor");
    }
    async componentDidMount(){
        console.log("Component did Mount child");
        const data =await fetch("https://api.github.com/users/HimaSandeep3");
        const res= await data.json();
        console.log(res,"resssssss");
        this.setState({
            userInfo:res
        });
    }
    componentDidUpdate(){
        console.log("Component did update child");
    }
    componentWillUnmount(){
        console.log("Component will unmount child");
    }
    render() {
        console.log(" child render");
        const{name}=this.state.userInfo;
      return (
        <div className="m-3 p-3 border-[1px] border-black">
          <h2> {name}</h2>
          <p>Made by using react Class component</p>
        </div>
      );
    }
}
export default UserClass;