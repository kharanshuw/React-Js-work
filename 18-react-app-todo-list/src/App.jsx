import './App.css'
import React, { useContext } from 'react';

import TodoForm from "./component/TodoForm"
import TodoContextProvider from './context/TodoContextProvider'
import TodoItemList from './component/TodoItemList'


function App() {



  return (

    <div>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <TodoContextProvider>
          <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">My Todo List</h1>
            <TodoForm />
            <TodoItemList />
          </div>
        </TodoContextProvider>
      </div>

      
    </div>

  )
}

export default App
