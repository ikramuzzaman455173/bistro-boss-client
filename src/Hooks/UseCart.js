import { useQuery } from '@tanstack/react-query';
import { useContext } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider';
const useCart = () => {
  const { user } = useContext(AuthContext)
  const token=localStorage.getItem('jwt-token')
  const {data:cart=[],refetch} = useQuery({
    queryKey: ['cart',user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:4000/carts?email=${user?.email}`, {
        headers: {
        authorization:`bearer ${token}`
      }})
      return response.json()
    },
  })
  return [cart,refetch]
}
export default useCart
