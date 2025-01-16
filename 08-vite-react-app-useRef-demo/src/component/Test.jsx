import { useCallback, useEffect, useRef, useState } from 'react'
import { React } from 'react';


// src/component/Test.jsx

// This component demonstrates the use of React hooks (useState, useRef) to update the state of a counter
// and display the current state value in a div element.
function Test() {


    // Initialize the state variable to 0
    let [state, setState] = useState(0);

    // Create a ref to access the DOM node of the current state div
    // useRef is used to create a reference to a DOM element
    let count     =  useRef(null);

    // Function to update the state and log the current state div's innerHTML value
    function addState() {
        state = state + 1;


        // Log the current state div's innerHTML value
        console.log(count.current.innerHTML);
        
        // Update the state
        setState(state)
    }


    return (

        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
            <div className='flex flex-row border-2 border-red-700 rounded-lg justify-center items-center h-16 gap-x-3 p-4 bg-white shadow-md'>
                <div ref={count} className='border-2 border-blue-700 rounded-lg h-10 w-40 flex items-center justify-center text-xl font-semibold text-blue-700'>
                    Current State: {state}
                   
                </div>
                <button
                    onClick={addState}
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50'
                >
                    Change State
                </button>
            </div>
        </div>


    )
}

export default Test