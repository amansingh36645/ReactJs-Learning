import React, { useState } from "react";

const MiniProjectLogin = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    setSubmittedname(name);
    setSubmittedpass(pass);
    console.log("Form Submitted"); 
  }

  const [name,setName] = useState('')
  const [pass,setPass] = useState('');
  const [ submittedname, setSubmittedname] = useState('');
  const [ submittedpass, setSubmittedpass] = useState('');
   
  return (
    <>
    <form onSubmit={submitHandler} >
      <label htmlFor="username">Username:</label>
      <input type="text" placeholder="Enter Username" value={name} onChange={(e) => {
        setName(e.target.value);
        
      }} />
      <label htmlFor="Password">Password:</label>
      <input type="password" name="" placeholder="Enter Password" value={pass} onChange={(e) => {
        setPass(e.target.value)
      }} />
      <button>Submit</button>
    </form>
      <p style={submittedname ? {display:"inline-block"} : {display:"none"} }>Username: {submittedname}</p>
      <p style={submittedpass ? {display:"inline-block"} : {display:"none"} }>Password: {submittedpass}</p>
    </>
  )

}

export default MiniProjectLogin;