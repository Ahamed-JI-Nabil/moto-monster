import React from 'react';
import notFound from '../../Images/404.jpg'

const NotFound = () => {
    return (
        <div className='w-full'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;