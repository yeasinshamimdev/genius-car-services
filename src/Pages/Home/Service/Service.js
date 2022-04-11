import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service-container'>
            <div className='service-img'>
                <img src={img} alt="Car services" />
            </div>
            <div className='service-info'>
                <h2 className='service-title'>{name}</h2>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <button>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;