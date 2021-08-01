import "./App.css";
import React, { useState } from "react";
import List from "./_6_useCallback_List";
// to test, copy and paste entire file to App.js

// useCallback is a hook that almost nobody uses correctly
function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = () => {
    return [number, number + 1, number + 2];
  };
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  // with the code below, when we change the number input then we see "Updating items" being logged out.
  // But the problem is, when we click on Toggle theme, we also see Updating items being logged out. This is a problem and this could be fixed with useCallback

  return (
    <div className="App" style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

export default App;
