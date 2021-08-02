import "./App.css";
import React, { useState, useCallback } from "react";
import List from "./_6_useCallback_List";
// to test, copy and paste entire file to App.js

// useCallback is a hook that almost nobody uses correctly
function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  // with the code below, when we change the number input then we see "Updating items" being logged out.
  // But the problem is, when we click on Toggle theme, we also see Updating items being logged out. This is a problem and this could be fixed with useCallback.
  // The reason we're running into this problem is that the getItem function inside the App.js is being recreated every time we render our app component. Every time we change this number, this function is being recreated over and over again. And as it's being created as a brand new function, when it's passed into our list, this is a new function every time our component renders. Which means that every single time it's going to be different, even if the actual number itself didn't change. And this is where we want to use the useCallback hook.
  // So what useCallback does is, just like useMemo, it's not going to rerun the code inside of it unless certain parameters change. And that means that every time we call our app component here this getItems function is only updated when it needs to, for example when the number changes
  // So we'll import useCallback, and this has the exact same signatures as useMemo
  // const getItems = () => {
  //   return [number, number + 1, number + 2];
  // };
  // So we'll just wrap our getItems function in useCallback. And the second parameter of this useCallback is our array of dependency. And as you can see, the only thing that it depends on is the number object, so we'll put number in the dependency array.
  // When we click save, we'll see that the app still works the same, but when we inspect, we'll see that when we change the number it will log out Updating items, but when we change our theme, this doesn't actually update our items. And the reason for this, is that useCallback will only recreate our getItems function when the number changes, and it's not going to recreate that when the dark variable changes.
  // And if you're familiar with useMemo, you'll notice that this code looks very similar to useMemo, but the one big difference with useMemo and useCallback is: useMemo takes a function and it will return to you the return value of the function, but useCallback takes a function and the function is actually what the useCallback returns.
  // So in this example here, if we have useMemo instead of useCallback, what would happen is that getItems will just be set to this array [number, number + 1, number + 2] instead of being set to this entire function. While with useCallback, since we're returning the function that we passed to it, getItems then being set to this entire function and not just the return value of that function, which allows us to use this as a function later on in the List component where we actually call getItems, and this actually allows us to pass parameter to this function.
  // Let's say we want to pass a parameter 5 as an incrementor. And this is not really something we can do with useMemo, cos useMemo doesn't return the function, it returns the return value of the function.
  // And the only reason you every want to use this useCallback hook is if you need to worry about referential equality, which is very similar to why you'd use useMemo. So you can see here, this getItems changes every time because we created a brand new function, but with useCallback we're not creating a new function unless we need to, so the referential equality of getItems the first time it renders and the next time it renders are to be the same as long as the number input here doesn't change.
  // The only other instance I can think of where useCallback can be useful is if for some reasons creating a function is really really slow, then you'd want to use useCallback so that you'll only create that function when you need to and not recreating it every time you re-render. But that's something you probably never run into so I wouldn't worry too much about it.
  const getItems = useCallback(
    (incrementor) => {
      return [
        number + incrementor,
        number + 1 + incrementor,
        number + 2 + incrementor,
      ];
    },
    [number]
  );
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

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
