import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/pages/home'
import Login from '../components/login/Login'
import SignUp from '../components/signup/SignUp'
import { auth } from '../firebase'
import { useEffect, useState } from 'react'

function Routes() {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName)
      } else {
        setUserName('')
      }
    })
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home name={userName} />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Routes
