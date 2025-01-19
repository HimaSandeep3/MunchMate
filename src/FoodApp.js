import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const About=lazy(()=>import("./components/About"))
const App = () =>{
  const[userName,setUserName]=useState("");
  useEffect(()=>{
    const userInfo={
      Username:"Hima Sandeep",
    };
    setUserName(userInfo.Username);
  },[])
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{name:userName,setUserName}}>
  <>
    <Header />
    <Outlet />
  </>
  </UserContext.Provider>
  </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <About />
          </Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurantId/:resID",
        element:<RestaurantMenu/>
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
