import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({ username }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="header">
      <center>
        <div className="image">
          <img src="<%= pfp %>" />
        </div>
        <div className="text">
          <h1>{username}</h1>
        </div>
      </center>
      <br />
      <br />
      <article>
        <div>
          <h2>Welcome to TopicList!</h2>
        </div>
      </article>
      <br />
      <br />
      {!isLoggedIn && (
        <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleLogin}>
          Login
        </button>
      )}
      {isLoggedIn && (
        <button style={{ backgroundColor: 'red', color: 'white' }} onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default LoginPage;
