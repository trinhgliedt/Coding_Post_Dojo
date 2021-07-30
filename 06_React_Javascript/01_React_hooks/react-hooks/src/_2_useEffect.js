import "./App.css";
import React, { useState, useEffect } from "react";

// to test, copy and paste entire file to App.js
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addventListener("resize", handleResize);

    // the function inside return for useEffect can be used as a clean up. In this example, if we don't clean up, the even resize will be listened to which might slow down the app.
    // when useEffect is run, whatever in Return will be ran first to clean up the last run, then the content of useEffect will be run.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App" style={{ margin: "3rem" }}>
      {windowWidth}
    </div>
  );
}

export default App;
