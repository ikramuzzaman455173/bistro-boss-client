import React from 'react'
import { Helmet } from 'react-helmet-async';
import MenuImg from "../../assets/menu/banner3.jpg";
import Cover from '../SharedPage/Cover';
import UseMenu from '../../Hooks/UseMenu';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import offeredImg from '../../assets/menu/banner3.jpg'
import MenuCategory from './MenuCategory';
const MenuPage = () => {
  const [menu] = UseMenu()

  const salad = menu.filter(item => item.category === 'salad')
  // console.log(salad);

    const pizza = menu.filter(item => item.category === 'pizza')
    // console.log(pizza);

  const soup = menu.filter(item => item.category === 'soup')
  // console.log(soup);

  const dessert = menu.filter(item => item.category === 'dessert')
  // console.log(dessert);

  const drinks = menu.filter(item => item.category === 'drinks')
  // console.log(drinks);


  const offered = menu.filter(item => item.category === 'offered')
  // console.log(offered);


  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu Page</title>
      </Helmet>
      <Cover title={"Our Menu"} img={MenuImg} />
      <MenuCategory items={salad} title="salad"image={saladImg}/>
      <MenuCategory items={pizza} title="pizza"image={pizzaImg}/>
      <MenuCategory items={soup} title="soup"image={soupImg}/>
      <MenuCategory items={dessert} title="dessert"image={dessertImg}/>
      <MenuCategory items={drinks} title="drinks"image={MenuImg}/>
      <MenuCategory items={offered} title="offered"image={offeredImg}/>
    </div>
  )
}

export default MenuPage