import { useQuery } from '@tanstack/react-query';
import { useContext } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseAxiosSecure from './UseAxiosSecures';
const useCart = () => {
  const { user,loading } = useContext(AuthContext)
  // const token = localStorage.getItem('jwt-token')
  const [axiosSecure]=UseAxiosSecure()
  const {data:cart=[],refetch} = useQuery({
    queryKey: ['cart', user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure(`http://localhost:4000/carts?email=${user?.email}`)
      console.log("response from axios",response.data);
      return response.data
    },
  })

  return [cart,refetch]
}
export default useCart
