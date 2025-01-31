import React, { useEffect, useState } from 'react'
import TodoContext from './ToolContext'


/**
 * A React component that provides a context for managing a list of todos.
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children of the component.
 * @returns {React.ReactElement} The rendered component.
 */
function TodoContextProvider({ children }) {


  /**
 * Initializes the todos state with stored todos from local storage.
 *
 * @returns {Array} The initial todos state, either loaded from local storage or an empty array.
 */
  const [todos, setTodos] = useState(
    /**
     * Function to initialize the todos state.
     *
     * @returns {Array} The initial todos state.
     */
    () => {
      /**
       * Retrieves the stored todos from local storage.
       *
       * @type {string|null} The stored todos as a JSON string, or null if not found.
       */
      const storedTodos = localStorage.getItem('todos');

      /**
       * Parses the stored todos JSON string into an array, or returns an empty array if not found.
       *
       * @returns {Array} The parsed todos array, or an empty array.
       */
      return storedTodos ? JSON.parse(storedTodos) : [];
    }
  );

  /**
   * Adds a new todo to the list of todos.
   * @param {Object} todoObj - the new todo object to be added
   * @param {number} todoObj.id - the id of the new todo
   * @param {string} todoObj.message - the message of the new todo
   * @param {string} todoObj.isComplete - the completion state of the new todo
   */
  const addToDo = (todoObj) => {
    console.log('todoobj', todoObj);
    setTodos(
      (prev) => {
        const newtodos = [...prev, todoObj];

        console.log('newTodos: ', newtodos);
        return newtodos;
      }
    );
  }

  /**
   * Updates an existing todo in the list of todos.
   * @param {number} id - The id of the todo to update.
   * @param {Object} newTodoObj - The new todo object with updated properties.
   * @return {void}
   */

  const updateToDo = (id, newTodoObj) => {
    let newTodoArray = todos.map(
      (todo) => {
        if (todo.id === id) {
          return newTodoObj;
        }
        else {
          return todo;
        }
      }
    )

    setTodos(newTodoArray);
  }


  /**
   * Deletes a todo from the list of todos.
   * @param {number} id - The id of the todo to delete.
   * @return {void}
   */
  const deleteToDo = (id) => {
    let newTodoArray = todos.filter(
      todo => todo.id !== id
    )

    setTodos(newTodoArray);
  }


  /**
   * Toggles the completion state of a todo.
   * @param {number} id - the id of the todo to toggle
   * @return {void}
   */
  const toggleComplete = (id) => {
    const newTodoArray = todos.map(
      (todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete }
        }
        else {
          return todo;
        }
      }
    )

    setTodos(newTodoArray);

  }

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    console.log('setting todos from localStorage printing from todocontextprovider', todos);

    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);





  return (

    // TodoContext Provider Component: 
    // This component wraps the application and provides the TodoContext to all its child components.
    // It shares the todos state and the functions to manipulate it (addToDo, updateToDo, deleteToDo, toggleComplete) 
    // with all the components that need access to the todo list.
    <TodoContext.Provider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      {children}
    </TodoContext.Provider>

  )
}

export default TodoContextProvider 