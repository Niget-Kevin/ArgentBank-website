import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/argentBankLogo.webp';
import { logout } from '../../redux/actions/authActions';
import './header.scss';

function Header() {
    const connected = useSelector((state) => state.auth.isConnected);
    const userName = useSelector((state) => state.user.userData.username); 

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }
    
    return (                   
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img src={Logo} alt="Logo Argent Bank "  className="main-nav-logo-image"/>
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink> 
            {connected ? (
                <div className='login'>
                    <NavLink to='/profile'>
                        <i className='fa fa-user-circle' />
                        <p>{userName}</p>
                    </NavLink>
                    <NavLink to='/' onClick={logoutHandler} className="main-nav-item">
                        <i className='fa fa-sign-out'/>
                        <p> Sign out </p>
                    </NavLink>
                </div>
            ) : (
                <div className='logout'>
                    <NavLink to='/login' className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        <p>Sign In</p>
                    </NavLink>
                </div>
            )}
        </nav>        
    )
}

export default Header;
