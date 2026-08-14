import React, { useState } from "react";
import MiniProjectGpt from "./components/MiniProjectGpt";
import MiniProjectLogin from "./components/MiniProjectLogin";

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name);
    
  }

  //two way binding

  const [name,setName] = useState('')


  return (
    <div>
      {/* <form onSubmit={
        submitHandler
      } >
      <input onChange={(e)=>{
        setName(e.target.value);
        // console.log(name);
        
      }} type="text" placeholder="Enter the First Name" value={name} />
      <input type="text" placeholder="Enter the Second Name" />
      <input type="email" placeholder="example@ex.com" />
      <button>Submit</button>
      </form> */}

      {/* <MiniProjectGpt/> */}
      <MiniProjectLogin/>

    </div>
  )
}

export default App;