import React from 'react';
import navBg from '../assets/images/more/15.jpg'
import logo1 from '../assets/images/more/logo1.png'
import Banner from './Banner';
const Home = () => {
    return (
        <div>
            <nav className='h-[100px] bg-center ' style={{ backgroundImage: `url(${navBg})` }}>
                <div className='flex justify-center gap-3 py-2 text-white items-center'>
                <img src={logo1} className='w-16 ' alt="" />
                <h1 className='text-2xl font-font-rancho'>Espresso Emporium</h1>
                </div>
                

            </nav>
            <Banner></Banner>
        </div>
    );
};

export default Home;