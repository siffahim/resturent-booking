import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/footer-logo.png";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Instagram />,
      path: "www.instragram.com",
    },
    {
      icon: <Facebook />,
      path: "www.facebook.com",
    },
    {
      icon: <Twitter />,
      path: "www.twitter.com",
    },
  ];
  return (
    <div className="bg-blackie text-white px-20 pt-14">
      <div className="lg:flex items-center justify-between">
        <img className="w-64" src={logo} alt="" />
        <div className="flex gap-10">
          <div>
            <h2>Follow us</h2>
            <div className="flex items-center mt-2 gap-2">
              {socialLinks.map((item, index) => (
                <div className="w-8 h-8 flex items-center justify-center bg-base text-blackie rounded">
                  <a href={item.path} target="_blank">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>Call Us</h2>
            <h2 className="mt-2">+8801515210524</h2>
          </div>
        </div>
      </div>
      <p className="w-2/4 my-8">
        The Food we had enjoyed at the time of dinner. It was really delicious
        taste with great quality, everything had unique taste which we had
        ordered, nice arrangement and services from the staff while eating, we
        found nothing bad about this hotel.
      </p>
      <div className="lg:flex items-center justify-between border-t py-8">
        <p>&copy;All right reserved by Bookatable</p>
        <div className="flex lg:flex-row items-center gap-10">
          <Link to="#">About us</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of use</Link>
        </div>
      </div>
    </div>
  );
}
