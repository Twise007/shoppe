import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { BsCart, BsSearch, BsPerson } from "react-icons/bs";

import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "shop", id: "shop" },
  { title: "blog", id: "blog" },
  { title: "our story", id: "our story" },
  { title: <BsSearch />, id: "search", name: "search" },
  { title: <BsCart />, id: "cart", name: "your cart" },
  { title: <BsPerson />, id: "profile", name: "profile" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  

  // the use effect is use for refresh back to the top of the page 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="sticky top-0 z-20 bg-white navbar" id="#home">
      <Link
        to="/"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="flex-1"
      >
        <img src={Logo} alt="home" className="cursor-pointer " />
      </Link>
      <ul className="flex-row hidden gap-10 list-none md:flex">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title ? "text-cl-acn" : "text-black"
            } hover:text-cl-acn text-[16px] hover:text-[18px] cursor-pointer duration-300 capitalize`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* mobile menu */}

      <div className="flex items-center justify-end flex-1 md:hidden">
        <div className="flex items-center justify-between gap-6">
          <BsCart className="text-3xl cursor-pointer" />
          <Hamburger toggled={toggle} toggle={setToggle} />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } absolute top-12 right-0 my-3 min-w-[140px] min-h-screen`}
        >
          <ul className="justify-start list-none bg-white menu">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`w-[13pc] cursor-pointer text-[16px] hover:text-[18px] ${
                  active === nav.title ? "text-cl-acn" : ""
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a
                  className="py-4 capitalize duration-300 rounded-md hover:text-cl-acn"
                  href={`#${nav.id}`}
                >
                  {nav.title} {nav.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
