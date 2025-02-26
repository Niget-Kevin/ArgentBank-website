import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userProfile } from '../../redux/actions/userActions.jsx';
import User from '../../components/User/User.jsx';
import Account from '../../components/Account/Account.jsx';
import AccountData from '../../data/accountData.json';
import './AccountUser.scss'

function AccountUser() {
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();


    useEffect(() => {
        console.log('Token in state:', token);
        if (token) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        
                        const userData = {
                            
                            createdAt: data.body.createdAt,
                            updatedAt: data.body.updatedAt,
                            id: data.body.id,
                            email: data.body.email,
                            firstname: data.body.firstName,
                            lastname: data.body.lastName,
                            username: data.body.userName,
                            
                        }
                        dispatch(userProfile(userData));
                        
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token]);

    return (         
            <main className='main bg-dark'>
                <div className='user-page'>
                < User />
                {AccountData.map((data) => (
                    <Account 
                        key={data.id}
                        title={data.title}
                        amount={data.amount}
                        description={data.description}
                    />
                ))}
                </div>
            </main>           
    )
}

export default AccountUser