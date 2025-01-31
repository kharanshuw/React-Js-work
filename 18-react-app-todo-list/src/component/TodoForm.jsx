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
        <div className="mb-6">
            {/* Form to take input message which will add todo */}
            <form onSubmit={add} className="flex">
                <input
                    type="text"
                    placeholder="Write todo..."
                    className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={todoMessage}
                    onChange={(e) => {
                        setTodoMessage(e.target.value);
                    }}
                />
                <button
                    type="submit"
                    className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default TodoForm