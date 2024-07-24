import React from "react";
import "./TabPurchase.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useMyContext } from "../../context/searchContext";

export default function TabPurchase({ purchase }) {
  const { deletePurchase, handleIncrease, handleDecrease, quantity } =
    useMyContext();

  return (
    <tr>
      <td className="name-purchase">{purchase.name}</td>
      <td className="price">{purchase.price}</td>
      <td className="quantity">
        <button onClick={() => handleDecrease(purchase)}>-</button>
        {purchase.quantity}
        <button onClick={() => handleIncrease(purchase)}>+</button>
      </td>
      <td className="price">{purchase.price}$</td>
      <td>
        <IoIosCloseCircleOutline
          onClick={() => deletePurchase(purchase)}
          style={{ cursor: "pointer" }}
        />
      </td>
    </tr>
  );
}
