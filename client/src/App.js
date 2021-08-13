import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Auth from './pages/Auth/Auth';
import Home from './pages/Home/Home';
import FullPost from './pages/FullPost';
import Profile from './pages/profile/Profile';
import Landing from './pages/Landing';
import Layout from './components/Layout';

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
            <Layout header='Profile'>
              <Profile />
            </Layout>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
