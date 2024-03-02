import React from 'react';
import FeaturesItem from '../../components/FeaturesItem/FeaturesItem';
import FeaturesItemData from '../../data/featuresItemData.json';

import './home.scss';

function Home() {
    return (        
            <main >    
                <div className='hero'>
                    <section className='hero-content'>
                        <h2 className='sr-only'>Promoted Content</h2>
                        <p className='subtitle'>No fees.</p>
                        <p className='subtitle'>No minimum deposit.</p>
                        <p className='subtitle'>High interest rates.</p>
                        <p className='text'>Open a savings account with Argent Bank today!</p>
                    </section>
                </div>      
                <section className="features">
                    <h2 className='sr-only'>Features</h2>                
                    {FeaturesItemData.map((data) => (                    
                        <FeaturesItem 
                            key={data.id}
                            image={require(`../../${data.image}`)}
                            alt={data.alt}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
            </main>        
    );
}

export default Home;
