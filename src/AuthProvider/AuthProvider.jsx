import React, { createContext, useState,useEffect } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase-init';
const auth=getAuth(app)
export const AuthContext=createContext(null)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const updateUserProfile = (name,photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName:name, photoURL:photoUrl
    })
  }
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
  // console.log('currentUser',currentUser);
    setLoading(false)
  })
  return ()=>{
    return unsubscribe()
  }
  },[])


  const authInfo = { user, loading,createUser,signInUser,logOut,updateUserProfile}
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider