import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

//THIS IS INDEX.JS. ALL THE CODE BELOW IS USING REDUX AND NOT REACT-REDUX

// Example of component structure to use in this tutorial
//               App
// Search     Movie List    Login
//              Movie

// STORE --> GLOBALIZED STATE
// store is basically a globalized state. Store holds all the data for state for our application. For example:
// store: MovieList
// isLogged: false

// ACTION --> INCREMENT
// action describes what you want to do. For example of a counter app, action could be increment. The action just describe what you want to do, but doesn't mean you're doing it yet.
// An action is  function that returns an object
// const increment = () => {
//   return {
//     // people usually name it type, but type is basically just the name of the action
//     type: "INCREMENT",
//   };
// };
// const decrement = () => {
//   return {
//     // people usually name it type, but type is basically just the name of the action
//     type: "DECREMENT",
//   };
// };

// // REDUCER
// // Reducer describe how your action transform state into the next state.
// // When the action is called, reducer is going to check which action you did, and based on the action it's going to modify our store
// // We can create a reducer that takes care of all the actions related to our counter
// // Reducer is a function that returns an object
// // Reducer will take 2 parameters: first one is the initial state of the counter
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };
// // Connect reducer to the store
// let store = createStore(counter);

// // Display it in the console
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH
// // Dispatch is the way we can execute that action. We can say hey, dispatch this action to the reducer, then the reducer can check what to do, then the store gets updated
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(decrement());

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
