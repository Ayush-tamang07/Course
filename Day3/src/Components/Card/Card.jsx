import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img
            src={props.img}
            alt="image"
            width={300}
          />
          <h2>{props.shoeName}</h2>
        </div>

      </div>
    </>
  );
}
