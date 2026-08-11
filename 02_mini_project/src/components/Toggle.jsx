import React, { useState } from "react";
  

const Toggle = () => {
  const [mode,setMode] = useState(false)

  const darkToggle = () => {
    setMode(prev => !prev)
    
  }

  return(
    <div style={mode === false ? {backgroundColor:'white',color:'black'} : {backgroundColor:'grey',color:'white'}} >
      <h1 style={mode === false ? {backgroundColor:'white',color:'black'} : {backgroundColor:'grey',color:'white'}}>Toggle Theme</h1>
      <p style={mode === false ? {backgroundColor:'white',color:'black'} : {backgroundColor:'grey',color:'white'}}>Mode: {mode}</p>
      <p style={mode === false ? {backgroundColor:'white',color:'black'} : {backgroundColor:'grey',color:'white'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, praesentium optio et similique dignissimos assumenda!</p>
      <button style={mode === false ? {backgroundColor:'white',color:'black'} : {backgroundColor:'blue',color:'white'}} onClick={darkToggle}>Click Here</button>
    </div>
  )
}

export default Toggle;