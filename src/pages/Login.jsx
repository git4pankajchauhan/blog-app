import Axios from 'axios';
import CustomButton from 'components/Button/CustomButton';
import { CustomInput } from 'components/Input/CustomInput';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import themes from 'themes/themes';
const Login = () => {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState({
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
    const result = await Axios.post('http://localhost:8000/user/login', user);
    if (result.data.status) {
      window.location.reload(false);
      history.push('/');
    } else {
      setMessage(result.data.message);
    }
  };
  return (
    <form className="user-form" action="" method="post" onSubmit={formSubmit} autoComplete="off">
      <h2 className="form-title">Log In</h2>
      <CustomInput type="text" name="email" onChange={inputChange} placeholder="Enter Email" />
      <CustomInput type="password" name="password" onChange={inputChange} placeholder="Enter Password" />
      {message && <div className="message">{message}</div>}
      <CustomButton color={themes.colors.success}>Submit</CustomButton>
    </form>
  );
};

export default Login;
