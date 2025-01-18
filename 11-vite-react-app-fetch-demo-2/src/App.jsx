import { useCallback, useEffect, useState } from 'react'
import React from 'react'
import { getRandomUser } from "./api/index.js";
import UserCard from './component/User.jsx';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getRandomUser().then((u) => {
      setUser(u.results[0]);
    });
  }, []);

  const handleRandomUser = () => {
    getRandomUser().then((u) => {
      setUser(u.results[0]);
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100 ">
      <div className="max-w-md w-full p-4 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center underline mb-4">Random User</h1>
        {user && (
          <UserCard userdata={user} />
        )}
        <div className='flex flex-row justify-center items-center mt-3'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleRandomUser}
        >
          Get Random User
        </button>
        </div>
        
      </div>
    </div>
  );

}

export default App
