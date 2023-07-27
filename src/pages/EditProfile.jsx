import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCloudUpload } from "react-icons/md";

const initialState = {
  name: "",
  email: "Example@gmail.com",
  password: "",
  password2: "",
};

const EditProfile = () => {

  const navigate = useNavigate();
  const [profileImage, setprofileImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setprofileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    navigate(`/profile`); // navigate to another page but unfortunately we currently have only a page
  };

  return (
    <div className="min-h-[80vh] mx-2">
      <div className="h-52 max-h-52  bg-[#cdcdcd] rounded-xl hero">
        <h1 className="text-3xl font-semibold uppercase text-cl-acn">
          Edit Profile
        </h1>
      </div>
      <form onSubmit={updateProfile} className="md:mx-6">
        <div className="flex flex-col items-center -mt-20 md:justify-between md:flex-row">
          <div className="flex flex-col md:gap-6 md:items-baseline md:flex-row label-text">
            <div
              className="rounded-full bg-white shadow-md hero w-[10.5rem] h-[10.5rem] cursor-pointer"
              onClick={() => document.querySelector(".image-field").click()}
            >
              <div className="w-40 h-40 rounded-full">
                <input
                  alt="customer_img"
                  id="image"
                  type="file"
                  accept=".jpeg, .png, .jpg"
                  onChange={(e) => handleImageChange(e)}
                  className="hidden object-cover w-full h-full rounded-full image-field "
                />
                {imagePreview != null ? (
                  <img
                    src={imagePreview}
                    alt="edit img"
                    className="object-cover w-full h-full p-1 rounded-full"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-4 mt-6 text-center capitalize">
                    <MdCloudUpload className="w-8 h-8" />
                    <p className="">Change your image</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        <div className="mt-4">
          <div className="form-control">
            <label className=" label">
              <span className="font-medium label-text">User's Name :</span>
            </label>
            <input
              className="p-2 my-3 bg-transparent border rounded-lg outline-none border-cl-acn"
              type="text"
              placeholder="John Doe"
              name={name}
              // value={name}
              onChange={handleInputChange}
            />
          </div>

          <div className=" form-control">
            <label className=" label">
              <span className="font-medium label-text">Email Cannot Be Change</span>
            </label>
            <input
              className="p-2 my-3 bg-transparent border rounded-lg outline-none cursor-not-allowed border-cl-acn"
              type="email"
              disabled
              name={email}
              value={email}
              onChange={handleInputChange}
            />
          </div>

          <div className=" form-control">
            <label className=" label">
              <span className="font-medium label-text">Change Password :</span>
            </label>
            <input
              className="p-2 my-3 bg-transparent border rounded-lg outline-none border-cl-acn"
              type="password"
              placeholder="********"
              name={password}
              // value={password}
              onChange={handleInputChange}
            />
          </div>

          <div className=" form-control">
            <label className=" label">
              <span className="font-medium label-text">Confirm Password :</span>
            </label>
            <input
              className="p-2 my-3 bg-transparent border rounded-lg outline-none border-cl-acn"
              type="password"
              placeholder="********"
              name={password2}
              // value={password2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 my-4 text-xl duration-300 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
