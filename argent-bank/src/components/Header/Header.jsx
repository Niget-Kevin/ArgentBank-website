import logo from '../../designs/img/argentBankLogo.png'
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../redux/slices/authSlice';
import './header.scss'

function Header() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); // Obtenez l'état d'authentification depuis le Redux store
    const dispatch = useDispatch(); // Initialisez useDispatch pour déclencher l'action logout

    const handleLogout = () => {
        dispatch(logout()); // Déclenchez l'action de déconnexion lorsque le bouton "Sign Out" est cliqué
    };
    return (    
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">                  
                <img className='main-nav-logo-image'src={logo} alt='Logo Argent Bank' />                   
            </NavLink> 

            {/* Condition pour afficher "Sign In" ou "Sign Out" en fonction de l'état d'authentification */}
            {isAuthenticated ? (
                <NavLink to="/" onClick={handleLogout} className="main-nav-item">
                    <FontAwesomeIcon className="main-nav-item" icon={faUserCircle} />
                    Sign Out
                </NavLink>
            ) : (
                <NavLink to="/login" className="main-nav-item">
                    <FontAwesomeIcon className="main-nav-item" icon={faUserCircle} />
                    Sign In
                </NavLink>
            )}
        </nav>
    )}




export default Header;