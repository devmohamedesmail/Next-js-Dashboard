import React from 'react'

export default function CustomButton({title,onClick}) {
  return (
    <button className="btn btn-primary w-full" onClick={onClick}>{title}</button>
  )
}
