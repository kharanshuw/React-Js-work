import React from 'react'
import { Navbar } from './component/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './component/Home';
import { Login } from "./component/Login";
import { About } from './component/About';
import "./index.css"
import "./App.css"

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
      }
    ]
  )

  return (
    <div>



      <RouterProvider router={router}>

        <div>
          <Navbar>

          </Navbar>
        </div>

      </RouterProvider>
    </div>
  );




}

export default App
