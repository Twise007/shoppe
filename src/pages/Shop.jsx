import React from "react";
import {
  BsFillTelephoneInboundFill,
  BsFillMegaphoneFill,
} from "react-icons/bs";

import Sidebar from "../components/Sidebar";

const Shop = () => {
  return (
    <div className="">
      <div className="sticky z-20 hidden h-10 p-0 md:flex top-16 navbar">
        <div className=" bg-[#cdcdcd] w-full h-full px-2">
          <BsFillMegaphoneFill size={38} />
          <p className="px-2 text-xl">
            Lorem ipsum dolor sit amet consectetur accusantium
          </p>
        </div>
        <div className="bg-[#ABDEF1] w-52 h-full px-2 flex items-center justify-between">
          <BsFillTelephoneInboundFill size={24} />
          <span className="text-xl font-semibold"> +123456789</span>
        </div>
      </div>

      <Sidebar />
    </div>
  );
};

export default Shop;
