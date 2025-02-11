import React from 'react'

export default function CustomPageTitle({title}) {
  return (
    <div className='bg-gray-300 px-3 py-2 mb-5'>
        <h2 className='font-semibold text-sm'>{title}</h2>
    </div>
  )
}
