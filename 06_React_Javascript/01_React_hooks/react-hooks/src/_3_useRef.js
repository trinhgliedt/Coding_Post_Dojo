import "./App.css";
import React, { useState, useEffect, useRef } from "react";

// to test, copy and paste entire file to App.js
function App() {
  const [name, setName] = useState("");
  // the useState for renderCount below is just an example to use with the useEffect to set renderCount
  // const [renderCount, setRenderCount] = useState(0);

  // Use case #1:
  // useRef can be used to store information that persists through re-render, but it doesn't cause a re-render like state does
  // useRef can take a default value, we're using 0 as below
  const renderCount = useRef(1);
  // useRef will return an object with a key named current. And the initial value will be set to current. Like this: {current: 0}
  // when we update the current property, that's what's persisted between renders

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // the useEffect below will run an infinite loop, the component just keep rendering again and again. Which  is why useState is not a good choice to count render.
  // useEffect(() => {
  //   setRenderCount((prevRenderCount) => prevRenderCount + 1);
  // });

  // Use case #2:
  // a very common use case for ref is to move focus to an element (like an input)
  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
    // this focus way is so common that sometimes people would update the value of the input like below:
    inputRef.current.value = "Some value";
    // While the value of the inputRef changes, state is not updated, as we can see "My name is" is still blank..
    // the advice is, not to use Ref to update input or append child element this way, and to do it through states instead
  }

  // Use case 3: is to store the previous value of state: because, there's no way to get previous value of state, it's always what state is..
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
    // this is a way to save previous state without causing additional re-render that we don't actually need.
  }, [name]);

  return (
    <div className="App" style={{ margin: "3rem" }}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={focus}>Focus</button>
      <h1>
        My name is {name} and it used to be {prevName.current}
      </h1>
      <h2>I rendered {renderCount.current} times</h2>
    </div>
  );
}

export default App;
