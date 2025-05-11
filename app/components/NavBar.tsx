"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Button from "./ui/Button";
import Link from 'next/link';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(!menuOpen)



  }

  const navBarLinks = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop"},
    { title: "Pre-Orders", href: "/preorders " },
    { title: "Cart", href: "/cart" }
  ];

  return (
    <nav className="w-full bg-white px-6 md:px-32  py-4 sticky top-0 left-0 z-50">
      <div className="flex justify-between items-center  mx-auto">
        
      <Link href="/app">
      <div className="text-3xl cursor-pointer font-bold text-black">
          Yuu<span className="text-[#fc5b37]">Jou.</span>
        </div>

      </Link>
        <ul className="hidden lg:flex items-center gap-6 text-lg font-bold">
          {navBarLinks.map((link, index) => (
          
            <li
              key={index}
              className={`cursor-pointer ${
                index === 0
                  ? "text-[#fc5b37] border-b-2 border-[#fc5b37]"
                  : "text-gray-500 "
              }`}
            >
            <Link href={link.href}>
        {link.title}
      </Link>
            </li>
            
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4 text-gray-500 text-lg font-bold ">
          <span className="text-gray-600">Sign in</span>
          <Button
          text="Register"/>
        </div>

        <div className="lg:hidden">
          <button 
          onClick={openMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}

          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col gap-4 text-lg font-bold">
            {navBarLinks.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  index === 0
                    ? "text-[#fc5b37] border-b-2 border-[#fc5b37]"
                    : "text-gray-500 hover:border-b-2 border-[#fc5b37] transition-all duration-300"
                }`}
              >
                {link.title}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <span className="text-gray-600">Sign in</span>
            <button className="bg-[#fc5b37] text-white py-2 px-4 rounded text-sm w-fit">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
