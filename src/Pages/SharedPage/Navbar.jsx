import { useContext } from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../Hooks/UseCart';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const [cart] = useCart()
  // console.log('cart',cart);
  const handleLogout = () => {
    return logOut()
  }
  const navItems = (<>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order/salad">Our Food</Link></li>
    <li><div>
      <Link to="/dashboard/mycart" className="flex items-center gap-2 relative">
        <FaShoppingCart className='text-2xl' />
        <div className="badge text-[17px] text-white absolute -top-2 left-2">+{cart?.length || 0}</div>
      </Link>
    </div></li>
    {user ? <>
      <li><Link onClick={handleLogout}>logout</Link></li>
      <li><Link to="/dashboard">your dashboard</Link></li>
    </>

      : <><li><Link to="/login">login</Link></li></>}
  </>)
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">BistroBoss</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>


    </>
  )
}

export default Navbar