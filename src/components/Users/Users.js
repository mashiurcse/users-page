import React, { useState, useEffect } from "react";
import "./Users.css";
import fakeData from "../../fakeData";
import SingleUser from "../SingleUser/SingleUser";
import Cart from "../Cart/Cart";

const Users = () => {
  const peoplesInfo = fakeData;
  const [peoples, setPeoples] = useState(peoplesInfo);
  const [cart, setCart] = useState([]);

  const handleAddPeople = (people) => {
    // console.log("clicked");
    const toBeAdded = people.keys;
    const samePeople = cart.find((pd) => pd.keys === toBeAdded);
    let count = 1;
    let newCart;
    if (samePeople) {
      count = samePeople.quantity + 1;
      samePeople.quantity = count;
      const others = cart.filter((pd) => pd.keys !== toBeAdded);
      newCart = [...others, samePeople];
    } else {
      people.quantity = 1;
      newCart = [...cart, people];
    }
    setCart(newCart);
  };

  return (
    <div className="page-container">
      <div className="users-container">
        {peoples.map((ppl) => (
          <SingleUser
            keys={ppl.keys}
            peopleInfo={ppl}
            showAddToCart={true}
            handleAddPeople={handleAddPeople}
          ></SingleUser>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Users;
