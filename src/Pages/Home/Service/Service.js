import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='service-container'>
            <div className='service-img'>
                <img src={img} alt="Car services" />
            </div>
            <div className='service-info'>
                <h2 className='service-title'>{name}</h2>
                <p>Price: {price}</p>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id)}>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;