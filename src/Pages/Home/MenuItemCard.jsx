import React from 'react'

const MenuItemCard = ({ item }) => {
  const {_id,name,price,image,recipe}=item||{}
  return (
    <div className='flex space-x-4'>
      <img src={image} style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px]' alt="menu img" />
      <div>
        <h3>{name}</h3>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>

    </div>
  )
}

export default MenuItemCard