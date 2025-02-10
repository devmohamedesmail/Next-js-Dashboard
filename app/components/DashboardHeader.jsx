import React from 'react'

export default function DashboardHeader() {
    return (
        <div className='bg-gray-100 py-4 shadow-lg border-b-2 border-b-gray-100'>
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
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
