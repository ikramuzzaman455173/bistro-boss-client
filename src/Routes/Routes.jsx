import { createBrowserRouter } from 'react-router-dom'
import MainPage from '../PageLayout/MainPage'
import Home from '../Pages/Home/Home'
import MenuPage from '../Pages/Menu/MenuPage'
import Order from '../Pages/OrderPage/Order'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Login/Register'
import DashboardLayout from '../PageLayout/DashboardLayout'
import MyCart from '../Pages/DashBoard/MyCart'
import AllUsers from '../Pages/DashBoard/AllUsers'
import PrivateRoute from './PrivateRoute'
import AddItem from '../Pages/DashBoard/AddItem'
import AdminRoute from './AdminRoute'
import ManageItems from '../Pages/DashBoard/ManageItems'
import Payment from '../Pages/DashBoard/Payment'
import UserHome from '../Pages/DashBoard/UserHome'
import AdminHome from '../Pages/DashBoard/AdminHome'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <MenuPage />
      },
      {
        path: 'order/:category',
        element: <Order />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children: [
      {
        path: 'userHome',
        element: <UserHome />
      },
      {
        path: 'mycart',
        element: <PrivateRoute><MyCart /></PrivateRoute>
      },
      //admin route part starts
      {
        path: 'adminHome',
        element:<AdminRoute><AdminHome /></AdminRoute>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
      {
        path: 'payment',
        element: <Payment />
      }
    ]
  }

])