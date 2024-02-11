import logo from '../../designs/img/argentBankLogo.png'
import { NavLink } from "react-router-dom";
import '../../designs/css/main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return (    
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">                  
                <img className='main-nav-logo-image'src={logo} alt='Logo Argent Bank' />                   
            </NavLink> 

            <NavLink to="" className="main-nav-item">  
            <FontAwesomeIcon className="main-nav-item" icon={faUserCircle} />
            Sign In
            </NavLink>
        </nav>
    )}




export default Header;