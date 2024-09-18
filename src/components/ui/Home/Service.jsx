import { ChefHat, ClockArrowUp, ListCheck } from "lucide-react";
import React from "react";
import image from "../../../assets/who-we.png";

export default function Service() {
  const serviceList = [
    { icon: <ChefHat />, title: "Online Ordering" },
    { icon: <ClockArrowUp />, title: "24/7 Availability" },
    { icon: <ListCheck />, title: "Advanced Reservations" },
    { icon: <ChefHat />, title: "Top Chefs" },
    { icon: <ChefHat />, title: "Curated Dining Spaces" },
    { icon: <ChefHat />, title: "Immaculate Kitchens" },
  ];
  return (
    <div className="grid grid-cols-2 gap-14 my-20">
      <div>
        <img className="w-[80%]" src={image} alt="" />
      </div>
      <div>
        <h2 className="text-4xl font-semibold">
          We are <span className="text-primary">more</span> than multiple
          service
        </h2>
        <p className="my-5">
          This is a type of resturent which typically serves food and drink, in
          addition to light refreshments such as baked goods or snacks. The term
          comes frome the rench word meaning food
        </p>
        <div className="grid grid-cols-2 gap-4 mt-5">
          {serviceList.map((item, index) => (
            <div className="flex items-center gap-2">
              <span className="text-primary">{item.icon}</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
