import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { BsCart, BsSearch, BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg'

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

  return (
    <div className="navbar sticky top-0 z-20 bg-white">
      <div className="flex-1">
        <img src={Logo} alt="home" className=" cursor-pointer" />
      </div>
      <ul className="list-none hidden md:flex flex-row gap-10">
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

      <div className="md:hidden flex flex-1 justify-end items-center">
        <div className="flex justify-between items-center gap-6">
          <BsCart className="text-3xl cursor-pointer" />
          <Hamburger toggled={toggle} toggle={setToggle} />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } absolute top-12 right-0 my-3 min-w-[140px] min-h-screen`}
        >
          <ul className="list-none justify-start bg-white menu">
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
                  className="rounded-md duration-300 hover:text-cl-acn capitalize py-4"
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
