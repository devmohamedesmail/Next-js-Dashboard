'use client'
import Link from 'next/link';
import React,{useState} from 'react'
import { BiChevronLeft } from "react-icons/bi";
import { HiMiniChevronDown } from "react-icons/hi2";


export default function CustomSidebarMenu({ title, items ,icon}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full mb-3 ">
      <button
        className="flex items-center justify-between w-full px-5 py-2 text-whiterounded-md hover:bg-orange-500  m-0 transition-colors duration-700 ease-in-out mr-10 rounded-br-3xl border-b-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        
          <div className='flex items-center'>
            <span>{icon}</span>
            <span className='mx-2 '>{title}</span>
          </div>
        {isOpen ? <HiMiniChevronDown size={20} />: <BiChevronLeft size={20} />}
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-2 transition-all ease-in-out duration-1000 pl-4">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="block px-4 py-2 text-white hover:bg-orange-500 rounded-lg">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
