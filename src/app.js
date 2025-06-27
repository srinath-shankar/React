import React, {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// components
import Header from "./component/Header";
import Body from "./component/Body";
import Shimmer from "./component/Shimmer";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import MenuPage from "./component/MenuPage";
import Cart from "./component/Cart"
// import Grossary from "./component/Grossary";
import { Provider } from "react-redux";
import appStore from  './utlis/appStore'
//routing
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";  
import MenuPage from "./component/MenuPage";

// const heading = React.createElement('h1',{'id':'heading'}, "this is react");
//react element using jsx
//react component -  class based component, functional component
//class way - old
//functional component -  new
// functional component  (funtion which returns react element)
//app compoent
const AppLayout = () => {
    return (
<Provider store={appStore}>
          <div className="app">
         <Header/>
         <Outlet/>
         <Shimmer/>
        </div>
</Provider>
    );
};

const Grossary = lazy(()=> import("./component/Grossary"));
const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path:"/about",
          element:<About/>        
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
          path:"/grossary",
          element:<Suspense fallback={<Shimmer/>}><Grossary/></Suspense>
        },
        {
            path:"/restaurant/:resId",
            element:<MenuPage/>
        },
        {
          path:"/cart",
          element:<Cart/>
        }
      ]
    },
    
  ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
// import React from "react";
// import ReactDOM from "react-dom/client";