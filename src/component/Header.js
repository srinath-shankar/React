import Logo from './Logo';
import {Logo} from "./Logo"
import NavItems from './NavItems';

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

export default Header;