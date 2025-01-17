import { useCallback, useEffect, useState } from 'react'
import React from 'react'
import { getPost } from './api/index.js'

import PostCard from './component/PostCard.jsx';


function App() {

  // Use the useState hook to initialize the data state variable to null
  //data is a state variable used to store the data fetched from the API
  const [data, setData] = useState(null);


  // Use the useCallback hook to memoize the getValue function
  // This function will only be recreated when the dependencies change
  //getValue is a callback function used to fetch the data from the API
  let getValue = useCallback(
    // Define the getValue function
    () => {
      // Call the getPost function and handle the response
      getPost().then(
        // When the response is received, update the data state variable
        (res) => {
          setData(res)
        }
      )
    },
    // Specify the dependencies for the getValue function
    // In this case, there are no dependencies, so the function will only be called once
    []
  )


  // Use the useEffect hook to handle side effects
  useEffect(
    // Define the effect function
    () => {
      // Call the getValue function to fetch the data
      getValue()
    },
    // Specify the dependencies for the effect function
    // In this case, the effect function depends on the getValue function
    [getValue]
  )

  // Return the JSX for the App component
  return (
    // Use a div element to wrap the content
    <div>
      {
        // Use a conditional statement to render the content
        // If data is not null, render the PostCard components
        data ? (
          // Use the map function to render a PostCard component for each item in the data array
          data.map((item) => {
            // Return a PostCard component with the title and body props
            return (
              <div key={item.id}>
                <PostCard title={item.title} body={item.body} />
              </div>
            )
          })
        ) : (
          // If data is null, render a message indicating that no data is available
          "No data"
        )
      }
    </div>
  )
}

export default App
