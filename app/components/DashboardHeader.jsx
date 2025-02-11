'use client'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { CiMenuFries } from "react-icons/ci";

export default function DashboardHeader({ isSidebarOpen, setSidebarOpen }) {
    const { themeOptions, setthemeOptions } = useContext(ThemeContext)
    return (
        <div
            style={{ backgroundColor: themeOptions.header }}
            className={` py-2 shadow-lg  flex justify-between items-center sticky top-0 z-50`}>
            
            
            <div>
                <button className='ml-3' onClick={()=>setSidebarOpen(prev => !prev)}><CiMenuFries color='white' size={20} /></button>
            </div>



            <div className="flex flex-1 justify-end px-2">
                <div className="flex items-stretch">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                            <li><a>Profile</a></li>
                            <li><a>Logout </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
