import React from 'react'

export default function Input({type,title,name, onBlur,className}) {
  return (
    <div>
        <label htmlFor={name}>{title}</label>
        <input className={`${className} border w-full py-2 px-2 rounded border-secondary`} onBlur={onBlur} type={type} name={name} id={name} />
        
    </div>
  )
}
