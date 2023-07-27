import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../constants";

const ProfileChart = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  return (
    <tbody className="text-xl font-medium border-b border-black">
      <td className="capitalize ">{productData.title}</td>
      <td>{quantity}</td>
      <td>$ {productData.price}</td>
      <td>$ {(quantity * productData.price).toFixed(2)}</td>
    </tbody>
  );
};

export default ProfileChart;
