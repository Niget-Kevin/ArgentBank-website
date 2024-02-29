import React from "react";
import './FeaturesItem.scss';


function FeaturesItem({ description, image, title, alt}) {
    return (
            <div className="feature-item">
                <img src={image} 
                    alt={alt} 
                    className="feature-icon"/>
                <h3 className="feature-item-title">
                    {title}</h3>
                <p>{description}</p>
            </div>
    )
}

export default FeaturesItem


