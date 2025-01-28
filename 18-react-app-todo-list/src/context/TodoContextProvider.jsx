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
     * The list of todos.
     * @type {Array<Object>}
     * @property {number} id - The id of the todo.
     * @property {string} message - The message of the todo.
     * @property {boolean} isComplete - The completion state of the todo.
     */
  const [todos, setTodos] = useState(
    [
      {
        id: Number(Date.now()),
        message: "first todo",
        isComplete: false
      }
    ]
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


  const deleteToDo = (id) => {
    let newTodoArray = todos.filter(
      todo => todo.id !== id
    )

    setTodos(newTodoArray);
  }


  const toggleComplete = (id) => {
    const newTodoArray = todos.map(
      (todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: "true" }
        }
        else {
          return todo;
        }
      }
    )

    setTodos(newTodoArray);
  }


  useEffect(() => {
    console.log("changes in todolist printing it");
    console.log(todos);

  }, [todos.length]);


  return (

    <TodoContext.Provider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      {children}
    </TodoContext.Provider>

  )
}

export default TodoContextProvider 