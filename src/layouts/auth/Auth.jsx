import React from 'react'
import { Outlet } from 'react-router-dom'
import image from '../../assets/auth-page.png';

export default function Auth() {
  return (
    <div className='flex items-center'>
        <img src={image} alt="" />
        <div>
            <Outlet />
        </div>
    </div>
  )
}
