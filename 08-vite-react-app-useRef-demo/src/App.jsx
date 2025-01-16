import { useState } from 'react'
import React from 'react'
import Test from './component/Test'

function App() {

  let [state, setState] = useState(true);

  return (

    <div >
        <Test></Test>
    </div>

  )
}

export default App
