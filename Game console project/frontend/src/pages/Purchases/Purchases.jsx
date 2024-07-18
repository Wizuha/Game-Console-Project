import React from "react";
import "./Purchase.css";
import { useMyContext } from "../../context/searchContext";
import TabPurchase from "../../components/TabPurchase/TabPurchase";

export default function Purchases() {
  const { purchases } = useMyContext();
  return (
    <div className="purchase-content">
      <div className="purchase-table">
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
              {purchases.map((purchase) => (
                <TabPurchase purchase={purchase} key={purchase.id_console} />                
              ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
