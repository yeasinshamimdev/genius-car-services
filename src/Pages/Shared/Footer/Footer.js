import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p><small>copyright © {year} || Yeasin Shamim</small></p>
        </footer>
    );
};

export default Footer;