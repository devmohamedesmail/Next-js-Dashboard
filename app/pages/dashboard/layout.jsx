import DashboardHeader from '@/app/components/DashboardHeader';
import Sidebar from '@/app/components/Sidebar';
import React from 'react'
import { ReactNode } from "react";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      
      <Sidebar />
      <div className='flex-1'>
        <DashboardHeader />
        {/* Main Content */}
        <main className="flex-1 h-screen px-3  mt-3">{children}</main>
      </div>

    </div>
  )
}
