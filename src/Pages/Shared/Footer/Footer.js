import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p><small>copyright © {year}</small></p>
        </footer>
    );
};

export default Footer;