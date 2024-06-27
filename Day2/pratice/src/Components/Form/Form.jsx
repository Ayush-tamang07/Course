import React from "react";
import "./Form.css";

function Form({ formType }) {
  return (
    <>
      <div className="form">
        <div className="container">
          <h2>{formType === "login" ? "Login" : "Register"}</h2>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          {formType === "register" && (
            <input type="text" placeholder="conform password" />
          )}
          <button>{formType === "login" ? "Login" : "Register"}</button>
        </div>
      </div>
    </>
  );
}

export default Form;
