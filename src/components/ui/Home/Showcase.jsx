import React from "react";
import appleStore from "../../../assets/apple-store.png";
import img from "../../../assets/paly-section.png";
import playStore from "../../../assets/play-store.png";

export default function Showcase() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-14 items-center mt-20">
      <div className="space-y-5">
        <h2 className="text-4xl font-semibold">
          It’s Now More Easy to <span className="text-primary">Booking</span> by
          Our Mobile App
        </h2>
        <p>
          All you need to do is downlode one of the best delivery apps, make a
          and most companies are opting for mobile app devlopment for food
          delivery
        </p>
        <div className="flex items-center gap-5">
          <img src={playStore} />
          <img src={appleStore} />
        </div>
      </div>
      <div>
        <img className="w-[80%]" src={img} alt="" />
      </div>
    </div>
  );
}
