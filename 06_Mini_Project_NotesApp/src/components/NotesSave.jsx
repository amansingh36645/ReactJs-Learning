import React from "react";

const NotesSave = ({heading,details}) => {
  return (

        <div className="cards bg-pink-300 rounded h-auto m-4 p-4 w-56">
            <h1 className="font-bold text-2xl text-center p-3">{heading}</h1>
            <p className="text-2xl ml-2">{details}</p>
        </div>
    
  )
}

export default NotesSave;