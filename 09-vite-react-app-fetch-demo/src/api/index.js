/**
 * Fetches posts from the API endpoint
 * @returns {Promise<object[]>}  A promise that resolves to an array of post objects.
 */
export const getPost = async () => {
    // Define the URL for the API endpoint
    let url = "https://jsonplaceholder.typicode.com/posts";
  
    // Send a GET request to the API endpoint
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    // Parse the response body as JSON and return it
    return await response.json();
  };