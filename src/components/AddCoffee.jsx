import Swal from 'sweetalert2'
const AddCoffee = () => {


    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = {name, quantity, supplier, taste, category, details, photoUrl};
        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers:{
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title:"Success!",
                    text:"User Added Successfully",
                    icon:'success',
                    confirmButtonText:'Cool'
                })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-bold">Add Coffee</h1>
            <form action="" className="space-y-4 " onSubmit={handleAddCoffee}>
                <div className="md:flex gap-4 ">
                <div className="w-1/2">
                    <label htmlFor="">Name</label> <br />   
                    <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full " />
                </div>
                <div className="w-1/2">
                    <label htmlFor="">Available Quantity</label> <br />   
                    <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full " />
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
               <button className="w-full py-1 font-bold text-center text-xl bg-black btn text-white">Add Coffee</button>
            </form>
        </div>
    );
};

export default AddCoffee;