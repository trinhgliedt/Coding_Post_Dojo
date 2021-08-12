import "./App.css";
import React from "react";
import FunctionContextComponent from "./hooks/_7_useContext_FunctionContextComponent";
import { ThemeProvider } from "./hooks/_7_ThemeContext";
// to test, copy and paste entire file to App.js

// Study notes for Redux is in index.js

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
