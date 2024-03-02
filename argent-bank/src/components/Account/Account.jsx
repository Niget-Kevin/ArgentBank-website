import React from 'react'
import './Account.scss';

function Account ({ title, amount, description }) {
    return (
        <section className='account'>
            <div className='account-content-wrapper'>              
                    <h3 className='account-title'>{title}</h3>
                    <p className='account-subtitle'>{amount}</p>
                    <p className='account-description'>{description}</p>  
            </div>              
            <div className='account-content-wrapper cta'>
                <button className='transaction-button'>View transactions</button>
            </div>
            
        </section> 
    )
}

export default Account