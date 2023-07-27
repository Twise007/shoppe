import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );



  return (
    <div className=" min-h-[80vh]">
      <h1 className="py-6 text-2xl">Shopping Cart</h1>

      {productsCount > 0 ? (
        <>
          {cart.items.map((currentProduct, index) => (
            <CartProduct
              key={index}
              id={currentProduct.id}
              quantity={currentProduct.quantity}
            />
          ))}

          <h1 className="m-2 text-lg text-center md:text-start">
            Total : $ <span className="text-4xl font-semibold text-cl-acn">{cart.getTotalCost().toFixed(2)}</span>
          </h1>
        </>
      ) : (
        <div className="h-[50vh] my-10 capitalize text-5xl font-normal text-center hero text-rose-500">
          There are no items in your cart
        </div>
      )}

      <button
        type="submit"
        className="w-full py-1 mx-2 mt-2 duration-300 border border-green-500 rounded-lg hover:bg-green-500 hover:text-white "
      >
        Purchase All Items
      </button>
    </div>
  );
};

export default Cart;
