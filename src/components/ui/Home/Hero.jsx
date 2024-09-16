import React from 'react'
import image from "../../../assets/banner.png";
import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className='grid grid-cols-2 gap-10 items-center'>
        <div className='space-y-3'>
            <h2 className='text-black text-5xl font-bold'>Good <span className='text-primary'>booking</span>, great <br /> memories</h2>
            <p className='w-3/4 text-2xl'>Enable diners to customize their booking by requesting a specific table location or view.</p>
            <div className='border w-2/4 flex px-2 py-1 rounded-full'>
                <input type="text" className=' w-full py-2 outline-none' name="" id="" />
                <button className='bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full'>
                    <Search />
                </button>
            </div>
        </div>
        <div>
            <img className='w-full' src={image} alt="" />
        </div>
    </div>
  )
}
