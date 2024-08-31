"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

 
    const handleScroll =  () => {
      if (window.scrollY >= 60) {              // height
        setNavbarBg(true);
      }
      else {
        setNavbarBg(false)
      }
    }
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);              // scroll evt, func

        return () => {
          window.removeEventListener('scroll', handleScroll);           // refresh
        }
    
      }, []);

  return (
      <div className={`navbar-1 fixed top-0  z-20 transition-all ${navbarBg ? 'bg-white w-[100%] text-black flex justify-around p-3 items-center shadow-md' :  'flex justify-between items-center text-white mx-[100px] h-[60px] w-[88%] bg-transparent'}`}>

{
  navbarBg ? 

  <div className="nav-left">
          <Image 
            src="/assets/images/asset 1.png"
            alt="logo"
            width={150}
            height={50}
          />
        </div>

        :

        <div className="nav-left">
          <Image 
            src="/assets/images/asset 2.png"
            alt="logo"
            width={150}
            height={50}
          />
        </div>
}


        <div className="nav-middle">
          <ul className= "links mb-0 flex gap-6">
            <Link href="/" className={`link ${navbarBg ? 'text-black' : 'text-white'}`}>
              Home
            </Link>
            <Link href="/Pages" className={`link ${navbarBg ? 'text-black' : 'text-white'}`}>
              Pages
            </Link>
            <Link href="/Portfolio" className={`link ${navbarBg ? 'text-black' : 'text-white'}`}>
              Portfolio
            </Link>
            <Link href="/Blog" className={`link ${navbarBg ? 'text-black' : 'text-white'}`}>
              Blog
            </Link>
            <Link href="/Elements" className={`link ${navbarBg ? 'text-black' : 'text-white'}`}>
              Elements
            </Link>
            <Link href="/Shop" className={`link ${navbarBg ? 'text-black' : 'text-white'}`}>
              Shop
            </Link>
          </ul>
        </div>

        <div className="nav-right flex gap-7">
          <div className="">|</div>
          <LocalGroceryStoreIcon  className=""/>
          <SearchIcon />
          <MenuIcon />
          
        </div>
      </div>
  );
};

export default Navbar;
