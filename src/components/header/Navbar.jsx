import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

import { BsCart3 } from "react-icons/bs";
import store_icon from "../../assets/image.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";


const Navbar = () => {const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      {/* Toggle menu (only visible if menuOpen is true) */}
      {menuOpen && (
        <div className="menu-container" ref={menuRef}>
          <ul className="menu-links">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Categories</a>
            </li>
            <li>
              <a href="">Packages</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Feedback</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
          </ul>
        </div>
      )}
      <div className="heading">
        <HiOutlineMenuAlt2 size={27} className="menu-icon"
        ref={iconRef}
          onClick={() => setMenuOpen((prev) => !prev)}
          />
        <img src={store_icon} alt="Grovo" />
        <h1>Grovo</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Categories</a>
          </li>
          <li>
            <a href="">Packages</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">Feedback</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <div className="acc">Sign In</div>
        <div className="cart">
          <span>0</span>
          <BsCart3 size={27} className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
