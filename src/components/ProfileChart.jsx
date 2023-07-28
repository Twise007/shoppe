import React from "react";

import { getProductData } from "../constants";

const ProfileChart = (props) => {

  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);
  return (
    <tr className="text-xl font-medium border-b border-black">
      <td className="capitalize ">{productData.title}</td>
      <td>{quantity}</td>
      <td>$ {productData.price}</td>
      <td>$ {(quantity * productData.price).toFixed(2)}</td>
    </tr>
  );
};

export default ProfileChart;
