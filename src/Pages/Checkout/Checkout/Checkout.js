import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);

    // const [user, setUser] = useState({
    //     name: 'ali akbar',
    //     email: 'akbar@gamil.com',
    //     address: 'motijill',
    //     phone: '0182199299292'
    // });

    // const handleAddress = e => {
    //     const { address, ...rest } = user;
    //     const newAddress = e.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     console.log(newUser);
    //     setUser(newUser);
    // }

    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast('Your order is booked!!')
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Please Order: {service.name}</h1>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name='name' placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user.email} name='email' placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service' placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='address' required autoComplete='off' />
                <br />
                <input className='w-100 mb-2' type="number" name='phone' placeholder='phone' required />
                <br />
                <input className='mb-4 btn btn-primary' type="submit" value="Place order" />
            </form>
        </div>
    );
};

export default Checkout;