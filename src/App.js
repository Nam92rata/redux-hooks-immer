import React, { useState, useReducer, use } from 'react';
import { actions } from './store/todoActions';
import todoReducer, { initialState } from './store/reducers/todoReducer';
import { todoContext } from './todoContext';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [newTodo, setNewTodo] = useState("");

  const onChangeHandler = (e) => {
    setNewTodo({ [e.target.name]: e.target.value })
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(actions.addTodo(newTodo));
  }
  return (
    <todoContext.Provider value={state}>
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
            {state.todos.map(el => {
              return (
                <li key={el.id}>{el.title}</li>
              )
            })}
          </ul>
        </header>

      </div>

    </todoContext.Provider>

  );
}

export default App;


