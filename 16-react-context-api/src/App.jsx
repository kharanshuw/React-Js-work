import React from 'react';
import { UserContextProvider } from './context/UserContextProvider.jsx';
import { Login } from './component/Login.jsx';
import { Profile } from './component/Profile.jsx';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <UserContextProvider>
        <div className="max-w-md w-full space-y-6">
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </div>
  );
}

export default App;
