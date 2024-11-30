import React, { useState } from 'react';
import card1 from '../assets/images/1.png'
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
  console.log(coffees);
  const { _id, name, quantity, supplier, taste, category, details, photoUrl } = coffee
 const handleDelete = (id) =>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      fetch(`http://localhost:5000/coffee/${id}`,{
        method: 'DELETE',

      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.deletedCount >  0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Coffee has been deleted.",
            icon: "success"
          })
          const remaining = coffees.filter(cof => cof._id !== id)
          setCoffees(remaining)
        }
      })

      
    }
  });

 }
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
        <Link to={`updateCoffee/${_id}`}>
          <p className='bg-[#3C393B]   p-2 rounded-md'><FaPen className='text-2xl'/> </p>
        </Link>
          <p onClick={()=> handleDelete(_id)} className='bg-[#EA4744]  p-2 rounded-md'><MdDelete className='text-2xl'/> </p>
        
        </div>

      </div>
    </div>
  );
};

export default CoffeeCard;