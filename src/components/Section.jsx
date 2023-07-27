import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { productArray } from "../constants/index";
import { BsSearch } from "react-icons/bs";

const Section = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="my-10 md:mb-32">
      <div className="relative flex justify-between py-6">
        <p className="font-semibold">Shop The Latest</p>
        <p className="text-cl-acn cursor-pointer hover:text-[16px] hover:font-semibold duration-300">
          View All
        </p>
      </div>

      {/* search section */}
      <div className="flex flex-col items-center md:hidden">
        <div className=" flex items-center justify-center w-full px-2 rounded-2xl bg-[#cdcdcd] md:px-10 top-20">
          <button type="submit">
            <BsSearch className="ml-4" />
          </button>
          <input
            type="text"
            placeholder="Search here..."
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

      <div className="grid grid-cols-2 gap-2 md:gap-8 xl:grid-cols-3 place-items-center">
        {productArray
          .filter((product) => {
            return search.toLowerCase() === ""
              ? product
              : product.title.toLowerCase().includes(search);
          })
          .map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Section;
