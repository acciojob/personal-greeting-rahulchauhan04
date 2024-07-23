import React  from "react";
import { useState } from 'react';
import './../styles/App.css';

const App = () => {

   const [name, setName] = useState("");

   const handleChange = (event) => {
    setName(event.target.value)
   }

  return (
    <div>
      <label htmlFor="nameInpput">Enter your name:</label>
      <br></br>
      <input type="text" value={name} id="nameInput" onChange={handleChange}></input>
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
