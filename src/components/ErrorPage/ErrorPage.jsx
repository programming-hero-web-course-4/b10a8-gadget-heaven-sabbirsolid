import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center py-32'>
            <h1 className='text-5xl font-bold py-5'>404 Error: Page not Found</h1>
            <Link to={'/'}><button className='btn'>Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;