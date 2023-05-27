// import {useState,useEffect} from 'react'
import SectionTitle from '../../Components/SectionTitle'
import MenuItemCard from './MenuItemCard'
import UseMenu from '../../Hooks/UseMenu'

const PopularMenu = () => {
  const [menu] = UseMenu()
  const popular=menu.filter(item=>item.category==='popular')
  // const [menu, setMenu] = useState([])
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       // console.log(data)
  //       const popularItems = data.filter(popular => popular.category === 'popular')
  //       console.log(popularItems);
  //       setMenu(popularItems)
  //     }).catch(error=>console.log(`404 page not found ${error}`))
  //   },[])

  return (
    <>
      <SectionTitle heading={"From Our Menu"} subheading={"Popular Items"} />
      <div className='grid md:grid-cols-2 gap-10 mb-10'>
        {popular.map((item,i)=><MenuItemCard key={i} item={item} />)}
      </div>
    </>
  )
}

export default PopularMenu