import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FoodCard from "../../shared/FoodCard";
import Heading from "../../shared/Heading";

export default function FoodSection() {
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFood = async () => {
      const res = await fetch("./fake.json");
      const data = await res.json();
      setFoods(data.foods);
    };
    fetchFood();
  }, []);

  //  fetch("./fake.json")
  //      .then((res)=> res.json())
  //      .then(data => console.log(data))

  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading />
        <button
          onClick={() => navigate("/foods")}
          className="flex items-start text-primary hover:text-secondary duration-200"
        >
          See all <ChevronRight />
        </button>
      </div>

      <div className="grid px-5 lg:px-0 grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        {foods.slice(0, 4).map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
