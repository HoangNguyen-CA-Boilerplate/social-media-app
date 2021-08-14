import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import FullPost from './pages/FullPost';
import Profile from './pages/profile/Profile';
import Landing from './pages/Landing';
import Layout from './components/Layout';
import UserFollowers from './pages/userFollow/UserFollowers';
import UserFollowings from './pages/userFollow/UserFollowings';

import { useSelector } from 'react-redux';
import { selectIsAuth } from './store/slices/authSlice';

function App() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <>
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

          <Route exact path='/home'>
            <Layout header='Home'>
              <Home />
            </Layout>
          </Route>
          <Route exact path='/posts/:id'>
            <Layout header='Post'>
              <FullPost />
            </Layout>
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
        </Switch>
      )}
    </>
  );
}

export default App;
