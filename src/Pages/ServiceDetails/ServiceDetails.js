import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div className='w-75 mx-auto my-5 text-center'>
            <h4>You are about to book: {service.name}</h4>
            <div className='text-center mt-4'>
                <Link to='/checkout'><button className='btn btn-primary'>Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;