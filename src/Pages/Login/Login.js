import React from 'react';

const Login = () => {
    return (
        <form className='mx-auto my-3 p-2'>
            <input type="text" placeholder='Your name' />
            <br />
            <input type="email" name="email" id="email" placeholder="Your email" />
            <br />
            <input type="password" name="password" id="password" />
            <br />
            <button>Login</button>
        </form>
    );
};

export default Login;