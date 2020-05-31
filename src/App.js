import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions, selectors } from './store/todoActions';
import './App.css';

function App({ todos, addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const onChangeHandler = (e) => {
    setNewTodo({ [e.target.name]: e.target.value })
  }

  const onClickHandler = (e) => {
    e.preventDefault();
    addTodo(newTodo);
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
          {todos.map(el => {
            return (
              <li key={el.id}>{el.title}</li>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  console.log("todos", state);
  const todos = selectors.selectTodos(state)
  return { todos }
}

const mapDispatchToProps = dispatch => ({
  addTodo: data => dispatch(actions.addTodo(data))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
