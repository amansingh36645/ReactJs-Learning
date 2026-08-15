import React, { useState } from "react";
import NotesSave from "./NotesSave";

const NotesApp = () => {

  const [heading,setHeading] = useState('');
  const [details,setDetails] = useState('');
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
      e.preventDefault();
      setHeading('');
      setDetails('');
      setNotes(prev => [...prev,{
        heading: heading,
        details: details
      }])
  }

  return (
    <div className="flex justify-between ">
      <form onSubmit={submitHandler} className="flex w-1/2">
        <div className="addNotes flex flex-col gap-4 w-full p-4">
        <h1 className="text-gray-300">Add Notes</h1>
        <input className="bg-gray-300 p-2 rounded " type="text" placeholder="Enter Heading" value={heading} onChange={(e)=>{
          setHeading(e.target.value)
        }} />
        <textarea className="bg-gray-300 p-2 rounded" name="" id="" placeholder="Enter details " value={details} onChange={(e)=>{
          setDetails(e.target.value)
        }}></textarea>
        <button className="bg-amber-500 rounded">Add Note</button>
        </div>
      </form>
      
      <div className="flex flex-wrap w-1/2">
        {
          notes.map((e)=>{
            return (
              <NotesSave key={notes[0]} heading={e.heading} details={e.details}/>
            )
          })
        }
      </div>
    </div>  
  )
}

export default NotesApp;