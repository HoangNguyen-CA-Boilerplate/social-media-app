import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import AuthScreen from './pages/AuthScreen';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import FullPost from './pages/FullPost';
import Profile from './pages/Profile';
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
            <AuthScreen />
          </Route>

          <Route exact path='/home'>
            <Layout header='Home'>
              <Home />
            </Layout>
          </Route>
          <Route exact path='/submit'>
            <Layout header='Create Post'>
              <CreatePost />
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
