import React from "react";
import Card from "./components/Card";

const App = () => {
  const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    inStock: true,
  },
  {
    id: 2,
    name: "Phone",
    price: 25000,
    inStock: false,
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
    inStock: true,
  },
];


  return <div className="parent">
    {products.map((e)=>{
      return <div key={e.id}>
              <Card name={e.name} price={e.price} id={e.id} inStock={e.inStock}/>       
        
         </div>
    })}

  </div>
}

export default App;