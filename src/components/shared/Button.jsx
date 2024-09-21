import React from 'react'

export default function Button({children,onClick, className}) {
  return (
    <button className={`${className} bg-secondary text-base uppercase rounded w-full py-2`} onClick={onClick}>{children}</button>
  )
}
