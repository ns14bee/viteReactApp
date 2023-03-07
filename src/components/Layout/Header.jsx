import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.profile.user);
  return (
    <div className="layout">
      <div className="d-flex justify-content-between p-5">
        <div>Header</div>
        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default Header;
