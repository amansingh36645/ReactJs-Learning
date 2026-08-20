import React, { useEffect, useState } from "react";

const NotesApp = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setNotes((prev) => [
      ...prev,
      {
        title: title,
        details: details,
      },
    ]);
    setTitle("")
    setDetails("")
  };

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(notes));
  },[notes])

  useEffect(()=>{
    let data = localStorage.getItem("user")
    if(data){
    let result =  JSON.parse(data)
    setNotes(result)
  }
  },[])
  


  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <h1>Notes App</h1>
          <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            placeholder="Enter Notes"
            value={details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
          ></textarea>
          <button>Add Notes</button>
        </form>
      </div>
      <h1>Recent Notes</h1>
      {notes.map((e,idx) => {
        return (
          <div key={idx}>
            <h3>{e.title}</h3>
            <p>{e.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NotesApp;
