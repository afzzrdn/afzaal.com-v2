"use client"
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setShowNavbar(false); // Hide navbar when scrolling down
      } else {
        setShowNavbar(true); // Show navbar when scrolling up
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={`w-full flex justify-center items-center roboto`}>
      <div
        className={`fixed top-0 w-full flex justify-between py-[20px] px-[20px] md:px-[50px] bg-black/80 shadow-lg shadow-[#3485ff]/10 backdrop-blur-sm items-center z-[100] 
          transition-transform duration-300 ease-in-out ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <a href="/" className="text-xl md:text-3xl text-[#3485ff]">
          村田
        </a>
        <button
          className="md:hidden text-white text-xl z-[100]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul
          className={`flex flex-col md:flex-row gap-10 text-white text-sm fixed md:static top-0 left-0 w-full h-[300px] md:h-auto md:w-auto bg-black/90 md:bg-transparent p-10 md:p-0 items-center justify-center transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <li>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#3485ff]">01. </span>About
            </a>
          </li>
          <li>
            <a href="#project" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#3485ff]">02. </span>Project
            </a>
          </li>
          <li>
            <a href="#certification" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#3485ff]">03. </span>Certification
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>
              <span className="text-[#3485ff]">04. </span>Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
