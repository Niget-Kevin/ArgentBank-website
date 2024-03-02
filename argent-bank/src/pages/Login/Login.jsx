
import './Login.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../../redux/actions/authActions.jsx';
import './Login.scss'



function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(loginSuccess(token));
                sessionStorage.setItem("token", token);
                if (rememberMe) {
                    localStorage.setItem("token", token);
                }
                navigate('/profile');
            } else {
                const error = "Incorrect email or password";
                dispatch(loginFailed(error));
                setErrorMessage(error);
            }
        } catch (error) {
            console.error(error);
            setErrorMessage("An error occurred");
        }
    };

    return (
       
            <main className=' main bg-dark'>
                <section className='sign-in-content'>
                    <i className="fa-solid fa-circle-user"></i>
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-wrapper'>
                            <label htmlFor='email'>Username</label>
                            <input 
                                id='email' 
                                type='text'
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                autoComplete="email"
                            />
                        </div>
                        <div className='input-wrapper'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                id='password' 
                                type='password'
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                autoComplete="current-password"
                            />
                        </div>
                        <div className='input-remember'>
                            <input 
                                id='remember-me' 
                                type='checkbox' 
                                checked={rememberMe}
                                onChange={(event) => setRememberMe(event.target.checked)}
                            />
                            <label htmlFor='remember-me'>Remember me</label>
                        </div>
                        <button className="sign-in-button">Sign In</button>
                        {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    </form>
                </section>
            </main>
        
    );
}

export default Login;