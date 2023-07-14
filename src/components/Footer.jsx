import React, { useState } from "react";
import axios from "axios";

import { BsArrowRight } from "react-icons/bs";
import { toast } from "react-toastify";
import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
} from "react-icons/bi";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate(); //this is use to navigate to back to home after sending the mail
  const [isLoading, setIsLoading] = useState(false); // loading state
  const [data, setData] = useState({
    email: "",
    checked: "",
  });

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(data);
    setIsLoading(true);
    try {
      const response = await axios.post(
        process.env.REACT_APP_SHOPPE_BACKEND_EMAIL,
        data,
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      );
      setData("");
      toast("Thank you for subscribing.");
      setIsLoading(false);
    } catch (error) {
      toast("Oh, Something went wrong. Please try again.");
      setIsLoading(false);
      navigate("/");
    }
  };

  return (
    <div className="pt-8 border-t-2">
      <div className="items-center justify-between md:flex md:flex-row-reverse ">
        <form onSubmit={sendEmail}>
          <div className="w-[18rem] md:w-[30rem] flex items-center border-b-2 border-b-black">
            <input
              type="email"
              placeholder="Give an email to get our newsletter."
              required
              name="email"
              onChange={handleInput}
              className="w-full p-2 bg-white outline-none "
            />
            {!isLoading && (
              <button type="submit">
                <BsArrowRight className="text-cl-acn hover:text-[24px] duration-300" />
              </button>
            )}
            {isLoading && (
              <button disabled>
                <span className="loading loading-dots loading-lg"></span>
              </button>
            )}
          </div>
          <div className="flex pt-2">
            <input
              required
              type="checkbox"
              name="checked"
              onChange={handleInput}
              className="checkbox"
            />
            <label className="pl-4">
              I agree to the website`s terms and conditions
            </label>
          </div>
        </form>
        <div className="md:flex  gap-8 uppercase text-[grey] pt-6 md:pt-0">
          <p className="my-3 cursor-not-allowed w-fit md:my-0">contact</p>
          <p className="my-3 cursor-not-allowed w-fit md:my-0">
            terms of service
          </p>
          <p className="my-3 cursor-not-allowed w-fit md:my-0">
            shipping and returns
          </p>
        </div>
      </div>
      <div className="items-center justify-between py-4 md:pt-8 md:flex md:flex-row-reverse">
        <div className="flex gap-8 ">
          <p className="flex items-center ">Follow us on</p>
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
