import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, pd) => total + pd.salary, 0);
  return (
    <div className="cartInfo">
      <h1>Summary</h1>
      <p>Connected Peoples: {cart.length}</p>
      <p>Total Yearly Salary: $ {total}</p>
    </div>
  );
};

export default Cart;
