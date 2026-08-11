import React, { useState } from "react";

const HidePass = () => {
  const [mode, setMode] = useState(true)
  const [btn,setBtn] = useState(true)
  const password = () => {
    setMode(prev => !prev)
  }

  return(
    <div>
      <input type={mode ? "password" : "text"} name="password" id="" />
      <button onClick={password} >{mode ? "Show Password" : "Hide Password"}</button>

    </div>
  )
}

export default HidePass;