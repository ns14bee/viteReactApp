import React from "react";

const LoginPage = () => {
  return (
    <div className="main-body login-wrapper">
      <h1>Please Log In</h1>
      <form className=" login-wrapper">
        <label className="m-2">
          <p>Username</p>
          <input type="text" />
        </label>
        <label className="m-2">
          <p>Password</p>
          <input type="password" />
        </label>
        <div className="m-2">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
