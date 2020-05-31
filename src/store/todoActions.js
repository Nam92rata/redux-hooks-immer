import { v4 as uuidv4 } from 'uuid';

// ACTION TYPES
import { CREATE_TODO } from './actionTypes';

//SELECTOR
export const selectTodos = state => state.todoReducer.todos;

//ACTION
const addTodo = data => ({
    type: CREATE_TODO,
    data: {
        id: uuidv4(),
        ...data,
        isCompleted: false
    }
})

//EXPORTS
export const selectors = {
    selectTodos,
}

export const actions = {
    addTodo
}

