import Navbar from 'components/Navbar/Navbar';
import Login from 'pages/Login';
import Posts from 'pages/Posts';
import Signup from 'pages/Signup';
import SinglePost from 'pages/SinglePost';
import ProtectedRoute from 'ProtectedRoute';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  Axios.defaults.withCredentials = true;
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState('');

  const userAuth = async () => {
    const response = await Axios.get('http://localhost:8000/user/login');
    if (response.data.loggedIn) {
      setIsAuth(true);
      setUser(response.data.user.name);
    }
  };
  useEffect(() => {
    userAuth();
  }, [isAuth, user]);
  return (
    <Router>
      <Navbar isAuth={isAuth} username={user} />
      <Switch>
        <ProtectedRoute exact path="/" component={Posts} isAuth={isAuth} />
        <ProtectedRoute exact path="/post/:id" component={SinglePost} isAuth={isAuth} />
        <Route exact path="/signup">
          {isAuth ? <Redirect to="/" /> : <Signup />}
        </Route>
        <Route exact path="/login">
          {isAuth ? <Redirect to="/" /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
