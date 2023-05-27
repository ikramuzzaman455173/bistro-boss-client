import React from 'react'

const SectionTitle = ({heading,subheading}) => {
  return (
    <div className='w-4/12 mx-auto text-center my-10'>
      <p className='text-yellow-600 font-bold text-[24px] font-medium mb-2'> --- {subheading} ---</p>
      <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
    </div>
  )
}

export default SectionTitle