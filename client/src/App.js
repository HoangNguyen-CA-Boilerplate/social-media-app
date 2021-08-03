import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Signup from './auth/Signup';
import Login from './auth/Login';
import AuthScreen from './auth/AuthScreen';
import Home from './home/Home';
import Layout from './components/Layout';

function App() {
  const dispatch = useDispatch();
  return (
    <Switch>
      <Route exact path='/login'>
        <Login></Login>
      </Route>
      <Route exact path='/signup'>
        <Signup></Signup>
      </Route>
      <Route exact path='/home'>
        <Layout>
          <Home />
        </Layout>
      </Route>
      <Route exact path='/'>
        <AuthScreen />
      </Route>
    </Switch>
  );
}

export default App;
