import React from "react";
import {useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }}>Click to Redirect</button>
    </div>
  );
};

export default Contact;
