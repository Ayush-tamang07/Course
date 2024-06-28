import React from "react";
import "./Form.css";
// import Button from "../Button/Button";

function Form({ props}) {
  return (
    <>
      <div className="form">
        <div className="container">
          <h2>{props === "login" ? "Login" : "Register"}</h2>
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          {props === "register" && (
            <input type="text" placeholder="conform password" />
          )}
          {props === "login" && <a href="#">Forget Password?</a> }
          {props === "register" && <a href="#">sign up</a> }


          {/* <Button buttonType='login'/>
          <Button buttonType='register'/>
          <Button buttonType='logout'/> */}
          <button>{props === "login" ? "Login" : "Register"}</button>
        </div>
      </div>
    </>
  );
}

export default Form;
