import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../constants";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div className="m-2 bg-[#cdcdcd] md:px-4 px-1 rounded-lg py-1 duration-500 hover:shadow-lg hover:my-3 hover:py-2 ease-in-out">
      <h5 className="pl-2 text-xl font-semibold text-center uppercase md:text-start">
        {productData.title}
      </h5>
      <div className="flex items-center justify-between gap-4 px-2 py-1 md:py-0">
        <div className="flex flex-col items-center md:gap-4 md:flex-row">
          <div className="flex flex-col items-center text-center md:text-end">
            <img
              src={productData.image}
              alt=""
              className="object-cover w-20 h-20 m-1 md:m-2 rounded-xl"
            />
            <p className="">
              Price : ${" "}
              <span className=" md:text-xl text-cl-acn">{productData.price}</span>
            </p>
          </div>
          <div className="flex flex-row gap-4 md:text-xl">
            <div
              className="p-1 text-green-500 duration-300 bg-white rounded-lg cursor-pointer hover:bg-cl-acn"
              onClick={() => cart.addOneToCart(id)}
            >
              <FaPlus />
            </div>
            <div
              className="p-1 text-red-500 duration-300 bg-white rounded-lg cursor-pointer hover:bg-cl-acn"
              onClick={() => cart.removeOneToCart(id)}
            >
              <FaMinus />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-2 md:gap-6 md:flex-row">
            <p>
              Total Items :{" "}
              <span className="text-xl md:text-2xl text-cl-acn"> {quantity}</span>
            </p>
            <h2>
              Total Amount : $
              <span className="text-xl md:text-2xl text-cl-acn">
                {(quantity * productData.price).toFixed(2)}
              </span>
            </h2>
          </div>
          <button
            type="submit"
            className="w-full text-center duration-300 bg-white border rounded-lg cursor-pointer md:py-1 md:text-xl border-rose-500 text-rose-500 hover:text-white hover:bg-rose-500"
            onClick={() => cart.deleteFromCart(id)}
          >
            Delete Row
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
