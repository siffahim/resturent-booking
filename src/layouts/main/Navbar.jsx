import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const { pathname } = useLocation();

  const items = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "Foods",
      path: "/foods",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

  return (
    <nav className="container lg:flex items-center justify-between">
      <div className="flex items-center justify-between">
        <Link to="/home">
          <img src={logo} alt="" />
        </Link>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {!open ? <Menu /> : <X />}
        </div>
      </div>
      <ul
        className={`space-y-5 lg:space-y-0 lg:flex items-center gap-10 lg:static p-4 lg:p-0 absolute duration-500 bg-secondary lg:bg-transparent h-auto ${
          open ? "left-0 top-14 w-full" : "left-0 -top-96"
        }`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`${
              item.path === pathname ? "text-primary font-bold" : "text-black"
            }  hover:text-primary duration-200 text-[17px]`}
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}

        {/* <li className="text-black hover:text-primary duration-200 text-[17px]">
          <Link to="/home">Home</Link>
        </li>
        <li className="text-black hover:text-primary duration-200 text-[17px]">
          <Link to="/foods">Foods</Link>
        </li>
        <li className="text-black hover:text-primary duration-200 text-[17px]">
          <Link to="/about">About</Link>
        </li>
        <li className="text-black hover:text-primary duration-200 text-[17px]">
          <Link to="/login">Login</Link>
        </li> */}
      </ul>
    </nav>
  );
}
