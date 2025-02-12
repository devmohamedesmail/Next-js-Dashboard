import React from 'react'

export default function CustomLoginInput({ icon,value,onChange,placeholder }) {
    return (
        <label className="input input-bordered input-primary flex items-center gap-2 mb-5">
         
            {icon}
            <input type="text" className="grow " placeholder={placeholder} value={value} onChange={onChange} />
        </label>
    )
}
