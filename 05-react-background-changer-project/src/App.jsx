import { useState } from 'react'
import React from 'react'
import Bgchange from './component/Bgchange'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Bgchange/>
    </>
  )
}

export default App
