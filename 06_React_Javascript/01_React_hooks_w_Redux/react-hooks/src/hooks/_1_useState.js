import "./App.css";
import React, { useState } from "react";

// to test, copy and paste entire file to App.js
function countInitial() {
  console.log("Count initial");
  return 4;
}
function App() {
  // const [count, setCount] = useState(4);
  // note: set initial state with a function like below, the function will only run once
  // const [count, setCount] = useState(() => {
  //   console.log("initial function");
  //   return 4;
  // });
  // Same, set initial state with a function like below, the function will only run once
  // const [count, setCount] = useState(() => countInitial());

  // But set initial state like below the function is run every time any state changes.. So if the initial function takes a lot of time or space to run, we should use the function method inside state like above.
  // const [count, setCount] = useState(countInitial());

  // when working with object in state, we need to make sure to spread the rest of the object when updating one piece od state.
  // a better practice would be to use multiple state variable instead of an object of state
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;
  function decrementCount() {
    // setCount((prevCount) => prevCount - 1);
    // setCount((prevCount) => prevCount - 1);
    // if we want to decrement count by 2, below is the wrong way of setting state. Need to use a function inside state like above.
    // setCount(count - 1);
    // setCount(count - 1);

    setState((prevState) => {
      // if we do the below without spreading out the prev state, theme will be overwritten
      // return { count: prevState.count - 1 };

      // so we need to do the below
      return { ...prevState, count: prevState.count - 1 };
    });
  }
  function incrementCount() {
    // setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App" style={{ margin: "3rem" }}>
      <button onClick={decrementCount}>-</button>
      <span style={{ margin: "1rem" }}>{count}</span>
      <span style={{ margin: "1rem" }}>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
