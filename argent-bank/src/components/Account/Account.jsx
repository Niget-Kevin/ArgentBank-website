import React from 'react'
import './Account.scss';

function Account ({ title, amount, description }) {
    return (
        <section className='account'>
            <h2 className='sr-only'>Accounts</h2>
            <div className='account-content'>
                <h3 className='account-title'>{title}</h3>
                <p className='account-subtitle'>{amount}</p>
                <p className='account-description'>{description}</p>
            </div>
            <div className='account-content'>
                <button className='transaction-button'>View transactions</button>
            </div>

        </section> 
    )
}

export default Account