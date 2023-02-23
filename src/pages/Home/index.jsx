import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoggedIn = true;
  const [unreadMessages, setUnReadMessages] = useState(10);
  const element = isLoggedIn ? "Welcome back" : "Please login";
  const handleSubmit = (e) => {
    e.preventDefault();
    setUnReadMessages(unreadMessages - 1);
  };
  return (
    <div className="main-body">
      {element}
      <form onSubmit={handleSubmit}>
        <Link to="/practice">Practice</Link>
        <button type="submit">Submit</button>
        {unreadMessages > 0 && (
          <h2>You have {unreadMessages} unread messages.</h2>
        )}
      </form>
    </div>
  );
};

export default Home;
