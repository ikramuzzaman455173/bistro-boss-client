import React from 'react'
import { Link } from "react-router-dom";
import Cover from '../SharedPage/Cover';
import MenuItemCard from '../Home/MenuItemCard';
const MenuCategory = ({ items, title, image }) => {
  // console.log(items);
  return (
    <div className='pt-8'>
    { title && <Cover img={image} title={title}></Cover>}
    <div className="grid md:grid-cols-2 gap-10 my-16">
        {
            items.map((item,i)=><MenuItemCard key={i}item={item}></MenuItemCard>)
        }
    </div>
    <Link to={`/order/${title}`}>
    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
    </Link>
</div>
  )
}

export default MenuCategory
