import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaBars, FaCalendarAlt, FaHome, FaShoppingBag, FaShoppingCart, FaWallet,FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import useCart from '../Hooks/UseCart';
const DashboardLayout = () => {
  const [cart] = useCart()

  // todo:load data from the server to have dynamic isAdmin based on date
  const isAdmin = true
  return (
    <div>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mx-10 mt-10">
          {/* <!-- Page content here --> */}
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div className="drawer-side bg-[#d1a054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul id="sidebar" className="menu p-4 w-80 ">
            {/* <!-- Sidebar content here --> */}

            {isAdmin ?
              <>
                <li><NavLink><FaHome /> admin home</NavLink></li>
                <li><NavLink to="/dashboard/reservations"><FaUtensils /> add items</NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory"><FaBars /> manage items</NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory"><FaBook /> manage bookings</NavLink></li>
                <li><NavLink to="/dashboard/allusers"><FaUsers /> all users</NavLink></li>
              </>
              :
              <>
                <li><NavLink><FaHome /> user home</NavLink></li>
                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt /> reservations</NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory"><FaWallet /> payment history</NavLink></li>
                <li><NavLink to="/dashboard/mycart"><FaShoppingCart /> My Cart
                  <span className="badge text-[17px] text-white absolute -top-2 left-2">+{cart?.length || 0}</span>
                </NavLink></li>

              </>}



            <div className="divider"></div>






            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
            <li><NavLink to="/menu"><FaBars /> Menu</NavLink></li>
            <li><NavLink to="/order/salad"><FaShoppingBag /> Shop</NavLink></li>
            <li><NavLink></NavLink></li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
