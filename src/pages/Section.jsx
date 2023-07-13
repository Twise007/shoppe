import React, { useState } from "react";
import { sectionData } from "../constants";
import { BsSearch } from "react-icons/bs";



const Section = () => {
  const [search, setSearch] = useState("");
  return (
    <section className="my-10 md:mb-32">
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
        <div className="flex items-center h-20 gap-8 mb-8 ml-6 overflow-x-auto capitalize w-96">
          <p className="w-[20rem] p-4 mt-4 text-center border-2 rounded-l hover:bg-cl-acn">
            earring
          </p>
          <p className="w-[20rem] p-4 mt-4 text-center border-2 rounded-l hover:bg-cl-acn">
            necklace
          </p>
          <p className="w-[20rem] p-4 mt-4 text-center border-2 rounded-l hover:bg-cl-acn">
            hair pin
          </p>
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
              className="grid-cols-2 pt-10 w-36 md:w-72 lg:w-96 md:pt-0"
              key={index}
            >
              <img src={section.image} alt="" />
              <div className="pt-4">
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
