import React from 'react';

const CoffeeCard = ({coffee}) => {
    const {name, quantity, supplier, taste, category, details, photoUrl} = coffee

    return (
<div>
<div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={photoUrl}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</div>
    );
};

export default CoffeeCard;