import { Outlet } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar";
import Footer from "../Pages/SharedPage/Footer";
const MainPage = () => {
  return (
    <>
      <Navbar/>
      <div className="min-h-[calc(100vh-140px)]">
      <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default MainPage