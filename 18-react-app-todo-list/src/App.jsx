import './App.css'
import React, { useContext } from 'react';

import TodoForm from "./component/TodoForm"
import TodoContextProvider from './context/TodoContextProvider'
import TodoItem from './component/TodoItem'


function App() {
  
  

  return (

    <div>

      <TodoContextProvider >
        <div>
        <TodoForm></TodoForm>
        </div>
       

       <div>
        {
          todos.map((todo) => { 
            return <div key = {todo.id}
            className='w-full'>
              
              <TodoItem todo={todo} />
              
              
              </div>
          })
        }
       </div>

      </TodoContextProvider>

    </div>

  )
}

export default App
