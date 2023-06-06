import { useQuery } from "@tanstack/react-query"
const UseMenu = () => {
  // const [menu, setMenu] = useState([])
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   fetch('https://bistro-boss-server-eight-orcin.vercel.app/menu')
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data)
  //       // const popularItems = data.filter(popular => popular.category === 'popular')
  //       // console.log(popularItems);
  //       setMenu(data)
  //       setLoading(false)
  //     }).catch(error=>console.log(`404 page not found ${error}`))
  // }, [])


  const {data:menu=[],isLoading:loading,refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch('https://bistro-boss-server-eight-orcin.vercel.app/menu')
      return res.json()
    }
  })
  return [menu,loading,refetch]
}
export default UseMenu