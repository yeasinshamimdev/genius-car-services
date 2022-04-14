import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form my-3'>
            <h2 className='text-primary text-center'>Pleaser Register Now</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="name" placeholder='Your name' />
                <input type="email" name="email" id="email-input" placeholder='Email address' required />
                <input type="password" name="password" id="password-input" required />
                <input type="submit" value="Register" />
            </form>
            <p className='mt-4'>Already Have an account? <Link to='/login' className='text-danger text-decoration-none pe-auto' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;