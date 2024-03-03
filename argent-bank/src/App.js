import React from 'react';
import { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import { loginSuccess, logout } from './redux/actions/authActions';
import User from './pages/AccountUser/AccountUser.jsx';
import './App.scss';

export default function App () {
    const connected = useSelector((state) => state.auth.isConnected);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(loginSuccess(token));
        } else {
            dispatch(logout());
        }
    }, [dispatch]);

    
    return (
        <div>
            <div className='flex'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='profile' element={connected ? <User /> : <Navigate to="/" />} />
            </Routes>
            </div>
            <Footer />
        </div>
    )  
}
