import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import User from './pages/AccountUser/AccountUser.jsx';
import './App.scss';

export default function App () {
    const connected = useSelector((state) => state.auth.isConnected);

    return (
        <div>
            <div className='flex'>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='profile' element={connected ? <User /> : <Navigate to="/login" />} />
            </Routes>
            </div>
            <Footer />
        </div>
    )  
}
