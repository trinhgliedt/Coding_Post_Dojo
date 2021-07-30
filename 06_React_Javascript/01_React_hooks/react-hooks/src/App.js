import "./App.css";
import React, { useState, useReducer } from "react";
import Todo from "./_5_useReducer_todo_component";
// to test, copy and paste entire file to App.js

// create this object so that we don't have to keep typing increment and decrement repeatedly below
const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
};

// to define actions like this, we can ensure that state only changes in the ways we defined and not in some unexpected ways
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:

    default:
      return todos;
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  // useReducer returns an array. And this useReducer function will take 2 parameters to start: 1. a reducer, which is a function to perform on our state to get new state, and 2. an initial value. In this case, we can pass in an initial value just as 0 instead of { count: 0 }, but we're using an object here, cos generally when using reducer we'll likely deal with an object as state will be more complex than just a single value.
  // the return portion of a reducer will have 2 portions: the first portion is the state, and a function called dispatch. This dispatch function is what we'll call to update the state. Essentially the dispatch function will call the reducer function for us given certain parameters.

  // useState is not the only way to manage state in React. There's something called useReducer which also allows you to manage state and re-render components whenever state changes. And the idea behind useReducer is that it gives you a more concrete ways to handle complex states. So it gives you set actions that you can perform on your states, and it's going to convert your current states to a new version of states based on the action that you send it. If you're familiar with Redux, the useReducer hook has a very familiar pattern to Redux. I just feel that it takes away the boiler plates that associated with Redux.
  // To get started, we'll convert this counter component to useReducer because this is a simple example that will demonstrate how useReducer hook works

  // the reducer function will take 2 different things: current state, and action. Action is what we passed into the dispatch function. Whatever we call dispatch with will be set to the action argument in the reducer function

  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // payload is a common convention way of naming. Payload is basically all the variable values we're passing in with the action. Payload is an object
    // instead of having a bunch of call back function on adding todos, deleting todos, we just have one single function to handle all this like below
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(todos);
  return (
    <div className="App" style={{ margin: "3rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;
