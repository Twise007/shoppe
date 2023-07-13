import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";

const datas = [
  {
    link: "https://www.linkedin.com/company/livestock-wealth/",
    icon: <BiLogoLinkedin />,
  },
  {
    link: "https://www.facebook.com/livestockwealthZA/",
    icon: <BiLogoFacebook />,
  },
  {
    link: "https://www.instagram.com/livestock_wealth/",
    icon: <BiLogoInstagram />,
  },
  { link: "https://twitter.com/livestockwealth", icon: <BiLogoTwitter /> },
];

const Footer = () => {
  return (
    <div className="border-t-2 pt-8">
      <div className="md:flex md:flex-row-reverse justify-between items-center ">
        <form>
          <div className="w-[20rem] md:w-[30rem] flex items-center border-b-2 border-b-black">
            <input
              type="email"
              placeholder="Give an email to get the newsletter."
              className="w-full p-2 bg-white outline-none "
            />
            <BsArrowRight className="text-cl-acn hover:text-[24px] duration-300" />
          </div>
          <div className="flex pt-2">
            <input type="checkbox" name="" id="" />
            <p className="pl-4">
              I agree to the website`s terms and conditions
            </p>
          </div>
        </form>
        <div className="md:flex  gap-8 uppercase text-[grey] pt-6 md:pt-0">
          <p className="my-3 w-fit md:my-0 cursor-not-allowed">contact</p>
          <p className="my-3 w-fit md:my-0 cursor-not-allowed">terms of service</p>
          <p className="my-3 w-fit md:my-0 cursor-not-allowed">shipping and returns</p>
        </div>
      </div>
      <div className="py-4 md:pt-8 md:flex md:flex-row-reverse justify-between items-center">
        <div className="flex gap-8 ">
          <p className=" flex items-center">Follow us on</p>
          <ul className="flex flex-row items-center justify-start h-16 gap-2 list-none ">
            {datas.map((data, index) => (
              <div key={index} onClick={() => window.open(data.link, "_blank")}>
                <li className="flex flex-row justify-between items-center hover:text-cl-acn text-[gray] duration-300 text-[20px] hover:text-[24px] cursor-pointer">
                  {data.icon}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <p>
          © 2023 Shelly. <span className="text-[grey]">Terms of use</span> and{" "}
          <span className="text-[grey]">privacy and policy.</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
