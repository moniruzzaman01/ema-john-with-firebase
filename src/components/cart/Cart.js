import React from "react";
import "./Cart.css";

function Cart({ cart }) {
  let totalProduct = 0;
  let totalPrice = 0;
  let ShippingFee = 0;

  for (const data of cart) {
    totalProduct = totalProduct + data.quantity;
    totalPrice = totalPrice + data.price * data.quantity;
    ShippingFee = ShippingFee + data.shipping;
  }

  let Tax = totalPrice * 0.1;
  const grnadTotal = totalPrice + ShippingFee + Tax;
  return (
    <div className="cart-container">
      <div className="cart">
        <h2>Cart container</h2>
        <p>Total Products: {totalProduct} </p>
        <p>Total Price: {totalPrice.toFixed(2)} </p>
        <p>Shipping Fee: {ShippingFee.toFixed(2)} </p>
        <p>Tax: {Tax.toFixed(2)} </p>
        <h4>Grand Total: {grnadTotal.toFixed(2)} </h4>
      </div>
    </div>
  );
}

export default Cart;
