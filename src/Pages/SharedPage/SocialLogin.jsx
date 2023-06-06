import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  let from=location.state?.from?.pathname||'/'
  const signUpGoogle = () => {
    googleSignIn()
      .then((result) => {
        const logedUser=result.user
        const saveUser={name:logedUser.displayName,email:logedUser.email}
        fetch(`https://bistro-boss-server-eight-orcin.vercel.app/users`, {
            method: "POST",
            headers: {
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
            .then(response => response.json())
          .then(() => {
            navigate(from, { replace: true })
            }).catch(error=>console.log(`404 page not found ${error.message}`))
        })
  }
  return (
    <div>

      <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
        <button onClick={signUpGoogle} className="btn btn-outline gap-2">
          <FaGoogle/>
          Sign Up With Google
        </button>
      </div>
    </div>
  )
}

export default SocialLogin