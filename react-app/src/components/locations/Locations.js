import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetLocationsThunk } from '../../store/location';
import { demoLogin } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import './locations-home.css'


function Locations() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const locations = useSelector(state => Object.values(state.locations))
    const randLocation = locations ? locations[Math.floor(Math.random() * locations.length)] : null
    // console.log(randLocation.id, randLocation.name, 'here random')

    useEffect(() => {
        dispatch(GetLocationsThunk())
    }, [dispatch])


    function handleClick(e) {
        e.preventDefault();

        return dispatch(demoLogin())
    }

    if (randLocation !== null) return (<div id='home-page'>
        <div id='splash-welcome'>
            <h2>Find yourself inside.</h2>
            <p>Discover and review spawn camping, RPG maps, shacks, fortresses, and rad sickness.</p>
        </div>
        <span id='home-search' className={'users-mock-search'}>
            <div id='home-nav-users-buttons'>
                <li id='search-field-1'>
                    Load Save
                    <NavLink className={'home-navlink'} to='/login' exact={true} activeClassName='active'>
                        Login
                    </NavLink>
                </li>
                <li id='search-field-2'>
                    New Game
                    <NavLink className={'home-navlink'} to='/sign-up' exact={true} activeClassName='active'>
                        Sign Up
                    </NavLink>
                </li>
                <li id='search-field-3'>
                    Quick Start
                    {/* <NavLink className={'home-navlink'} to='/login' exact={true} activeClassName='active'>
                        Demo
                    </NavLink> */}
                    {!state.session.user && (
                        <li className={'home-navlink'} id={'demo-login'} onClick={handleClick}>
                            Demo
                        </li>
                    )}
                    {state.session.user && (
                        <li className={'home-navlink'}>
                            <LogoutButton />
                        </li>
                    )}
                </li>
                <li id="home-search-button">
                    <div>
                        Random!
                    </div>
                    <NavLink to={randLocation ? `/locations/${randLocation.id}` : '/'}>
                        <img id='search-icon-home'
                            src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
                        {/*  src="https://i.imgur.com/YYjb0K6.png" alt="" /> */}
                    </NavLink>
                </li>
            </div>
        </span>
        <div id='splash-image'> IMAGE</div>
        <span id='locations-box'>

            {locations && locations.map(location => (
                <NavLink key={location.id} className='location-card' to={`/locations/${location.id}`}>

                    <img className={'card-image'} src={location.image_1_url}></img>
                    <div className={'card-details'} key={location.id}>
                        <h1>{location.name}</h1>
                        <div>{'recommendation rate?'}</div>
                    </div>
                </NavLink>
            ))}
        </span>
        <div id='splash-image'> IMAGE</div>
        {/* footer component here */}
    </div>)
}

export default Locations
