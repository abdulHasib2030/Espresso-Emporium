import React from 'react';
import bannerImg from '../assets/images/more/3.png'
import icon1 from '../assets/images/icons/1.png'
import icon2 from '../assets/images/icons/2.png'
import icon3 from '../assets/images/icons/3.png'
import icon4 from '../assets/images/icons/4.png'

const Banner = () => {
    return (
        <div>
        <div className='h-[800px]  bg-cover bg-center bg-no-repeat w-full md:flex justify-center items-center' style={{ backgroundImage: `url(${bannerImg})` }}>
          
            <div className='w-2/4'></div>
           <div className='text-white text-start w-2/4  space-y-5'>
           <h1 className='text-5xl w-4/5 font-font-rancho'>Would you like a Cup of Delicious Coffee?</h1>
            <p className='text-gray-300 w-4/5 font-font-raleway'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
            <button className='bg-[#E3B577] py-3 px-6 text-xl font-semibold font-font-rancho'>Learn More</button>
           </div>
        </div>
        
        {/* // banner icon section */}
        <div className='bg-[#ECEAE3] p-8 items-center justify-between flex'>
            <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='text-start space-y-2'>
                    <img src={icon1} alt="" />
                    <h4 className='font-font-rancho text-sm font-semibold'>Awesome Aroma</h4>
                    <p className='font-font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='text-start space-y-2'>
                    <img src={icon2} alt="" />
                    <h4 className='font-font-rancho text-sm font-semibold'>High Quality</h4>
                    <p className='font-font-raleway'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='text-start space-y-2'>
                    <img src={icon3} alt="" />
                    <h4 className='font-font-rancho text-sm font-semibold'>Pure Grades</h4>
                    <p className='font-font-raleway'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='text-start space-y-2'>
                    <img src={icon4} alt="" />
                    <h4 className='font-font-rancho text-sm font-semibold'>Proper Roasting</h4>
                    <p className='font-font-raleway'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Banner;