import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// components
import Header from "./component/Header";
import Body from "./component/Body";

// const heading = React.createElement('h1',{'id':'heading'}, "this is react");
//react element using jsx
//react component -  class based component, functional component
//class way - old
//functional component -  new
// functional component  (funtion which returns react element)
//app compoent
const AppLayout = () => {
    return (
        <div className="app">
         <Header/>
         <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
// import React from "react";
// import ReactDOM from "react-dom/client";