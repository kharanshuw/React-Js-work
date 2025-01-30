import React, { useState } from 'react'
import { useContext } from 'react';
import TodoContext from '../context/ToolContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setTodoEditable] = useState(false);

    const [todoMessage, setTodoMessage] = useState(todo.message);


    const { updateToDo, deleteToDo, toggleComplete } = useContext(TodoContext);


    const editTodo = () => {
        updateToDo(todo.id, { ...todo, message: todoMessage });

        setTodoEditable(false);
    }


    const toggle = () => {
        toggleComplete(todo.id);
    }

    const onTodoMessageChange = (e) => {
        const inputValue = e.target.value.trim();
        if (inputValue.length > 0) {
            try {
                setTodoMessage(inputValue);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (

        <div className='flex flex-row'>
            <input
                type="checkbox"
                className='cursor-pointer'
                checked={todo.isComplete}
                onChange={toggle}
            />


            {/* input message */}
            <input
                type="text"
                readOnly={!isTodoEditable}
                value={todoMessage}
                onChange={onTodoMessageChange}
            />

            {/* button save edit */}

            <button
                onClick={() => {
                    if (todo.isComplete === true) {
                        return;
                    }

                    if (isTodoEditable) {
                        editTodo();
                    }
                    else {
                        setTodoEditable((prev) => !prev);
                    }
                }}
                disabled={todo.isComplete}
            >
                {isTodoEditable ? "save" : "edit"}
            </button>



            <button
                onClick={() => deleteToDo(todo.id)}
            >
                deleteToDo
            </button>




        </div>
    )
}

export default TodoItem