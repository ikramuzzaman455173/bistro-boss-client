import { Navigate, useLocation } from 'react-router-dom'
import LoadingSpinner from '../Pages/SharedPage/LoadingSpinner'
import UseAuth from '../Hooks/UseAuth'
import UseAdmin from '../Hooks/UseAdmin'

const AdminRoute = ({children}) => {
  const { user, loading } = UseAuth()
  const [isAdmin,isAdminLoading]=UseAdmin()
  const location=useLocation()
  if (user&&isAdmin) {
    return children
  }

  if (loading||isAdminLoading) {
    return(<LoadingSpinner/>)
  }

  return (<Navigate to="/login" state={{from:location}} replace />)
}

export default AdminRoute