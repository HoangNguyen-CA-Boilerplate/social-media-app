import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Spinner from './components/Spinner';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import Landing from './pages/Landing';

import { useSelector } from 'react-redux';
import { selectIsAuth } from './store/slices/authSlice';
import { BrowserRouter as Router } from 'react-router-dom';

const Signup = React.lazy(() => import('./pages/signup/Signup.js'));
const Login = React.lazy(() => import('./pages/login/Login.js'));
const Auth = React.lazy(() => import('./pages/auth/Auth.js'));
const Home = React.lazy(() => import('./pages/home/Home.js'));
const FullPost = React.lazy(() => import('./pages/fullpost/FullPost.js'));
const UserRoute = React.lazy(() => import('./pages/user/UserRoute.js'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound.js'));

function App() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Router>
      <ErrorBoundary>
        {isAuth === null ? (
          <Landing />
        ) : (
          <Suspense fallback={<Spinner />}>
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

              <Route>
                <Layout>
                  <Switch>
                    <Route exact path='/home'>
                      <Home />
                    </Route>
                    <Route exact path='/posts/:id'>
                      <FullPost />
                    </Route>
                    <Route path='/users/:username'>
                      <UserRoute />
                    </Route>
                    <Route>
                      <PageNotFound />
                    </Route>
                  </Switch>
                </Layout>
              </Route>
            </Switch>
          </Suspense>
        )}
      </ErrorBoundary>
    </Router>
  );
}

export default App;
