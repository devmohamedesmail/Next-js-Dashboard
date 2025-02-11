'use client'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeProvider'
import { IoSettings } from "react-icons/io5";
import CustomInput from './CustomInput';

export default function SettingSection() {
    const [openSetting, setOpenSetting] = useState(false)
    const { themeOptions, setthemeOptions } = useContext(ThemeContext);


    const handleChangePrimaryColor = (e) => {
        setthemeOptions((prevState) => ({ ...prevState, "primary": e.target.value }))

    }
    const handleChangeSidebarColor = (e) => {
        setthemeOptions((prevState) => ({ ...prevState, "sidebar": e.target.value }))

    }
    const handleChangeHeaderColor = (e) => {
        setthemeOptions((prevState) => ({ ...prevState, "header": e.target.value }))

    }

    return (

        < >
            <div className={` ${openSetting ? 'w-96 h-96 p-5' : 'w-0 h-0 p-0'} fixed top-1/4 right-1/4 m-auto left-1/4 rounded-lg  flex justify-center items-center overflow-hidden  bg-white  shadow-2xl transition-all  duration-300 ease-in-out  `}>
                <div className='grid grid-cols-2 gap-5'>



                    <div className='flex flex-col p-5 my-3 items-center bg-gray-100  '>
                        <span className='text-center text-sm'>Primary color</span>
                        <input type="color" className='w-full mt-5' onChange={(e) => handleChangePrimaryColor(e)} />
                    </div>


                    <div className='flex flex-col p-5 my-3 items-center bg-gray-100 '>
                        <span className='text-center'>Sidebar Color</span>
                        <input type="color" className='w-full h-30 mt-5' onChange={(e) => handleChangeSidebarColor(e)} />
                    </div>

                    <div className='flex flex-col p-5 my-3 items-center bg-gray-100 '>
                        <span className='text-center'>Change Header</span>
                        
                        <input type="color" className='w-full mt-5' onChange={(e) => handleChangeHeaderColor(e)} />
                    </div>
                </div>
            </div>
            <button
                onClick={() => setOpenSetting(prev => !prev)}
                className='fixed bottom-5 right-5 p-2 rounded-full '
                style={{ backgroundColor: themeOptions.primary }}>
                <IoSettings size={20} color='white' />
            </button>
        </>
    )
}
