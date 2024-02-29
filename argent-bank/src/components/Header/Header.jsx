import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/argentBankLogo.webp';
import { logout } from '../../redux/actions/authActions';
import './header.scss';

function Header() {

    const connected = useSelector((state) => state.auth.token);
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
        <header>
            <h1 className='sr-only'>Argent Bank</h1>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo">
                    <img src={Logo} alt="Logo Argent Bank "  className="main-nav-logo-image"/>
                </NavLink> 
                {connected ? (
                    <div className='connected'>
                        <NavLink to='/profile'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>{userName}</p>
                        </NavLink>
                        <NavLink to='/' onClick={logoutHandler} className="main-nav-item">
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </NavLink>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <NavLink to='/login' className="main-nav-item">
                            <i className="fa-solid fa-circle-user main-nav-item"></i>
                            <p>Sign In</p>
                        </NavLink>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Header;
