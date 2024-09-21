import React from 'react'
import { Outlet } from 'react-router-dom'
import image from '../../assets/auth-page.png';

export default function Auth() {
  return (
    <div className='grid grid-cols-2 gap-14 container p-5 items-center h-screen'>
        <img src={image} alt="" />
        <div className=''>
            <Outlet />
        </div>
    </div>
  )
}
