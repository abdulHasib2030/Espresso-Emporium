import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
const Users = () => {
    const loaderUsers = useLoaderData()
    const [users, setUsers] = useState(loaderUsers);

    const handleUserDelete = (id) =>{
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
        
              fetch(`http://localhost:5000/users/${id}`,{
                method: 'DELETE',
        
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(data.deletedCount >  0) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "User has been deleted.",
                    icon: "success"
                  })
                  const remainingUser = users.filter(user => user._id !== id)
                  setUsers(remainingUser)
                }
              })
        
              
            }
          });
        
    }

    return (
        <div>
            <h2 className='text-3xl'>Users {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Signin</th>
      </tr>
    </thead>
    <tbody>
   
   {
    users.map((user, idx) =><tr key={user._id}>
        <th>{idx+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastSignInTime}</td>
        <td className='space-x-3 text-xl'>
            <button><FaEdit /></button>
            <button 
            onClick={()=>handleUserDelete(user._id)}
            ><MdDelete /></button>
        </td>
      </tr> )
   }
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;