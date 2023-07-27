import React, { useEffect, useState, useContext } from "react";
import Hamburger from "hamburger-react";
import { BsCart, BsSearch, BsPerson } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const navLinks = [
  { title: "shop", id: "shop" },
  { title: "blog", id: "blog" },
  { title: "our story", id: "our-story" },
  { title: <BsPerson />, id: "profile", name: "profile" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  //total number of product on top of the cart icons
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

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
      <ul className="flex-row hidden gap-10 list-none md:flex text-[20px]">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`${
              active === nav.title
                ? "text-cl-acn hover:text-[24px]"
                : "text-black"
            } hover:text-cl-acn hover:text-[24px] cursor-pointer duration-300 capitalize`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.id}>{nav.title}</Link>
          </li>
        ))}
        <Link
          to="/cart"
          className="duration-300 cursor-pointer hover:text-cl-acn hover:text-[24px]"
        >
          <div className=" indicator">
            <span className="p-1 indicator-item indicator-top indicator-end badge badge-secondary">
              {productsCount}
            </span>
            <div className="grid place-items-center">
              <BsCart />
            </div>
          </div>
        </Link>

        <div
          className="duration-300 cursor-pointer hover:text-cl-acn hover:text-[24px]"
          onClick={() => {
            setActiveSearch(true);
          }}
        >
          <BsSearch />
        </div>

        {activeSearch && (
          <div className="absolute justify-center right-0 items-center w-[80%] h-full pt-4 mb-3 bg-white border-b-2 border-[#cdcdcd] rounded-r-md flex z-10">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full h-full px-4 bg-transparent outline-none"
            />
            <button
              onClick={() => {
                setActiveSearch(false);
              }}
              type="submit"
              className="h-full px-4 bg-[#cdcdcd] hover:bg-cl-acn hover:text-[#cdcdcd] rounded-r-md text-cl-acn duration-300"
            >
              <FaTimes className="text-[24px]" />
            </button>
          </div>
        )}
      </ul>

      {/* mobile menu */}

      <div className="flex items-center justify-end flex-1 md:hidden">
        <div className="flex items-center justify-between gap-6 text-center">
          <Link
            to="/cart"
            className="duration-300 cursor-pointer hover:text-cl-acn text-[24px] mt-2"
          >
            <div className="indicator">
              <span className="p-1 indicator-item indicator-top indicator-end badge badge-secondary">
                {productsCount}
              </span>
              <div className="grid place-items-center">
                <BsCart />
              </div>
            </div>
          </Link>
          <Hamburger toggled={toggle} toggle={setToggle} />
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } absolute top-12 right-0 my-3 min-w-[140px] min-h-screen glass`}
        >
          <ul className="justify-start list-none bg-white menu">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`w-[13pc] cursor-pointer text-[20px] hover:text-[24px] ${
                  active === nav.title ? "text-cl-acn" : ""
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <Link
                  className="py-4 capitalize duration-300 rounded-md hover:text-cl-acn"
                  to={nav.id}
                >
                  {nav.title} {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
