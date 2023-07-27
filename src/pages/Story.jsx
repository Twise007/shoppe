import React from "react";
import Logo from "../assets/logo.svg";

const Story = () => {
  return (
    <div className="min-h-[80vh]">
      <h1 className="m-2 text-3xl uppercase">our story</h1>

      <div className="h-40 mb-4 shadow-2xl rounded-2xl min-h-40 hero">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Story;
