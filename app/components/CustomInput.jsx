import React from 'react'

export default function CustomInput({type,placeholder,value,onChange}) {
  return (
    <input type={type} placeholder={placeholder} className="input input-bordered input-primary w-full" value={value} onChange={onChange} />
  )
}
