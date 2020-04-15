import React, { useState, useEffect } from "react";
import "./Users.css";
import fakeData from "../../fakeData";

const Users = () => {
  const peoplesInfo = fakeData;
  const [peoples, setPeoples] = useState(peoplesInfo);
  //console.log(peoplesInfo);
  /*  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((x) => x.json())
      .then((a) => setUsers(a));
  }); */

  return (
    <div className="page-container">
      <div className="users-container">
        <div>
          {peoples.map((ppl) => (
            <div className="user-info">
              <div>
                <img src={ppl.img} alt="" />
              </div>
              <div>
                {ppl.name}
                <br />
                {ppl.email}
                <br />
                {ppl.phone}
                <br />
                {ppl.salary}
              </div>
            </div>
          ))}
        </div>
        <div></div>
        {/* <ul>
          {peoples.map((people) => (
            <li>
              {people.name}
              <br />
              {people.email}
              <br />
              {people.phone}
              <br />
              {people.email}
            </li>
          ))}
        </ul> */}
      </div>
      <div className="cart-container"></div>
    </div>
  );
};

export default Users;
