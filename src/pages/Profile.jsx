import React, { useState } from "react";
import Customer from "../assets/customer.png";
import { BsCamera, BsArrowDownCircle } from "react-icons/bs";

const initialState = {
  name: "babatunde oke",
  email: "Example@gmail.com",
  coupon: "5gtdb90",
  password: "",
};

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState(initialState);
  const { name, email, coupon, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-[80vh] mx-2">
      <div className="h-52 max-h-52  bg-[#cdcdcd] rounded-xl"></div>
      <div className="mx-6">
        <div className="flex flex-col -mt-20 md:justify-between md:flex-row">
          <div className="flex items-center gap-6 md:gap-10 ">
            <div className="rounded-full bg-white shadow-md hero w-[10.5rem] h-[10.5rem] cursor-pointer">
              <div className="w-40 h-40 rounded-full">
                <img src={Customer} alt="customer_img" className="object-cover w-full h-full rounded-full " />
              </div>
            </div>
            <input
              type="text"
              className="h-10 mt-20 text-2xl font-semibold text-black capitalize bg-transparent outline-none w-fit"
              name={name}
              value={name}
              onChange={handleInputChange}
            />
          </div>
          <h1 className="md:mt-[6rem] text-l text-start mr-8 md:mr-0">
            Extra Svaing : $
            <span className="text-2xl font-semibold text-cl-acn">{"101"}</span>
          </h1>
        </div>
        <div className="flex flex-col items-start justify-between md:items-center md:flex-row">
          <input
            className="my-3 text-xl bg-transparent outline-none cursor-not-allowed"
            type="email"
            disabled
            name={email}
            value={email}
            onChange={handleInputChange}
          />
          <div className="flex items-center justify-center gap-0 p-0 m-0">
            <div>Coupon Code :  </div>
            <input
              className="ml-1 text-2xl font-semibold uppercase bg-transparent outline-none cursor-not-allowed text-end text-cl-acn w-[6rem]"
              type="coupon"
              disabled
              name={coupon}
              value={coupon}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* shooping history */}
        <div className="mt-4">
          <div
            className="p-3 text-xl font-medium cursor-pointer bg-[#cdcdcd] rounded-xl flex items-center justify-between"
            onClick={() => setOpen(!open)}
          >
            <p>Your shopping history with us</p>
            <BsArrowDownCircle
              className={`  duration-700 ${open && "rotate-180 text-cl-acn"}`}
            />
          </div>
          <div
            className={` shadow-xl mx-4 my-2 p-2  duration-500 rounded-xl ${
              open ? "h-fit" : "hidden"
            }`}
          >
            <div className="overflow-x-auto">
              <table className="table text-l">
                {/* head */}
                <thead>
                  <tr className="text-xl text-black">
                    <th>Item Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 this will later be a map object */}
                  <tr>
                    <td>Quality Control Specialist</td>
                    <td>400</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Desktop Support Technician</td>
                    <td>200</td>
                  </tr>
                </tbody>
                {/* head */}
                <tfoot>
                  <tr className="text-xl text-white">
                    <th>Total Price</th>
                    <th className="text-2xl text-cl-acn">600</th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
