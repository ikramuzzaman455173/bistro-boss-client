import { useQuery } from "@tanstack/react-query"
import UseAuth from "./UseAuth"
import useAxiosSecure from "./UseAxiosSecures"

const UseAdmin = () => {
  const [axiosSecure]=useAxiosSecure()
  const { user,loading } = UseAuth()
  const {data:isAdmin,isLoading:isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled:!loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`)
<<<<<<< HEAD
      // console.log('isAdmin', res.data);
      return res.data
=======
      console.log('isAdmin', res.data);
      return res.data.admin
>>>>>>> user-dashboard
    }
  })
  return [isAdmin,isAdminLoading]
}
export default UseAdmin