import { useState } from 'react'
import React from 'react'
import Test from './component/Test'

function App() {

  let [state, setState] = useState(true);

  return (

    <div className='flex flex-wrap flex-col border border-4 h-dvh justify-center content-center '>

      <button type="button" className="text-black bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 "  style={{background:"#F5F5DC"}}
      onClick={() => setState(!state)}
      
      >{state ? "OFF" : "ON"}</button>


      {state ? <Test/> : ""} 

    </div>

  )
}

export default App
