import React from 'react'
import { Navbar } from './component/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './component/Home';
import { Login } from "./component/Login";
import { About } from './component/About';
import { User } from './component/User';

function App() {

  let router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },

      {
        path: "/about",
        element: <About></About>
      },

      {
        path:"/user/:username",
        element:<User></User>
      }


    ]
  )

  return (
    <div>



      <RouterProvider router={router}>

        <div>
          
        </div>

      </RouterProvider>
    </div>
  );




}

export default App
