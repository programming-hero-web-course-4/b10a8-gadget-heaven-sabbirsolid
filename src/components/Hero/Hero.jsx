import React from 'react';
import bannerImg from '../../assets/banner.jpg'
const Hero = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold py-5 px-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, alias.</p>
                <button className='btn my-2'>Shop Now</button>
            </div>
            <div >
                <img className="h-1/2 mx-auto" src={bannerImg} alt="Banner Images" />
            </div>
        </div>
    );
};

export default Hero;