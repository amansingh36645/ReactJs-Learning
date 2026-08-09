import React from "react";

const Card = (props) =>{
  return (
    <>
      <div className="card">
        <div className="main">
          <h1>Name: {props.name}</h1>
          <h3>Age: {props.age}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos in repudiandae repellendus ad delectus!</p>
          <h3>Profession: {props.profession}</h3>
          <button className="btn">View Profile</button>
        </div>
      </div>
    </>
  )
}

export default Card;