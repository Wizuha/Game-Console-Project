import React from 'react'
import './TabPurchase.css'

export default function TabPurchase({purchase}) {
  return (
    <div className="content-tab">
      <table className="purchase-table">
        <thread>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <th>{purchase.name}</th>
            <th>{purchase.price}</th>
            <th>quantité</th>
            <th>{purchase.price}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
