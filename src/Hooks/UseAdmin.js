import { useQuery } from "@tanstack/react-query"
import UseAuth from "./UseAuth"
import useAxiosSecure from "./UseAxiosSecures"

const UseAdmin = () => {
  const [axiosSecure]=useAxiosSecure()
  const { user } = UseAuth()
  const {data:isAdmin,isLoading:isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`)
      // console.log('isAdmin', res.data);
      return res.data
    }
  })
  return [isAdmin,isAdminLoading]
}
export default UseAdmin