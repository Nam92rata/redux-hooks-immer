import React, { useContext } from 'react';
import { todoContext } from './todoContext';

function TodoK(props) {
    const todoContextList = useContext(todoContext);
    console.log("todoContextList", todoContextList)
    return (
        <div style={{ color: "white" }}>
            todoK
        </div>
    )
}

export default TodoK;