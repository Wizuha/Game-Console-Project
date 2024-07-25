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
      <div className="card-total">
        <table className="single-column-table">
          <thead>
            <tr>
              <th>Nom du Produit</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="single-column">
                <div className="subtotal-card-total">
                  <h2>Subtotal</h2>
                  <p>$200</p>
                </div>
                <div className="line"></div>
                <div className="coupon">
                  <input type="text" name="coupon" placeholder="Enter coupon" />
                  <button>Apply</button>
                </div>
                <div className="line"></div>
                <div className="country">
                  <input type="text" name="country" placeholder="Country" />
                </div>
                <div className="proced-checkout">
                  <button>Proceed checkout</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
