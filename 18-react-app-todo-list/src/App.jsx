import { useState } from 'react'
import './App.css'
import TodoForm from "./component/TodoForm"
import TodoContextProvider from './context/TodoContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      <TodoContextProvider>
        <TodoForm></TodoForm>
      </TodoContextProvider>

    </div>

  )
}

export default App
