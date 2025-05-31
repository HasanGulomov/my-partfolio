import React from 'react'
import Layout from "./components/RootLayout"
import About from "../src/Home/about"
import Contact from '../src/Home/contact'
import Home from './Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const routes = createBrowserRouter([
    {
     element: <Layout/>, 
     children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
     ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
