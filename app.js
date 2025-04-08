import React from "react";
import ReactDOM from "react-dom/client";

/*
header
 logo
 nav items
 cart
body
 search
 image containe
 image card
footer
 copywrite
*/
// const heading = React.createElement('h1',{'id':'heading'}, "this is react");
//react element using jsx
//react component -  class based component, functional component
//class way - old
//functional component -  new
// functional component  (funtion which returns react element)

//nav items
const NavItems = ()=>{
  return(
    <div className="nav-items">
        <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
            <li className="nav-item">Cart</li>
        </ul>
    </div>
  );
}
//logo com
const Logo=()=>{
    return(
      <div className="logo">
        <img src="https://cdn-icons-png.flaticon.com/128/6951/6951735.png" alt="logo" />
      </div>
    );
}
//header com
const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <Logo/>
            </div>
            <div className="nav-container">
                <NavItems/>
            </div>
        </div>
    )
}
const ObjList =[
    {
    id:0,
    heading:"kfc",
    price:"20",
    cloud:"?q=tbn:ANd9GcQ32TjzFGxIibtdbjvXjVLQWIR39-cWnAUXAGwq-we_7LE3glRlFkxislGnQD5wW2-E3Kw&usqp=CAU"
    },
    {
        id:1,
        heading:"pizza",
        price:"200",   
        cloud:"?q=tbn:ANd9GcQ32TjzFGxIibtdbjvXjVLQWIR39-cWnAUXAGwq-we_7LE3glRlFkxislGnQD5wW2-E3Kw&usqp=CAU"
    }
]
//img card
const ImageCard = (props)=>{
    const {Obj} = props;
    const{heading,price,cloud} = Obj;
    return(
        <div className="image-card">
           <div>
           <img src={"https://encrypted-tbn0.gstatic.com/images"+cloud} alt="food item" />
        </div>
         <div className="img-card-content">
         <h3>{heading}</h3>
         <p>{price+' rupee'}</p>
         <p>items</p>
        </div>
        </div>
    );
}
//body comp
const Body =()=>{
    return(
        <div className="main-section">
            <div className="search-container">
                <input type="text" placeholder="Search for food items" />
                <button className="search-btn">Search</button>
            </div>
            <div className="image-container">
                {
                  ObjList.map((items) => {
                    return <ImageCard key={items.id} Obj={items}/>
                  })
                }
            </div>
        </div>
    );
}
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