import React from "react";
import FoodSection from "../../components/ui/Home/FoodSection";
import Hero from "../../components/ui/Home/Hero";
import Service from "../../components/ui/Home/Service";
import Showcase from "../../components/ui/Home/Showcase";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <FoodSection />
      <Service />
      <Showcase />
    </div>
  );
}
