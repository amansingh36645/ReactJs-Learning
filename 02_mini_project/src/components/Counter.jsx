import React, { useState } from "react";

const Counter = () => {
  const [num,setNum] = useState(0);
  const [msg, setMsg] = useState('')
  const increament = () =>{
    if(num != 10){
      setNum(prev => prev +1);
    } else {
      setMsg("Maximum Limit Reached")
      setTimeout(() => {
        setMsg('')
      },2000);
    }

    
  }

  const decreament = () =>{
    if(num != 0) {
      setNum(num-1)

    } 

  }

  const reset = () =>{
    setNum(0);
  }
  return (
    <div>
      <p>Counter: {num}</p>
      <p>{msg}</p>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={reset}>Reset</button>
    </div>

  )
}

export default Counter;