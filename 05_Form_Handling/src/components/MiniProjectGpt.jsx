import React, { useState } from "react";

const MiniProjectGpt = () => {

  const [name,setName] = useState('');

  return (
    <div>
      <h1>Hello</h1>
      <input type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>{
        setName(e.target.value)
      }}  />
      <p>Hello,{name}</p>
    </div>

  )
}

export default MiniProjectGpt;