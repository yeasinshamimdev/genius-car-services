import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img } = expert;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Expert;