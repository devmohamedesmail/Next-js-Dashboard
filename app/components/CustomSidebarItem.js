import React from 'react'
import Link from 'next/link'

export default function CustomSidebarItem({icon,link,title}) {
  return (
    <Link href={`${link}`} className='flex items-center hover:bg-yellow-500 m-0 rounded-t-lg py-3 pl-5'>
    {icon}
    <span className='mx-2'>{title}</span>

</Link>
  )
}
