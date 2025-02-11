'use client'
import DashboardHeader from '@/app/components/DashboardHeader';
import SettingSection from '@/app/components/SettingSection';
import Sidebar from '@/app/components/Sidebar';
import React, { useState } from 'react'


export default function DashboardLayout({ children }) {
  const [isSidebarOpen,setSidebarOpen]=useState(false)
  return (
    <div className="flex min-h-screen  ">
      {/* Sidebar */}
      <div className='w-0 md:w-64'>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} /> 
      </div>
   
      <div className='flex-1 '>
        <DashboardHeader isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* Main Content */}
        <main className="flex-1 h-screen px-3  relative mt-3">{children}

          <SettingSection />
        </main>
      </div>

    </div>
  )
}
