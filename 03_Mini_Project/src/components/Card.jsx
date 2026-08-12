import React from 'react';

const Card = ({name,price,id,inStock}) =>{
  return <>
    <div className="card">
      <p>id: {id}</p>
      <h1>Name: <span>{name}</span></h1>
      <h1>Price: <span>${price}</span></h1>
      <button className='buyNow' style={inStock  ? {backgroundColor:"green"} : {backgroundColor:"red",cursor: "not-allowed"}}>Buy Now</button>
    </div>

  </>

}

export default Card;