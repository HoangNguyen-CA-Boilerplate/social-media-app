import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import FullPost from './pages/FullPost';
import Landing from './pages/Landing';
import Layout from './components/layout/Layout';
import UserRoute from './pages/user/UserRoute';

import { useSelector } from 'react-redux';
import { selectIsAuth } from './store/slices/authSlice';

import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Router>
      {isAuth === null ? (
        <Landing />
      ) : (
        <Switch>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/signup'>
            <Signup />
          </Route>
          <Route exact path='/'>
            <Auth />
          </Route>

          <Layout>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/posts/:id'>
              <FullPost />
            </Route>
            <Route path='/users/:username'>
              <UserRoute />
            </Route>
          </Layout>
        </Switch>
      )}
    </Router>
  );
}

export default App;
