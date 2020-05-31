
import { v4 as uuidv4 } from 'uuid'
import { CREATE_TODO } from '../actionTypes'
import produce from "immer";

const initialState = {
    todos: [
        {
            id: uuidv4(),
            title: 'this is a title',
            isCompleted: false
        },
    ],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return {
                todos: produce(state.todos, draftState => {
                    draftState.push(action.data)
                })
            }
        default:
            return state
    }
}