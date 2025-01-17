import React from 'react'

// Define the PostCard component
function PostCard(props) {
  // Return the JSX for the PostCard component
  return (
    // Use a div element to wrap the content
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-4">
      
      {/* Display the title of the post */}
      <h3 className="text-2xl font-bold mb-2">{props.title}</h3>

      {/* Display the body of the post */}
      <p className="text-gray-600">{props.body}</p>
    </div>
  )
}

// Export the PostCard component as the default export
export default PostCard