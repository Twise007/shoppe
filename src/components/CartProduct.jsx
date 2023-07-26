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
    <div className="m-2 bg-[#cdcdcd] md:px-4 px-1 rounded-lg py-1 hover:py-2 duration-300">
      <h5 className="pl-2 text-xl font-semibold uppercase">{productData.title}</h5>
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <img
              src={productData.image}
              alt=""
              className="object-cover w-20 h-20 m-2 rounded-xl"
            />
            <p>
              Price : ${" "}
              <span className="text-xl text-cl-acn">{productData.price}</span>
            </p>
          </div>
          <div className="flex gap-4 text-xl">
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
        <div className="flex flex-col items-center gap-1 md:gap-4">
          <div className="flex flex-col md:gap-6 md:flex-row">
            <p>
              Total Items :{" "}
              <span className="text-2xl text-cl-acn"> {quantity}</span>
            </p>
            <h2>
              Total Amount :{" "} $
              <span className="text-2xl text-cl-acn">
                {quantity * productData.price}
              </span>
            </h2>
          </div>
          <button
            type="submit"
            className="w-full py-1 text-xl text-center duration-300 bg-white border rounded-lg cursor-pointer border-rose-500 text-rose-500 hover:text-white hover:bg-rose-500"
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
