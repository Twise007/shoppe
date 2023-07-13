import React from "react";
import Img from "../assets/img2.png";

const Section = () => {
  return (
    <section className="pb-10">
      <div className="flex justify-between py-6 relative">
        <p className="font-semibold">Shop The Latest</p>
        <p className="text-cl-acn cursor-pointer hover:text-[16px] hover:font-semibold duration-300">
          View All
        </p>
      </div>
      <div className="card w-96 shadow-xl">
        <figure className=" rounded-b-none">
          <img src={Img} alt="latest photo" className="rounded-none" />
        </figure>
        <p className=" uppercase font-bold text-center bg-[#cdcdcd] py-2 rounded-b-2xl hover:bg-cl-acn duration-300">
          add to card
        </p>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p className="text-cl-acn">
            {"$"} {"hhhh"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
