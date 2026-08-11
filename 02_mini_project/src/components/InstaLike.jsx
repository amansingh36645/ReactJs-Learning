import React, { useState } from "react";

const InstaLike = () => {

  const [like,setLike] = useState(true);

  const likebtn = () => {
    setLike(prev => !prev)
  }

  return (
    <div>
      <i className={like ? " ri-poker-hearts-line" : " ri-poker-hearts-fill"}></i>
      <button onClick={likebtn}>Click</button>
    </div>
   
  )
}

export default InstaLike;