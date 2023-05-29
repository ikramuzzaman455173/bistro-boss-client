import React, { useState, useEffect, useRef, useContext } from 'react'
import {toast} from "react-toastify";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
const Register = () => {
  const [showPass, setShowPass] = useState('')
  const { createUser,updateUserProfile } = useContext(AuthContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    createUser(data.email, data.password)
    .then(result => {
      console.log(result.user);
      updateUserProfile(data.name, data.photoUrl)
      .then(() => {
              console.log('user profile info updated');
            }).catch(error => {
              console.log(`Error:`,error.message);
            })
      
      toast('Register Account Successfully !!!',{autoClose:2000})
      console.log(data);
          }).catch(error => {
            console.log(`Error:`,error.message);
          })
    reset(); // Reset the form after submission
  };


  const handleShowPassword = () => {
    setShowPass(!showPass)
  }
  return (
    <>
      <Helmet>
        <title>Bistro Boss || Register Page</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="your name" className="input input-bordered normal-case" />
                {errors.name && <span className='text-red-500 pt-2'>Name Field Can Not Be Empity!</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" {...register("photoUrl", { required: true })} placeholder="Photo Url" className="input input-bordered normal-case" />
                {errors.photoUrl && <span className='text-red-500 pt-2'>Photo Url Field Can Not Be Empity!</span>}
              </div>









              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered normal-case" />
                {errors.email && <p className='text-red-500 pt-2'>Email Address is required</p>}
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={showPass ? 'text' : 'password'} {...register("password", { required: true, minLength: 6, maxLength: 10 })} placeholder="password" className="input input-bordered normal-case" />
                {errors.password?.type === "required" && <span className='text-red-500 pt-2'>Password is Required!</span>}
                {errors.password?.type === "minLength" && <span className='text-red-500 pt-2'>Password is Required altlease 6 character!</span>}
                {errors.password?.type === "maxLength" && <span className='text-red-500 pt-2'>Password must be less than 10 character!</span>}

                <p className='absolute top-12 cursor-pointer right-4' onClick={handleShowPassword}>{!showPass ? 'show' : 'hide'}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>





              <div className="form-control mt-6">
                <input type='submit' className="btn btn-primary" value="register" />
              </div>
              <p className='text-center'><small>Already Have An Account Please? <Link className='text-blue-500 font-bold' to="/login">login now!!!</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register