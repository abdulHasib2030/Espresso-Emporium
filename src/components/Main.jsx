import React from 'react';
import { CiCoffeeCup } from "react-icons/ci";
import CoffeeCard from './CoffeeCard';
import { Link } from 'react-router-dom';
import image1 from '../assets/images/cups/Rectangle 10.png'
import image2 from '../assets/images/cups/Rectangle 11.png'
import image3 from '../assets/images/cups/Rectangle 12.png'
import image4 from '../assets/images/cups/Rectangle 13.png'
import image5 from '../assets/images/cups/Rectangle 14.png'
import image6 from '../assets/images/cups/Rectangle 15.png'
import image7 from '../assets/images/cups/Rectangle 16.png'
import image8 from '../assets/images/cups/Rectangle 9.png'

const Main = ({coffees, coffeee, setCoffees}) => {
    return (
        <div className=''>
            <div className='w-[70%] mx-auto my-20'>
                <div className='text-center space-y-2'>
                    <h5>--- Sip & Savor ---</h5>
                    <h1 className='font-bold font-font-rancho text-2xl'>Our Popular Products</h1>
                    <div className='flex px-4 py-2 w-[200px] mx-auto items-center justify-center bg-[#E3B577] rounded-md border-2 border-black text-white font-font-rancho'>
                   <Link to={'/addCoffee'}> <button className='text-xl'>Add Coffee </button></Link>
                    <CiCoffeeCup className='text-center text-black'/>
                    </div>
                </div>
                <div className='my-10'>
                    <div className='grid md:grid-cols-2 gap-14'>
                        {
                            coffeee.map(coffee =>  <CoffeeCard coffee={coffee} coffees={coffeee} setCoffees={setCoffees}></CoffeeCard>)
                        }
                    </div>
                   
                </div>

                <div className='text-center  my-20'>
                    <h5>Follow Us Now</h5>
                    <h1 className='font-bold font-font-rancho text-4xl mb-11'>Follow on Instagram</h1>
                   <div className='grid grid-cols-2 md:grid-cols-4 gap-4  '>
                        <img src={image1} alt="" />
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                        <img src={image4} alt="" />
                        <img src={image5} alt="" />
                        <img src={image6} alt="" />
                        <img src={image7} alt="" />
                        <img src={image8} alt="" />
                   </div>
                </div>

            </div>
        </div>
    );
};

export default Main;