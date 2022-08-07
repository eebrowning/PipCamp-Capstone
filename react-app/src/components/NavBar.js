
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './nav-bar.css'



const NavBar = () => {
  // console.log('>>> url', window.location.pathname)
  // const pathname = window.location.pathname
  const state = useSelector(state => state)
  // const location = useSelector(state => Object.values(state.location))
  const [home, setHome] = useState(window.location.pathname == '/' ? true : false)
  console.log(home, 'home')
  console.log(window.location.pathname, 'home')


  useEffect(() => {
    setHome(window.location.pathname == '/' ? true : false)
  }, [window.location.pathname])

  return (
    <nav id='nav-box'>
      <ul id='nav-ul'>
        <span id='left-nav-span'>

          <li>
            <NavLink id='logo-nav' className={'navlink'} to='/' exact={true} activeClassName='active'>
              <img id='logo-name' src='https://fontmeme.com/permalink/220807/153dadc40525f2d04b2f2c4dc5482603.png' />
              <img id='logo' src='https://i.imgur.com/6m7nnpA.png' />

            </NavLink>
          </li>
          <span className={home ? 'hide-search' : 'users-mock-search'}>
            <div id='nav-users-buttons'>
              <li>
                <NavLink className={'navlink'} to='/login' exact={true} activeClassName='active'>
                  Login
                </NavLink>
              </li>
              <div className='spacer'>·</div>
              <li>
                <NavLink className={'navlink'} to='/sign-up' exact={true} activeClassName='active'>
                  Sign Up
                </NavLink>
              </li>
              <div className='spacer'>·</div>
              <li>
                <NavLink className={'navlink'} to='/login' exact={true} activeClassName='active'>
                  Demo
                </NavLink>
              </li>
            </div>

            <button id="mock-search-button">
              <img id='search-icon'
                src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
              {/*  src="https://i.imgur.com/YYjb0K6.png" alt="" /> */}


            </button>
          </span>
        </span>

        <span id='right-nav-span'>
          <li>
            <LogoutButton />
          </li>
          <li>
            <NavLink className={'navlink'} to='/new-location' exact={true} activeClassName='active'>
              New Location
            </NavLink>
          </li>
          <li>
            <NavLink className={'navlink'} to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li>
        </span>
      </ul>
    </nav >
  );
}

export default NavBar;
