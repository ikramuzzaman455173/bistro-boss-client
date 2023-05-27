import React from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ReviewCard = ({ review }) => {
  const { name, details, rating } = review || {}
  return (
    <div className='m-10 flex flex-col items-center'>
      <Rating
        style={{ maxWidth: 180 }}
        value={rating}
        readOnly
      />
      <p className='w-1/2 py-4  text-center'>{details}</p>
      <p className='text-3xl text-orange-400'>{name}</p>
    </div>
  )
}

export default ReviewCard