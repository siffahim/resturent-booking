import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import FoodCard from "../../shared/FoodCard";
import Heading from "../../shared/Heading";

export default function AllFoods() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch("./fake.json");
      const data = await res.json();
      setFoods(data.foods);
    };
    fetchFood();
  }, []);
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <Heading />
        <div className="border w-2/4 flex px-2 py-1 rounded-full">
          <input
            type="text"
            className=" w-full py-2 outline-none"
            name=""
            id=""
          />
          <button className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full">
            <Search />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {foods.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
