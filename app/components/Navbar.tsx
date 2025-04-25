"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    <div className="w-full text-white flex justify-center">
      <div
        className={` border-[#424242] border-[0.05vw] rounded-full p-[0.4vw] fixed top-2 w-[60vw] flex justify-between items-center z-[100] 
          transition-transform duration-[1000] ease-in-out ${
            showNavbar ? "translate-y-0" : "-translate-y-[200px]"
          }`}
      >
        <div className="flex gap-3">
          <Image
            src="/img/image-2.jpeg"
            alt="image"
            width={30}
            height={30}
            className="rounded-full"
          />
          <p className="text-xl">Afzaal</p>
        </div>
        <button
          className="md:hidden text-white text-xl z-[100] mr-3"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul
          className={`flex flex-col md:flex-row gap-10 text-white text-sm fixed md:static top-0 left-0 w-full h-[300px] md:h-auto md:w-auto bg-black/90 md:bg-transparent p-10 md:p-0 items-center justify-center transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen ? "md:translate-x-[0px] translate-x-[-100px]" : "-translate-x-[500px] md:translate-x-[0px]"
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
        <Link 
          href="mailto:mhmdafz78@gmail.com?subject=Hi, Afzaal%20&body=Hi%20Afzaal,%20I%20want%20to%20discuss%20..." 
          className="rounded-full border-[#424242] bg-[#161616] border-[0.05vw] px-5 py-2 text-xs">
          Let&apos;s Connect
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
