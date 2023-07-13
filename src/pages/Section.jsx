import React from "react";
import { sectionData } from "../constants";
import Img from "../assets/img2.png";

const Section = () => {
  return (
    <section className="my-10 md:mb-32">
      <div className="relative flex justify-between py-6">
        <p className="font-semibold">Shop The Latest</p>
        <p className="text-cl-acn cursor-pointer hover:text-[16px] hover:font-semibold duration-300">
          View All
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
        {sectionData.map((section, index) => (
          <div className="grid-cols-2 pt-10 w-36 md:w-72 lg:w-96 md:pt-0" key={index}>
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
