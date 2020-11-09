import "./App.css";
import React, { useState } from "react";
import Quotes from "../Quotes/index";

function App() {
  const [id, setId] = useState("");

  // function getRandomId() {
  //   let randomId = Math.floor(Math.random() * 10) + 1;
  //   console.log(randomId);
  //   setId(randomId);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p>Happy Project Week</p>
      </header>
      <body>
        <button
          onClick={() => {
            getRandomId();
          }}
        >
          Inspire Me
        </button>
        <Quotes />
      </body>
    </div>
  );
}

export default App;
