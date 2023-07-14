import React, { useState } from "react";
import { sectionData } from "../constants";
import { BsCart, BsEye, BsSearch } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

const Section = () => {
  const [search, setSearch] = useState("");
  return (
    <section className="my-10 md:mb-32">
      {/* search section */}
      <div className="flex flex-col items-center md:hidden">
        <div className=" flex items-center justify-center w-full px-2 rounded-2xl bg-[#cdcdcd] md:px-10 top-20">
          <button type="submit">
            <BsSearch className="ml-4" />
          </button>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 bg-transparent outline-none"
          />
        </div>
        <div className="flex justify-between w-full overflow-x-auto">
          <div className="flex items-center justify-between w-full h-20 gap-2 mb-8 ml-10 capitalize">
            <p className="w-[10rem] p-4 mt-4 text-center border-2 rounded-l hover:bg-cl-acn">
              earring
            </p>
            <p className="w-[10rem] p-4 mt-4 text-center border-2 rounded-l hover:bg-cl-acn">
              necklace
            </p>
            <p className="w-[10rem] p-4 mt-4 text-center border-2 rounded-l hover:bg-cl-acn">
              pin
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex justify-between py-6">
        <p className="font-semibold">Shop The Latest</p>
        <p className="text-cl-acn cursor-pointer hover:text-[16px] hover:font-semibold duration-300">
          View All
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
        {sectionData
          .filter((section) => {
            return search.toLowerCase() === ""
              ? section
              : section.title.toLowerCase().includes(search);
          })
          .map((section, index) => (
            <div
              className="relative grid-cols-2 pt-10 rounded-md hover:shadow w-36 md:w-72 lg:w-96 md:pt-0 group "
              key={index}
            >
              <img src={section.image} alt="section gallery" />
              <div className="absolute flex gap-4 top-[36%] text-[24px] items-center text-center left-[34%] opacity-0  group-hover:opacity-100 ">
                <button type="submit">
                  <BsCart className="hover:font-bold hover:text-cl-acn hover:text-[32px] duration-700 cursor-pointer" />
                </button>
                <button type="submit">
                  <BsEye className="hover:font-bold hover:text-cl-acn hover:text-[32px] duration-700 cursor-pointer" />
                </button>
                <button type="submit">
                  <BiHeart className="hover:font-bold hover:text-cl-acn hover:text-[32px] duration-700 cursor-pointer" />
                </button>
              </div>
              <div className="py-4 text-center bg-[#cdcdcd] absolute w-full bottom-20 hover:bg-cl-acn cursor-pointer">
                ADD TO CART
              </div>
              <div className="p-2 pt-4 mt-12">
                <h2 className="pb-2 font-medium capitalize">{section.title}</h2>
                <p className="font-medium text-cl-acn">
                  {"$"} {section.price}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Section;
