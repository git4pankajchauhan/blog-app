import Axios from 'axios';
import CustomButton from 'components/Button/CustomButton';
import { CustomInput } from 'components/Input/CustomInput';
import React, { useState } from 'react';
import themes from 'themes/themes';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const history = useHistory();

  const inputChange = e => {
    const { name, value } = e.target;
    setUser(preVal => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post('http://localhost:8000/user/signup', user);
      if (result.data.status) {
        setMessage(result.data.message);
        setTimeout(() => {
          setMessage(false);
          history.push('/login');
        }, 3000);
      } else {
        setMessage('invalid user');
      }
    } catch (error) {
      setMessage('invalid user');
    }
  };
  return (
    <form className="user-form" action="" method="post" onSubmit={formSubmit} autoComplete="off">
      <h2 className="form-title">Sign Up</h2>
      <CustomInput type="text" name="name" onChange={inputChange} placeholder="Enter Name" />
      <CustomInput type="text" name="email" onChange={inputChange} placeholder="Enter Email" />
      <CustomInput type="password" name="password" onChange={inputChange} placeholder="Enter Password" />
      {message && <div className="message">{message}</div>}
      <CustomButton color={themes.colors.success}>Submit</CustomButton>
    </form>
  );
};

export default Signup;
