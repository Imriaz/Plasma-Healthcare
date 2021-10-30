import React from 'react';
import errorImg from '../../images/404 error.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={errorImg} alt='' />
        </div>
    );
};

export default NotFound;