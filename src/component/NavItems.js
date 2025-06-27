import { useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";
import { useSelector } from "react-redux";

//nav items
const NavItems = ()=>{
  let [btn, setBtn] = useState("login");
  const status = useOnlineStatus();
  const cartItems = useSelector((store)=> store.cart.items);
    return(
      <>
      <div className="status-section">
        <h1>online status : {status ? "Online" : "Offline"}</h1>
      </div>
      <div className="nav-items">
          <ul className="nav-list">
              <li className="nav-item"><Link to="/">Home</Link></li>
              <li className="nav-item"> <Link to="/about">About</Link></li>
              <li className="nav-item"><Link to="/contact">Contact</Link></li>
              <li className="nav-item"><Link to="/grossary">Grossary</Link></li>
              <li className="nav-item"><Link to="/cart">Cart {cartItems.length}</Link></li>
              <button className="btn btn-primary" onClick={()=>{
                btn === "login" ? setBtn("logout") : setBtn("login");
                }}>{btn}</button>
          </ul>
      </div>
      </>
    );
  }

  export default NavItems;