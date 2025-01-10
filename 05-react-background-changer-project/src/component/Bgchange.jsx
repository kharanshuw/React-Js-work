import React, { useState } from 'react'

function Bgchange() {



  const [color, setColor] = useState("olive");
  return (
    <div className='' style={{ backgroundColor: color, width: "100%", height: "100vh" }}>

      <div className='fixed flex flex-wrap top-10   w-full start-0 end-0 rounded justify-center '>

        <div className='flex flex-wrap pt-2 pb-2 ps-3 pe-3   rounded-full  bg-white shadow-2xl  gap-3 mt-2 mb-2'>

          <button className='outline-none px-4 py-1 rounded-full text-white font-medium  ' style={{backgroundColor:"red"}}  onClick={()=>{
            setColor("red")
          }}>
            red
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white font-medium  ' style={{backgroundColor:"green"}} onClick={()=>{
            setColor("green")
          }}>
            green
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium  ' style={{backgroundColor:"black"}} onClick={()=>{
            setColor("black")
          }}>
            black
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-black font-medium  ' style={{backgroundColor:"yellow"}} onClick={()=>{
            setColor("yellow")
          }}  >
            yellow
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white font-medium  ' style={{backgroundColor:"blue"}} onClick={()=>{
            setColor("blue")
          }} >
            blue
          </button>
        </div>


      </div>



    </div>
  )
}

export default Bgchange