import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetLocationsThunk } from '../../store/location';
import './locations-home.css'

function Locations() {
    const dispatch = useDispatch()
    const locations = useSelector(state => Object.values(state.locations))

    console.log(locations, 'here are locations')
    useEffect(() => {
        dispatch(GetLocationsThunk())
    }, [dispatch])


    return (<div id='home-page'>
        <div id='splash-welcome'>SPLASH WELCOME</div>
        <span id='home-search' className={'users-mock-search'}>
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
        <div id='splash-image'> IMAGE</div>

        <span id='locations-box'>

            {locations && locations.map(location => (
                <NavLink key={location.id} id='location-card' to={`/locations/${location.id}`}>

                    <div key={location.id}>
                        <h1>{location.name}</h1>
                        <div>{location.description}</div>
                    </div>
                </NavLink>
            ))}
        </span>

    </div>)
}

export default Locations
