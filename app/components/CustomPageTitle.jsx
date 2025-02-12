import React from 'react'

export default function CustomPageTitle({title}) {
  return (
    <div className='bg-gray-100 px-3 py-4 mb-5'>
        <h2 className='font-semibold text-md'>{title}</h2>
    </div>
  )
}
