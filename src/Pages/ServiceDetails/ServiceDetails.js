import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h4>This is service details: {serviceId}</h4>
            <Link to='/checkout' className='btn btn-primary'>Proceed Checkout</Link>
        </div>
    );
};

export default ServiceDetails;