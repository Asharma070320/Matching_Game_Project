import React from 'react'
import './App.css'
import FirstPage from './Components/FirstPage'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SecondPage from './Components/SecondPage'
import ThirdPage from './Components/ThirdPage'
import FourthPage from './Components/FourthPage'
import PlayGame from './Components/PlayGame'
import DisplayScreen from './Components/DisplayScreen'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <FirstPage />,
      errorElement : <h1>404 Page Not Found</h1>
    },
    {
      path: '/secondpage',
      element: <SecondPage />
    },
    {
      path: '/thirdpage',
      element: <ThirdPage />
    },
    {
      path: '/intructions',
      element: <FourthPage />
    },
    {
      path: '/gamestart',
      element: <PlayGame />
    },
    {
      path: '/display',
      element: <DisplayScreen />
    },
    {
      path: '*',
      element: <h1>404 Page Not Found</h1>
    }
  ])
  return (
    <div className='container'>
    <RouterProvider router={routes} />
    </div>
  )
}

export default App
