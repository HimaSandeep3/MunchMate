import UserClass from "./UserClass";
import User from "./User";
import React,{ Component } from "react";
import UserContext from "../utils/UserContext";
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
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10 mt-10 bg-white rounded shadow-md border border-gray-200">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">About this Project</h2>
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        This project was created to build a responsive <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">Food Delivery App</span>, inspired by <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">Swiggy</span>, ensuring a seamless meal ordering experience. The goal is to provide an optimized <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">State Management System</span>, advanced <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">Search and Filtering Capabilities</span>, and real-time <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">Restaurant Data Integration</span>, while ensuring cross-device compatibility and accessibility.
      </p>
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        The project uses <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">React</span>, <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">Redux</span>, <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">React Router</span>, <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">Tailwind CSS</span>, and <span className="bg-gray-100 text-gray-900 font-bold px-2 py-1 rounded">Jest</span> to build a scalable and maintainable web application.
      </p>
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        The project is still in progress, and I'm continuously working on improving and adding new features. If you have any suggestions or feedback, please don't hesitate to reach out.
      </p>
      <p className="text-lg mb-6 text-gray-700 leading-relaxed">
        You can find the project's source code on my <a href="https://github.com/HimaSandeep3" target="_blank" className="text-blue-600 hover:text-blue-800">GitHub</a> repository.
      </p>
      <div className="flex justify-center mt-6">
        <a href="https://github.com/HimaSandeep3" target="_blank" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
}
export default About;
