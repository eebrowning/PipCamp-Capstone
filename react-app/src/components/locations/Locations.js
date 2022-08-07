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
        <div id='splash-welcome'>
            <h2>Find yourself inside.</h2>
            <p>Discover and review spawn camping, RPG maps, shacks, fortresses, and rad sickness.</p>

            {/* <img id='rad-sick' src='https://gamepedia.cursecdn.com/fallout_gamepedia/2/20/F76_Perk_Rad_Resistant.png?version=5cfd181d90853b0044e42a208fc452fe'></img> */}

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
                    <NavLink className={'home-navlink'} to='/login' exact={true} activeClassName='active'>
                        Demo
                    </NavLink>
                </li>
                <li id="home-search-button">
                    <div>
                        Click me!
                    </div>
                    <img id='search-icon-home'
                        src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
                    {/*  src="https://i.imgur.com/YYjb0K6.png" alt="" /> */}
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
