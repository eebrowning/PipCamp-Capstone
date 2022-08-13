import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { GetLocationsThunk } from '../../store/location';
import { signUp } from '../../store/session';
import "./signup-form.css"
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetLocationsThunk());//KEEP: forces state to change for navbar to render 

  }, [])


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setErrors(['Passwords must match'])
    }
    if (password === repeatPassword) {
      setErrors([])
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        console.log(data, 'these should be errors?')

        setErrors([...data])
      }
    }
    // needs matching password valiadator
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='signup-form-box'>

      <form id='signup-form' onSubmit={onSignUp}>
        <div id='login-form-top'>
          <h2>
            Welcome!
          </h2>
          <div>
            Let's get you set up.
          </div>
        </div>
        <img id='login-image' src='https://pngimg.com/uploads/fallout/fallout_PNG45.png' />

        <div id='signup-errors'>
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <div>
          <label>User Name</label>
          <input
            className='signup-name'
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            className='signup-email'
            type='text'
            name='email'
            placeholder='Email address'

            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            className='signup-password'

            type='password'
            name='password'
            placeholder='Password'

            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            className='signup-password'

            type='password'
            name='repeat_password'
            placeholder='Password'

            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <button id='signup-form-button' type='submit'>Sign Up</button>
      </form>
    </div>

  );
};

export default SignUpForm;
