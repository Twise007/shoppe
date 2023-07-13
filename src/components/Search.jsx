import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  const [find, setFind] = useState("");

  return (
    <div className="flex flex-col items-center md:hidden">
      <div className=" flex items-center justify-center w-full px-2 rounded-2xl bg-[#cdcdcd] md:px-10 top-20">
        <button type="submit">
          <BsSearch className="ml-4" />
        </button>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setFind(e.target.value)}
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
  );
};

export default Search;
