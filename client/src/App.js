import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import FullPost from './pages/FullPost';
import Profile from './pages/profile/Profile';
import Landing from './pages/Landing';
import Layout from './components/layout/Layout';
import UserFollowers from './pages/followers/Followers';
import UserFollowings from './pages/followings/Followings';

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
        <>
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
              <Route exact path='/users/:username'>
                <Profile />
              </Route>
              <Route exact path='/users/:username/followers'>
                <UserFollowers />
              </Route>
              <Route exact path='/users/:username/following'>
                <UserFollowings />
              </Route>
            </Layout>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
