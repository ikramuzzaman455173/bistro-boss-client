import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../PageLayout/MainPage'
import Home from '../Pages/Home/Home'
import MenuPage from '../Pages/Menu/MenuPage'
import Order from '../Pages/OrderPage/Order'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Login/Register'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: '/menu',
        element:<MenuPage/>
      },
      {
        path: 'order/:category',
        element:<Order/>
      },
      {
        path: '/login',
        element:<Login/>
      },
      {
        path: '/register',
        element:<Register/>
      },
      // {

      // },
      // {

      // },
      // {

      // },
    ]
  },

])