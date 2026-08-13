import React, { useState } from "react";

const App = () =>{

  //Till now only leanred useState in Hooks update later
  
  const [num,setNum] = useState(0);

  return (
    <div>
      <p>Counter: {num}</p>
      <button onClick={()=>{
        setNum(num+1);
      }}>Increament</button>
      <button onClick={()=>{
        setNum(num-1);
      }}>Decreament</button>

    </div>

  )

}

export default App;