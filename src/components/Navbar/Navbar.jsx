import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ isAuth, username }) => {
  const [isLogin, seIsLogin] = useState(false);
  const [user, setUser] = useState('');
  useEffect(() => {
    seIsLogin(isAuth);
    setUser(username);
    console.log(`Navbar ${isAuth} ${username}`);
  }, [isAuth, username]);
  return (
    <div className="head">
      <span className="head-title">Posts </span>
      <div className="l-wrap">
        {isLogin ? (
          <>
            <NavLink className="user" exact to="/">
              Home
            </NavLink>
            <span className="user">Hi, {isLogin && user}</span>
          </>
        ) : (
          <>
            <NavLink className="user" exact to="/signup">
              Singup
            </NavLink>
            <NavLink className="user" exact to="/Login">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
