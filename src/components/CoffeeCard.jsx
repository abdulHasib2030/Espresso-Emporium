import React from 'react';
import card1 from '../assets/images/1.png'
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({coffee}) => {
  const { name, quantity, supplier, taste, category, details, photoUrl } = coffee

  return (
    <div>
      <div className='bg-[#F5F4F1] rounded-xl p-4 flex items-center justify-between'>
        <div>
          <img src={photoUrl} alt="" />
        </div>
        <div className='space-y-3'>
          <h4 className='font-semibold font-font-raleway text-xl'>Name: <span className='font-normal'>{name} </span></h4>
          <h4 className='font-semibold font-font-raleway text-xl'>Chef: <span className='font-normal'>{supplier}</span></h4>
          <h4 className='font-semibold font-font-raleway text-xl'>Price: <span className='font-normal'>890 tk</span></h4>
        </div>
        <div className='space-y-4 text-white '>
          <p className='bg-[#D2B48C]  p-2 rounded-md'> <IoMdEye className='text-2xl ' /></p>
          <p className='bg-[#3C393B]   p-2 rounded-md'><FaPen className='text-2xl'/> </p>
          <p className='bg-[#EA4744]  p-2 rounded-md'><MdDelete className='text-2xl'/> </p>
        
        
        </div>

      </div>
    </div>
  );
};

export default CoffeeCard;