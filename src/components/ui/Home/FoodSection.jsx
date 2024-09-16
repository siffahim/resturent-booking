import { ChevronDownCircle, ChevronLeft, ChevronRight, ChevronUp, ChevronUpCircle } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import FoodCard from '../../shared/FoodCard';

export default function FoodSection() {
  const [foods,setFoodls] = useState([]);

  useEffect(()=>{
    const fetchFood= async () =>{
      const res = await fetch("./fake.json");
      const data = await res.json();
      setFoodls(data.foods)
    }
    fetchFood()
  },[])
//  fetch("./fake.json")
//      .then((res)=> res.json())
//      .then(data => console.log(data))
  return (
    <div>
        <div className='flex items-center justify-between'>
        <h2 className='text-black text-3xl font-normal'>Explore  <span className='text-primary'>Yummy Recipe</span></h2>
        <button className='flex items-start'>See All <ChevronRight /></button>
        </div>

        <div className='grid grid-cols-4 gap-4 mt-10'>
          {
            foods.slice(0,4).map((item,index)=> <FoodCard key={index} item={item} />)
          }
        </div>
    </div>
  )
}
