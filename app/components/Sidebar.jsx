'use client'

import React, { useContext, useState } from 'react'
import { RiDashboard3Line } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import CustomSidebarItem from './CustomSidebarItem';
import { FaBars } from "react-icons/fa";
import { ThemeContext } from '../context/ThemeProvider';
import CustomSidebarMenu from './CustomSidebarMenu';
import { FaUserFriends } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { CgComponents } from "react-icons/cg";
import { SiAuthentik } from "react-icons/si";

import { CiViewTable } from "react-icons/ci";

import { RiFeedbackLine } from "react-icons/ri";


export default function Sidebar({ isSidebarOpen, setSidebarOpen }) {
    const { themeOptions, setthemeOptions } = useContext(ThemeContext)


    const formsLinks = [
        { label: "Input Elements", href: "/pages/dashboard/forms/inputs" },
        { label: "Select Elements", href: "/pages/dashboard/forms/select" },
        { label: "Radio Elements", href: "/pages/dashboard/forms/radio" },
        { label: "Checkbox Elements", href: "/pages/dashboard/forms/checkbox" },
        
    ]


    const componentsLinks = [
        { label: "Buttons", href: "/pages/dashboard/components/button" },
        { label: "Dropdown Menu", href: "/pages/dashboard/components/dropdown" },
        { label: "Modal", href: "/pages/dashboard/components/modal" },
        { label: "Steps", href: "/pages/dashboard/components/steps" },
    ]


    const authLinks = [
        { label: "Login", href: "/pages/auth/login" },
        { label: "Resgiter", href: "/pages/auth/register" },
      
    ]
    const FeedbackLinks = [
        { label: "Alert", href: "/pages/dashboard/feedback" },
       
      
    ]

    return (
        <div>
            <aside
                style={{ backgroundColor: `${themeOptions.sidebar}` }}
                className={` absolute top-0 bottom-0 ${isSidebarOpen ? 'w-64' : '-translate-x-full'} transition-transform ease-in-out duration-700 z-50  lg:translate-x-0  lg:fixed h-screen w-64 text-white pt-5`}>
                
                <div className='lg:hidden flex justify-end px-3 py-3'>
                   <button onClick={()=>setSidebarOpen(prev => !prev)}>
                   <IoCloseCircle size={20} />
                   </button>
                </div>
                <h2 className="text-lg text-center font-bold">Dashboard</h2>

                <div className='mt-5'>
                    <div>

                        <CustomSidebarItem link='/pages/dashboard' icon={<RiDashboard3Line size={20} />} title='Dashboard' />
                       
                        <CustomSidebarMenu title="Forms Components" items={formsLinks} icon={<FaWpforms size={20} />} />
                        <CustomSidebarMenu title="Components" items={componentsLinks} icon={<CgComponents size={20} />} />

                        <CustomSidebarMenu title="Auth" items={authLinks} icon={<SiAuthentik size={20} />} />
                      
                        <CustomSidebarItem link='/pages/dashboard/tables' icon={<CiViewTable size={20} />} title='Tables' />
                        
                        <CustomSidebarMenu title="Feedback" items={FeedbackLinks} icon={<RiFeedbackLine size={20} />} />
                    </div>
                </div>
            </aside>
        </div>


    )
}
