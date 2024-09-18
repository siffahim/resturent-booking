import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="min-h-screen mb-10">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
