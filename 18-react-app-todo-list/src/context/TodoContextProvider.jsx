import React, { useState } from 'react'
import TodoContext from './ToolContext'

function TodoContextProvider({ children }) {

  const [todos, setTodos] = useState(
    []
  );

  function addToDo(todo) {

  }

  function updateToDo(id, todo) {

  }

  function deleteToDo(id) {

  }

  function toggleComplete(id) {

  }

  return (

    <TodoContext.Provider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      {children}
    </TodoContext.Provider>

  )
}

export default TodoContextProvider 