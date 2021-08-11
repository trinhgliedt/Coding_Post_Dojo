import "./App.css";
import React, { createContext } from "react";

// to test, copy and paste entire file to App.js

// Study notes for Redux is in index.js

function App() {
  // This will create an object, called MyContext that we can use to share information throughout our application. There is an option to add default context by passing it in as an argument to the createContext method, but we will not do that for the time being.
  const myContext = createContext();
  return <div className="App"></div>;
}

export default App;
