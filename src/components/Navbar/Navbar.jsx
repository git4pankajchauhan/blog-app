import CustomButton from 'components/Button/CustomButton';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ isAuth, username }) => {
  const [isLogin, seIsLogin] = useState(false);
  const [user, setUser] = useState('');
  const history = useHistory();
  // Logout
  // const handleLogout = () => {
  //   window.location.reload(false);
  //   history.push('/login');
  // };
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
            {/* <CustomButton onClick={handleLogout}>Logout</CustomButton> */}
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
