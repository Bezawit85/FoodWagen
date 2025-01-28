"use client";

import React from "react";
import Image from "next/image";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="foodLogo">
          <Image
            src="/images/git.png"
            className="logo"
            alt="logo"
            width={40}
            height={40}
          />
          <p className="hidden md:block">Food Wagen</p>
        </div>

        <ul className="menu">
          <li className="menu-item">
            <button>Add Food</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
