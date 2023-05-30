import React, { useState, useEffect, useContext } from 'react'
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';
import SocialLogin from '../SharedPage/SocialLogin';
const Login = () => {
  const [showPass, setShowPass] = useState('')
  const [disabled, setDisabled] = useState(true)
  const { signInUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  let from=location.state?.from?.pathname||'/'
  // useEffect(() => {
  //   loadCaptchaEnginge(5)
  // }, [])
  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    // console.log(email, password);
    signInUser(email, password)
      .then(result => {
        // console.log(result.user);
        toast('Login Account Successfully !!!', { autoClose: 2000 })
        setTimeout(() => {
          navigate(from, { replace: true })
        }, 3000);
      }).catch(error => {
        toast.error('Email Or Password Has Been Invalid !!!',{autoClose:2000})
        console.log(`Error:`, error.message);
      })
  }

  // todo: use captcha for complete maximum work

  // const handlerecaptcha = (e) => {
  //   const captchValue = e.target.value
  //   if (validateCaptcha(captchValue) == true) {
  //     console.log(captchValue);
  //     setDisabled(false)
  //   }

  //   else {
  //     toast.error('Captcha Does Not Match',{autoClose:2000});
  //     setDisabled(true)
  //   }
  // }

  const handleShowPassword = () => {
    setShowPass(!showPass)
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Login Page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input required type="email" name='email' placeholder="email" className="input input-bordered normal-case" />
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input required type={showPass ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered normal-case" />
                <p className='absolute top-12 cursor-pointer right-4' onClick={handleShowPassword}>{!showPass ? 'show' : 'hide'}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              {/* <div className="form-control">
                <div className="label">
                  <span className="label-text">Reload Recaptch</span>
                  <LoadCanvasTemplate />
                </div>
                <input onBlur={handlerecaptcha} type='text'placeholder="Type The Recaptcha" className="input input-bordered normal-case" />
              </div> */}


              <div className="form-control mt-6">
                <button type='submit' disabled={disabled ? false : ''} className="btn btn-primary">Login</button>
              </div>
              <p className='text-center'><small>New Here? <Link className='text-blue-500 font-bold' to="/register">Create An Account!!!</Link></small></p>
              <SocialLogin/>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login