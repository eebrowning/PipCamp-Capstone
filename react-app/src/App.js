import React, { useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import LocationForm from './components/locations/LocationForm';
import Locations from './components/locations/Locations'
import LocationPage from './components/locations/LocationPage';
import EditLocationForm from './components/locations/EditLocationForm';
import Footer from './components/footer/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  window.scrollTo({
    top: 0,
    left: 0,
  });
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true} >
          <Locations id='locations-component' />
        </Route>
        <Route path='/locations' exact={true} >
          <Redirect to='/' />

        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/new-location'>
          <LocationForm />
        </ProtectedRoute>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>

        <Route path='/locations/:locationId' exact={true} >
          <LocationPage />
        </Route>
        <ProtectedRoute path='/locations/:locationId/edit'>
          <EditLocationForm />
        </ProtectedRoute>
        <Route>
          <span id='box-404'>
            <h1>404 Page Not Found</h1>
            <img src='https://www.pngmart.com/files/15/Fallout-Pip-Boy-PNG-Pic.png' alt='404' />
          </span></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
