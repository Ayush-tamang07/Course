import React from "react";

function Register() {
  return (
    <>
      <div className="form">
        <div className="container">
            <h2>Register</h2>
          <input type="text" placeholder="user name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="conform password" />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default Register;
