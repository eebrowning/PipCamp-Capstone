
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
// import { GetLocationsThunk } from '../store/location';
import { demoLogin } from '../store/session';
import LogoutButton from './auth/LogoutButton';
import Search from './locations/SearchLocations';
import './nav-bar.css'


const NavBar = () => {
  const state = useSelector(state => state)
  const [home, setHome] = useState(window.location.pathname == '/' ? true : false)

  const locations = useSelector(state => Object.values(state.locations))
  const [randLocation, setRandLocation] = useState(locations ? locations[Math.floor(Math.random() * locations.length)] : 1)

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    return dispatch(demoLogin())
  }


  useEffect(() => {
    setHome(window.location.pathname === '/' ? true : false)
    // console.log(">>>>>>>", home, "<<<<<<")
    if (home === true) {
      const navSearch = document.getElementById('hide-search');
      if (navSearch) { navSearch.id = 'show-search' }
      const navBox = document.getElementById('nav-box-other');
      if (navBox) { navBox.id = 'nav-box' }

    } else if (home === false) {
      const navSearch = document.getElementById('show-search');
      if (navSearch) { navSearch.id = 'hide-search' }
      const navBox = document.getElementById('nav-box');
      if (navBox) { navBox.id = 'nav-box-other' }
    }
  }, [state])//if state updates, refreshes id attributes on NavBar to display appropriately on every page. 
  //dependent on some sort of dispatch that updates/changes state, GetLocationsThunk in places 'unnecessary' are facilitating this.

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
          <span className={home ? 'hide-search' : 'show-search'}>

            <li id='search-field-1'>
              <Search className={'home-navlink search'} to='/login' exact={true} activeClassName='active' />
            </li>
            {/* {!state.session.user && (<>
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

                <li id={'demo-login'} onClick={handleClick}>
                  Demo
                </li>
              </>

              )}
              {state.session.user && (
                <li>
                  <LogoutButton />
                </li>
              )}
            */}

            {/* 
            <button id="mock-search-button">
              <img id='search-icon'
                src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
            </button> */}
            <div id='random-wrapper'>

              <label style={{ fontSize: '10px' }}>Random!</label>
              <NavLink onClick={() => setRandLocation(locations ? locations[Math.floor(Math.random() * locations.length)] : 1)} to={randLocation ? `/locations/${randLocation.id}` : '/locations/1'}>
                <img id='search-icon'
                  src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
                {/*  src="https://i.imgur.com/YYjb0K6.png" alt="" /> */}
              </NavLink>
            </div>

          </span>
        </span>

        <span id='right-nav-span'>
          {/* <li>
            {state.session.user && (<LogoutButton />)}
          </li> */}
          {!state.session.user && (<>
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

            <li id={'demo-login'} onClick={handleClick}>
              Demo
            </li>
          </>

          )}
          {state.session.user && (
            <>
              <li>
                <NavLink className={'navlink'} to='/new-location' exact={true} activeClassName='active'>
                  New Location
                </NavLink>
              </li>
              <li>
                <LogoutButton />
              </li>
            </>
          )}
          {/* </div> */}
        </span>
      </ul>
    </nav >
  );
}

export default NavBar;
