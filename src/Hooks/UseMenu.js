import { useQuery } from "@tanstack/react-query"
const UseMenu = () => {
<<<<<<< HEAD
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('https://bistro-boss-server-eight-inky.vercel.app/menu')
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        // const popularItems = data.filter(popular => popular.category === 'popular')
        // console.log(popularItems);
        setMenu(data)
        setLoading(false)
      }).catch(error=>console.log(`404 page not found ${error}`))
  }, [])
  return [menu,loading]
=======
  // const [menu, setMenu] = useState([])
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //   fetch('http://localhost:4000/menu')
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
      const res = await fetch('http://localhost:4000/menu')
      return res.json()
    }
  })
  return [menu,loading,refetch]
>>>>>>> user-dashboard
}
export default UseMenu