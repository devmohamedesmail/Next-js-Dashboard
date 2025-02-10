import Link from 'next/link'
import React from 'react'
import { RiDashboard3Line } from "react-icons/ri";
import CustomSidebarItem from './CustomSidebarItem';

export default function Sidebar() {
    return (
        <aside className="w-64 bg-gray-800 text-white pt-5">
            <h2 className="text-lg text-center font-bold">Dashboard</h2>
            <div className='mt-5'>
                <div>
                    
                    <CustomSidebarItem link='/pages/dashboard' icon={<RiDashboard3Line size={20} />} title='Dashboard' />
                    <CustomSidebarItem link='/pages/dashboard/forms' icon={<RiDashboard3Line size={25} />} title='Forms' />
                    <CustomSidebarItem link='/pages/dashboard/forms' icon={<RiDashboard3Line size={25} />} title='Forms' />
                    <CustomSidebarItem link='/pages/dashboard/forms' icon={<RiDashboard3Line size={25} />} title='Forms' />
                    
                </div>
            </div>
        </aside>
   
    )
}
