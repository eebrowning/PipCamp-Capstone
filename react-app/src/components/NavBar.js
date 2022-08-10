
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { demoLogin } from '../store/session';
import LogoutButton from './auth/LogoutButton';
import './nav-bar.css'


const NavBar = () => {
  // console.log('>>> url', window.location.pathname)
  // const pathname = window.location.pathname
  const state = useSelector(state => state)
  // const location = useSelector(state => Object.values(state.location))
  const [home, setHome] = useState(window.location.pathname == '/' ? true : false)

  const locations = useSelector(state => Object.values(state.locations))
  // const randLocation = locations ? locations[Math.floor(Math.random() * locations.length)] : null;
  const [randLocation, setRandLocation] = useState(locations ? locations[Math.floor(Math.random() * locations.length)] : 1)



  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();

    return dispatch(demoLogin())
  }

  // useEffect(() => {
  //   setHome(window.location.pathname == '/' ? true : false)
  // }, [])

  useEffect(() => {
    setHome(window.location.pathname == '/' ? true : false)
  }, [window.location.pathname])

  if (locations) return (
    <nav id={home ? 'nav-box' : 'nav-box-other'}>

      {window.scrollTo({
        top: 0,
        left: 0,
      })}
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
              {/* <li>
                <NavLink className={'navlink'} to='/login' exact={true} activeClassName='active'>
                  Demo
                </NavLink>
              </li> */}
              {!state.session.user && (
                <li id={'demo-login'} onClick={handleClick}>
                  Demo
                </li>
              )}
              {state.session.user && (
                <li>
                  <LogoutButton />
                </li>
              )}
            </div>
            {/* 
            <button id="mock-search-button">
              <img id='search-icon'
                src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
            </button> */}

            <NavLink onClick={() => setRandLocation(locations ? locations[Math.floor(Math.random() * locations.length)] : 1)} to={randLocation ? `/locations/${randLocation.id}` : '/locations/1'}>
              <img id='search-icon'
                src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
              {/*  src="https://i.imgur.com/YYjb0K6.png" alt="" /> */}
            </NavLink>

          </span>
        </span>

        <span id='right-nav-span'>
          {/* <li>
            {state.session.user && (<LogoutButton />)}
          </li> */}
          <li>
            <NavLink className={'navlink'} to='/new-location' exact={true} activeClassName='active'>
              New Location
            </NavLink>
          </li>
          {/* <li>
            <NavLink className={'navlink'} to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink>
          </li> */}
        </span>
      </ul>
    </nav >
  );
}

export default NavBar;
