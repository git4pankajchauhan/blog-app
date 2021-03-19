import { Add } from '@material-ui/icons';
import Axios from 'axios';
import CustomButton from 'components/Button/CustomButton';
import CustomDrawer from 'components/Drawer/CustomDrawer';
import { CustomInput, CustomTextArea } from 'components/Input/CustomInput';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import themes from 'themes/themes';
import './Navbar.scss';

const Navbar = () => {
  const [isLogin, seIsLogin] = useState(false);
  const [user, seUser] = useState({});
  const [message, setMessage] = useState('');
  const [addPost, setAddPost] = useState({
    title: '',
    sub_title: '',
    tags: '',
    content: '',
  });

  const inputChange = e => {
    const { name, value } = e.target;
    setAddPost(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async e => {
    e.preventDefault();
    const result = await Axios.post('http://localhost:8000/post', addPost);
    if (result.data.status) {
      setMessage(result.data.message);
      setTimeout(() => {
        setMessage(false);
      }, 3000);
    }
  };
  return (
    <div className="head">
      <span className="head-title">Posts </span>
      <div className="l-wrap">
        {isLogin && (
          <CustomDrawer btnText="Create New Post" icon={<Add />} label="Edit Profile">
            <form action="" method="post" onSubmit={formSubmit}>
              <CustomInput type="text" name="title" onChange={inputChange} placeholder="Enter Title" />
              <CustomInput type="text" name="sub_title" onChange={inputChange} placeholder="Enter Sub Title" />
              <CustomInput type="text" name="tags" onChange={inputChange} placeholder="Enter Tags" />
              <CustomTextArea type="text" name="content" onChange={inputChange} placeholder="Enter Content" />
              {message && <div className="message">{message}</div>}
              <CustomButton color={themes.colors.success}>Submit</CustomButton>
            </form>
          </CustomDrawer>
        )}
        {isLogin ? (
          <span className="user">Hi, Pankaj</span>
        ) : (
          <>
            <NavLink className="user" exact to="signup">
              Singup
            </NavLink>
            <NavLink className="user" exact to="Login">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
