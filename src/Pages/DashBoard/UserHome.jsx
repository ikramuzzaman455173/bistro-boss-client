import React from 'react'
import UseAuth from '../../Hooks/UseAuth'

const UserHome = () => {
  const {user} = UseAuth()
  return (
    <div>
      <h3 className="text-3xl text-orange-500">Hi Welcome back <span className='text-slate-600'>{user.displayName}</span></h3>
    </div>
  )
}

export default UserHome