import React, { useEffect, useState } from 'react';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <h4>Services: {services.length}</h4>
        </div>
    );
};

export default Services;