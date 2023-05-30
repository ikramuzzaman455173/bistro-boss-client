import React, { createContext, useState, useEffect } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase-init';
import axios from "axios";
const auth = getAuth(app)
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photoUrl
    })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      // console.log('currentUser',currentUser);
      if (currentUser) {
        axios.post('http://localhost:4000/jwt', { email: currentUser.email })
          .then(data => {
            console.log(data.data.token);
            localStorage.setItem('jwt-token', data.data.token)
          }).catch(error => {
            console.log(`Error:`, error.message);
          })

      }
      else {
        localStorage.removeItem('jwt-token')
      }
      setLoading(false)
    })
    return () => {
      return unsubscribe()
    }
  }, [])


  const authInfo = { user, loading, createUser, signInUser, logOut, updateUserProfile, googleSignIn }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider