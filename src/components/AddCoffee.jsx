import Swal from 'sweetalert2'
import Nav from './Nav';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
const AddCoffee = () => {


    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = { name, quantity, supplier, taste, category, details, photoUrl };
        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Coffee Added Successfully",
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div>
            
            <div className='max-w-7xl mx-auto my-10'>
                <Link to={'/'}>
                <h1 className='mb-10 font-bold font-font-rancho text-3xl flex  gap-2 items-center'> <FaArrowLeft /> Back to home</h1>
                
                </Link>
                <div className="bg-[#F4F3F0] p-24 ">

                    <div className='mb-10'>
                    <h1 className="text-3xl font-bold text-center font-font-rancho">Add New Coffee</h1>
                    <p className='font-font-raleway text-center w-11/12 mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                    </div>

                    <form action="" className="space-y-4 " onSubmit={handleAddCoffee}>
                        <div className="md:flex gap-4 ">
                            <div className="w-1/2">
                                <label htmlFor="">Name</label> <br />
                                <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full " />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="">Chef</label> <br />
                                <input type="text" name="quantity" placeholder="Enter coffee chef" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="md:flex gap-4 ">
                            <div className="w-1/2">
                                <label htmlFor="">Supplier</label> <br />
                                <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full " />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="">Taste</label> <br />
                                <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div className="md:flex gap-4 ">
                            <div className="w-1/2">
                                <label htmlFor="">Category</label> <br />
                                <input type="text" name="category" placeholder="Category" className="input input-bordered w-full " />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="">Details</label> <br />
                                <input type="text" name="details" placeholder="Details" className="input input-bordered w-full " />
                            </div>
                        </div>
                        <div>

                            <div className="w-full">
                                <label htmlFor="">Photo url</label> <br />
                                <input type="text" name="photoUrl" placeholder="Photo url" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <button className="w-full py-1 font-bold text-center border-2 border-black text-xl bg-[#D2B48C] btn text-black">Add Coffee</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default AddCoffee;