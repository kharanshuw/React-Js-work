import React, { useState } from 'react'
import { useContext } from 'react';
import TodoContext from '../context/ToolContext';

/**
 * A React component for rendering a todo item.
 * @param {Object} props - The props object.
 * @param {Object} props.todo - The todo object to render.
 * @param {number} props.todo.id - The id of the todo.
 * @param {string} props.todo.message - The message of the todo.
 * @param {boolean} props.todo.isComplete - The completion state of the todo.
 * @returns {React.ReactElement} The rendered component.
 */
function TodoItem({ todo }) {
    // State variables to manage the editability of the todo item
    const [isTodoEditable, setTodoEditable] = useState(false); // Flag to indicate if the todo item is in edit mode

    // State variable to store the todo message
    const [todoMessage, setTodoMessage] = useState(todo.message); // Initialize with the current todo message

    // Destructure the TodoContext to access the functions to update, delete, and toggle the todo item
    const {
        updateToDo, // Function to update the todo item
        deleteToDo, // Function to delete the todo item
        toggleComplete // Function to toggle the completion status of the todo item
    } = useContext(TodoContext);

    /**
     * Edits the todo item with the id of todo.id.
     * The todo item is updated with the message of todoMessage.
     * The todo item is also set to not editable after the update.
     * @function
     * @return {void}
     */
    const editTodo = () => {
        updateToDo(todo.id, { ...todo, message: todoMessage });

        setTodoEditable(false);
    }


    /**
     * Toggles the completion state of the todo item with the id of todo.id.
     * @function
     * @return {void}
     */
    const toggle = () => {
        toggleComplete(todo.id);
    }

    /**
     * Handles the change event of the input element of the todo item's message.
     * Trims the input value and only updates the todoMessage state if the trimmed value is not empty.
     * If the trimmed value is empty, it does not update the todoMessage state to prevent the todo item's message from being empty.
     * It also handles any errors that may occur during the update of the todoMessage state by logging the error to the console.
     * @param {Event} e - The event object.
     * @function
     * @return {void}
     */
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

        //         Todo Item Container: 
        //   This div contains the todo item's checkbox, message, and action buttons.
        //   It has a gray background, padding, rounded corners, and a shadow to give it a card-like appearance.

        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-md shadow-sm">



            {/* Checkbox and Todo Message Container:
            This div contains the checkbox and the todo message.
            It is displayed as a flex container to align the checkbox and message horizontally. */}

            <div className="flex items-center">


                {/* 
                 Checkbox: 
      This checkbox is used to mark the todo item as complete.
      It has a blue color and a rounded shape. */}
                <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer focus:ring-blue-500"
                    checked={todo.isComplete === true}
                    onChange={toggle}
                />


                {/*  Todo Message: 
      This is the text content of the todo item.
      If the todo item is in edit mode, it is displayed as a text input field.
      Otherwise, it is displayed as a span element. */}

                {isTodoEditable ? (
                    <input
                        type="text"
                        value={todoMessage}
                        onChange={onTodoMessageChange}
                        className="ml-3 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ) : (
                    <span
                        className={`ml-3 ${todo.isComplete ? 'line-through text-gray-500' : 'text-gray-800'
                            }`}
                    >
                        {todo.message}
                    </span>
                )}
            </div>


            {/* 
             Action Buttons Container: 
    This div contains the edit and delete buttons.
    It is displayed as a flex container to align the buttons horizontally. */}
            <div className="flex items-center space-x-2">

                {/*  Edit Button: 
      This button is used to edit the todo item.
      If the todo item is in edit mode, it is displayed as a "Save" button.
      Otherwise, it is displayed as an "Edit" button. */}
                {!todo.isComplete && (
                    <button
                        onClick={() => {
                            if (isTodoEditable) {
                                editTodo();
                            } else {
                                setTodoEditable(true);
                            }
                        }}
                        className="text-blue-500 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                        {isTodoEditable ? 'Save' : 'Edit'}
                    </button>
                )}



                {/* Delete Button: 
      This button is used to delete the todo item.
      It has a red color and a rounded shape. */}
                <button
                    onClick={() => deleteToDo(todo.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
                >
                    Delete
                </button>
            </div>
        </div>


    )
}

export default TodoItem