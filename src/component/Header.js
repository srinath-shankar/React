import Logo from './Logo';
import {Logo} from "./Logo"
import NavItems from './NavItems';

//hooks
import {useState,useEffect,useContext} from 'react';
import userContext from '../utlis/userContext';

//header com
const Header = ()=>{
 
    useEffect(()=>{
        console.log("Header component mounted");
    },[])
    const {user} = useContext(userContext);
    return(
        <div className="header">
            <div className="logo-container">
                <Logo/>
            </div>
            <div className="nav-container">
                <NavItems/>
               
            </div>
             <li>{user}</li>
        </div>
    )
}

export default Header;