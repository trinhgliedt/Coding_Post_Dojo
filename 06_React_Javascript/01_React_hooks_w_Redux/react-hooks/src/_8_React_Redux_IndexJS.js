import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducers from "./redux/reducers";
import { Provider } from "react-redux";

//THIS IS INDEX.JS. ALL THE CODE BELOW IS USING REACT-REDUX
// For this tutorial, the store will be kept in here, but reducers and actions are in separate files
// Add redux devtools extension: https://github.com/zalmoxisus/redux-devtools-extension
// To view it, go to browser -> inspect -> Redux -> State
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// STORE --> GLOBALIZED STATE
// store is basically a globalized state. Store holds all the data for state for our application.

// ACTION --> INCREMENT
// action describes what you want to do. For example of a counter app, action could be increment. The action just describe what you want to do, but doesn't mean you're doing it yet.
// An action is  function that returns an object
// Note: Action must be plain object. In SimpleTut video, he demonstrated using an async function in action (signInUser async dispatch await auth.signInWithEmailAndPassword) and the browser gave an error. The solution is to use Redux Thunk middleware
// https://www.youtube.com/watch?v=U39qSt-t3RM&list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q&index=9, 22:00

// Another way to handle asynchronous code instead of using Redux Thunk is to use Redux Saga: https://www.youtube.com/watch?v=su9XgeW7g-Y&list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q&index=10
// What Saga does is to allow you to take the asynchronous code out of the action creator and it will actually intercept action that you tell it to, it will call a generator function that can handle the asynchronous event and then it will dispatch another action to then go ahead and update your store

// REDUCER
// Reducer describe how your action transform state into the next state.
// When the action is called, reducer is going to check which action you did, and based on the action it's going to modify our store
// We can create a reducer that takes care of all the actions related to our counter
// Reducer is a function that returns an object
// Reducer will take 2 parameters: first one is the initial state of the counter

// DISPATCH
// Dispatch is the way we can execute that action. We can say hey, dispatch this action to the reducer, then the reducer can check what to do, then the store gets updated

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
