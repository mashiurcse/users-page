import React from "react";
import "./SingleUser.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const SingleUser = (props) => {
  const { name, email, phone, salary, img, keys } = props.peopleInfo;
  return (
    <div className="user-info">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        ID: {keys}
        <br />
        Name: {name}
        <br />
        Email: {email}
        <br />
        Phone: {phone}
        <br />
        Yearly Salary: ${salary}
        <br />
        {props.showAddToCart && (
          <button
            className="main-button"
            onClick={() => props.handleAddPeople(props.peopleInfo)}
          >
            {<FontAwesomeIcon icon={faUserPlus} />} Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleUser;
