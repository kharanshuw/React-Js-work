import React from 'react'
import { useContext } from 'react';
import TodoContext from '../context/ToolContext';
import TodoItem from './TodoItem'

/**
 * A React component for displaying a list of todos.
 * It uses the TodoContext to get the list of todos.
 * It renders a div with a class of "space-y-2" that contains a list of TodoItem components.
 * Each TodoItem component is passed a todo object as a prop.
 * @returns {JSX.Element} The rendered component.
 * @example
 * <TodoItemList />
 */
function TodoItemList() {

    const { todos } = useContext(TodoContext);

    return (

        <div className="space-y-2">
            {/*
      Map over the todos array and render a TodoItem component for each todo
      The key prop is set to the todo's id to help React keep track of the components
    */}
            {todos.map((todo) => (


                <div key={todo.id} className="w-full">


                    {/* 
          Render a TodoItem component and pass the todo object as a prop
          This allows the TodoItem component to access the todo's data
        */}
                    <TodoItem todo={todo} />
                </div>
            ))}
        </div>
    );
}

export default TodoItemList
