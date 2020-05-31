import React, { useState, useReducer, use } from 'react';
import { useImmer } from 'use-immer';
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useImmer([]);

  const onChangeHandler = (e) => {
    setNewTodo({ [e.target.name]: e.target.value })
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    setTodos(draft => {
      draft.push(newTodo);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        Todo App
        <input
          onChange={onChangeHandler}
          name={"title"}
        /><button
          onClick={onClickHandler}>Add</button>
        Todo List
        <ul>
          {todos.map((el, index) => {
            return (
              <li key={index}>{el.title}</li>
            )
          })}
        </ul>
      </header>

    </div>

  );
}

export default App;


