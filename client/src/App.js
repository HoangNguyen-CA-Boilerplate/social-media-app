import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './store/slices/authSlice';

import Signup from './auth/Signup';
import Login from './auth/Login';
import AuthScreen from './auth/AuthScreen';

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
        <button type='button' onClick={() => dispatch(logout())}>
          Logout
        </button>
        <h1>Home</h1>
      </Route>
      <Route exact path='/'>
        <AuthScreen />
      </Route>
    </Switch>
  );
}

export default App;
