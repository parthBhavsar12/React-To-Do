import { useState } from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Login from './Components/Auth/login';
import Register from './Components/Auth/register';
import Nav from './Components/Nav/nav';
import Home from './Components/Home/home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Login/></>
    },
    {
      path: "/login",
      element: <><Login/></>
    },
    {
      path: "/register",
      element: <><Register/></>
    },
    {
      path: "/home",
      element: <><Nav/><Home/></>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;