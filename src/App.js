import Login from 'components/User/Login';
import Signup from 'components/User/Signup';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from 'components/Post/Posts';
import SinglePost from 'components/Post/SinglePost';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/:id" component={SinglePost} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </>
  );
};

export default App;
