import React from 'react'
import TodoContext from '../context/ToolContext';
import { useState } from 'react';
import { useContext } from 'react';

/**
 * A React component for adding new todos to the list.
 * @return {JSX.Element} The rendered component.
 */
function TodoForm() {

    /**
  * The message of the new todo.
  * @type {string}
  */
    const [todoMessage, setTodoMessage] = useState("");


    /**
 * The context object for managing the list of todos.
 * @type {Object}
 * @property {function} addToDo - The function for adding a new todo to the list.
 */
    const { addToDo } = useContext(TodoContext);

    /**
     * Handles the submission of the form to add a new todo to the list.
     * @param {Event} e - The event object.
     * @return {void}
     */
    const add = (e) => {

        //prevent default
        e.preventDefault();
        // check if todoMessage is empty
        // if empty return from function
        if (!todoMessage) {
            return;
        }

        // if todoMessage is not empty
        // add todo to list
        else {
            addToDo({ id: Number(Date.now()), message: String(todoMessage), isComplete: Boolean(false) });
            setTodoMessage("");
        }
    }


    return (
        <div>

            {/* form to take input message which will add todo  */}
            <form onSubmit={add} className='flex'>
                <input
                    type="text"
                    placeholder='write todo ..'
                    className=''
                    value={todoMessage}
                    onChange={(e) => {
                        setTodoMessage(e.target.value);
                    }}
                />

                <button type='submit'>
                    add
                </button>





            </form>
        </div>
    )
}

export default TodoForm