import React,{ useState }  from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div style={{ margin: "21px" }}>
      <label htmlFor="nameInput">Enter your name:</label>
      <input
        id="nameInput"
        type="text"
        value={name}
        onChange={handleChange}
        style={{ marginLeft: "10px", padding: "5px" }}
      />
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
