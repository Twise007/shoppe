import React, { useContext } from "react";
import { BsCart, BsEye } from "react-icons/bs";
import { CartContext } from "../CartContext";
import { BiHeart } from "react-icons/bi";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  
  return (
    <div className="relative rounded-md hover:shadow w-36 md:w-72 lg:w-96 md:pt-0 group">
      <img src={product.image} alt="section gallery" />

      <div className="absolute top-20 left-4 md:top-36 md:left-24 lg:top-44 lg:left-32 lg:gap-8 flex gap-4 items-center justify-center text-[24px] opacity-0  group-hover:opacity-100">
        <button type="submit">
          <BsCart className="hover:font-bold hover:text-cl-acn hover:text-[32px] duration-700 cursor-pointer" />
        </button>
        <button type="submit">
          <BsEye className="hover:font-bold hover:text-cl-acn hover:text-[32px] duration-700 cursor-pointer" />
        </button>
        <button type="submit">
          <BiHeart className="hover:font-bold hover:text-cl-acn hover:text-[32px] duration-700 cursor-pointer" />
        </button>
      </div>

      <button
        onClick={() => cart.addOneToCart(product.id)}
        className="md:py-4 py-2 text-center bg-[#cdcdcd]  w-full  hover:bg-cl-acn cursor-pointer"
      >
        ADD TO CART
      </button>

      <div className="p-2 pt-4">
        <h2 className="pb-2 font-medium capitalize">{product.title}</h2>
        <p className="font-medium text-cl-acn">
          {"$"} {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
