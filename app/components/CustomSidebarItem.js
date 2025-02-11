import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../context/ThemeProvider'

export default function CustomSidebarItem({icon,link,title}) {
  const { themeOptions, setthemeOptions } = useContext(ThemeContext)
  return (
    <Link 
     style={{

     }}
     href={`${link}`} className='flex items-center hover:bg-yellow-500 m-0 transition-colors duration-700 ease-in-out rounded-tr-3xl rounded-br-3xl py-3 pl-5'>
    {icon}
    <span className='mx-2'>{title}</span>

</Link>
  )
}
