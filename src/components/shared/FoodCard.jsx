import React from 'react'

export default function FoodCard({item}) {
  return (
    <div className='bg-slate-50 p-1 rounded-[20px]'>
    <img className='w-full' src={item.image} alt="" />
   <div className='mt-3 space-y-2 pb-2'>
   <h2 className='text-2xl text-secondary font-bold'>{item.name}</h2>
    <p>{item.description}</p>
    <h2 className='text-secondary text-xl'>${item.price}</h2>
    <button className='bg-secondary text-center py-2 rounded-full text-white px-4'>Order Now</button>
   </div>
    </div>
  )
}
