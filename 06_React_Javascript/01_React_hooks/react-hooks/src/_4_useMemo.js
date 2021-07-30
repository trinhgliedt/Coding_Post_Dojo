import "./App.css";
import React, { useState, useEffect, useMemo } from "react";

// to test, copy and paste entire file to App.js
function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // First use case:
  // Every time the application re-render, whether the input or theme changed, the slow function got called, and this causes a big performance issue.
  // In order to avoid re-running functions that don't change, React has a way to solve this by using useMemo. Memo stands for memoization, which is a way for caching a value so that you don't have to recompute it every time.
  // In our example here, slow function takes an input of number and it will give us the same output if the input is the same. So we can cache that input value number and the output it gives us, that way is the input doesn't change, we don't have to recalculate our slow function over and over again.
  // This is the old way without using useMemo
  // const doubleNumber = slowFunction(number);
  // This is to use useMemo:
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
    // number is the dependency of this useMemo. If our number change, we'll rerun the code in this useMemo. But if our number doesn't change we don't need to rerun the code
    // So now with this, when we click change input, the slow function will run, but when we click change theme, the slow function won't run
    // some cons of useMemo: the reason why we don't want to use this for everything is that it require memory overhead and performance overhead.  For example, this useMemo function must be called every single render of your component (so you're calling additional function), and it's saving the previous value in some memory variables, so you're forcing your memory to get larger every time you useMemo. This isn't a huge deal, but if you use it everywhere in your application it would require more function run and memory where not using it would have been better. So we should just use it for this use case, when the function you call is incredibly slow
  }, [number]);
  // old themeStyles object, without using useMemo
  // const themeStyles = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  // };

  // useMemo for themeStyles object as explained below
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
    // put dark as dependencies as it's the only thing the object depends on
    // now, changing theme will cause this to log but when we change input, this will not rerun
  }, [dark]);

  // Second use case: referencial equality
  // So in javascript, let say if we duplicate themeStyles to be themeStyles2. These 2 have the exact value but they are not equal cos they are referencing 2 different places in memory.
  // for this use case, we'll have a useEffect that would rerun every time themeStyles changes.
  useEffect(() => {
    console.log("Theme changed");
    // So, when we click on Change theme button, we see this Theme changed printed out. However, when we change the number, we also see Theme changed being printed out. The reason is that every time we run our function, we get a new themeStyles object being created, and this new themeStyles object is not the same as the old themeStyles object even though they have the exact same value, they references different places in memory.
    // So, to make sure that we only rerun the function when our themeStyles object gets re-updated, we can save themeStyles object in a useMemo
  }, [themeStyles]);
  return (
    <div className="App" style={{ margin: "3rem" }}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

export default App;
// The slow function below is just to demonstrate bad case scenario when there are slow functions in the application and how they can affect run time for re-rendering components
function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000000; i++) {
    return num * 2;
  }
}
