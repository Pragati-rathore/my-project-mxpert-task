import React from "react";
import "./NavBar.css";
import { IoCart } from "react-icons/io5";

export default function NavBar() {
  const NavData = [
    "Landing",
    "Home",
    "Gallery",
    "Shop",
    "Blog",
    "About",
    "Team",
    "Comtact",
    <IoCart />,
  ];

  return (
    <div className="container-main ">
      <div className="nav-flex">
        <div className="nav-hd">
          <h1>Restaurant Landing Page</h1>
        </div>
        <ul className="nav-list">
          {NavData.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
