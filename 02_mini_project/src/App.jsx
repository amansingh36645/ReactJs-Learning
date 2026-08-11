import React from "react";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import HidePass from "./components/HidePass";
import InstaLike from "./components/InstaLike";

const App = () =>{
  return (
    <div>
      <Counter/>
      <Toggle />
      <HidePass />
      <InstaLike/>
    </div>

  )
}

export default App;