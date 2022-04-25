import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);

    return (
        <div className='w-75 mx-auto my-5 text-center'>
            <h4>You are about to book: {service.name}</h4>
            <div className='text-center mt-4'>
                <Link to={`/checkout/${serviceId}`}><button className='btn btn-primary'>Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;