import {useContext} from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../Pages/SharedPage/LoadingSpinner'

const PrivateRoute = ({children}) => {
  const { user,loading } = useContext(AuthContext)
  const location=useLocation()
  if (loading) {
    return(<LoadingSpinner/>)
  }
  if (user) {
    return children
  }


  return (<Navigate to="/login" state={{from:location}} replace />)
}

export default PrivateRoute