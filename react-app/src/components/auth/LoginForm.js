import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GetLocationsThunk } from '../../store/location';
import { login } from '../../store/session';
import './login-form.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const state = useSelector(state => state)
  // console.log('>>>>> state;', state)
  useEffect(() => {
    dispatch(GetLocationsThunk());//KEEP: forces state to change for navbar to render 

  }, [])



  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
    // console.log('errors', errors)
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='login-form-box'>
      <form id='login-form' onSubmit={onLogin}>
        <div id='login-form-top'>
          <h2>
            Welcome back!
          </h2>
          <div>
            Let's get you inside.
          </div>
        </div>
        <img id='login-image' src='https://pngimg.com/uploads/fallout/fallout_PNG45.png' />

        <div id='login-errors'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <div className='login-field'>
          <label>Email</label>
          <input
            id='login-email'
            name='email'
            type='text'
            placeholder='Email address...'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='login-field'>
          <label>Password</label>
          <input
            id='login-password'
            name='password'
            type='password'
            placeholder='Password...'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button type='submit'>Login</button>

      </form>
    </div>
  );
};

export default LoginForm;
