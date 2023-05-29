import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/SharedPage/Navbar";
import Footer from "../Pages/SharedPage/Footer";
import LoadingSpinner from "../Pages/SharedPage/LoadingSpinner";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const MainPage = () => {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  // const noHeaderFooterRegister=location.pathname.includes('register')
  const [isLoading, setIsLoading] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* {noHeaderFooter||noHeaderFooterRegister||<Navbar/>}
      <div className="min-h-[calc(100vh-140px)]">
      <Outlet />
      </div>
      {noHeaderFooter||noHeaderFooterRegister||<Footer/>} */}

      {isLoading ? <><LoadingSpinner /></> :
        <>
          {noHeaderFooter || <Navbar />}
          <div className="min-h-[calc(100vh-140px)]">
            <Outlet />
          </div>
          {noHeaderFooter || <Footer />}
          <ToastContainer/>
        </>}

    </>
  )
}

export default MainPage