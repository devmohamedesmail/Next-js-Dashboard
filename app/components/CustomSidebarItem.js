import React, { useContext } from 'react'
import Link from 'next/link'
import { ThemeContext } from '../context/ThemeProvider'

export default function CustomSidebarItem({ icon, link, title }) {
  const { themeOptions, setthemeOptions } = useContext(ThemeContext)
  return (
    <Link
      
      href={`${link}`} 
      className='flex items-center hover:bg-orange-500  m-0 transition-colors duration-700 ease-in-out  rounded-br-3xl py-3 pl-5 border-b-2 mb-3'>
      {icon}
      <span className='mx-2'>{title}</span>

    </Link>
  )
}
