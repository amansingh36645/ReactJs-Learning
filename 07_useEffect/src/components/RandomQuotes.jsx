import React, { useEffect, useState } from "react";

const RandomQuotes = () => {

  const [quote,setQuote] = useState('');
  const [author,setAuthor] = useState('');
  // const [num,setNum] = useState(0)

  const fetchData = async () =>{
    try{
      let response = await fetch('https://dummyjson.com/quotes/random');
    let data = await response.json();
    setQuote(data.quote);
    setAuthor(data.author);
    } catch(e){
      console.log(e.message);
    }
     
  }

  useEffect(() => { 
    //use to perform the side task queue
      fetchData() 
  },[])


  return (
    <div>
      <p> Quote: {quote}</p>
      <h1>Author: {author} </h1>
      {/* <p>How many Quotes You read Today: {num}</p> */}
      <button onClick={fetchData}>Generate Quote</button>
    </div>
  )
}

export default RandomQuotes;