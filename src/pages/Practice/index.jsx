import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="main-body">
      <div className="d-flex justify-content-start p-2 m-2 bg-primary">
        <NavLink to="/practice/state" className="text-light m-2">
          State Example
        </NavLink>
        <NavLink to="/practice/effect" className="text-light m-2">
          Effect Example
        </NavLink>
        <NavLink to="/practice/reducer" className="text-light m-2">
          Reducer Example
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default index;
