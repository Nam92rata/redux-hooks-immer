
import { v4 as uuidv4 } from 'uuid'
import { CREATE_TODO } from '../actionTypes'
export const initialState = {
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
                ...state,
                todos: [
                    ...state.todos,
                    action.data
                ]
            }
        default:
            return state
    }
}