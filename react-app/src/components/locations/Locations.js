import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { GetLocationsThunk } from '../../store/location';
import { demoLogin } from '../../store/session';
import LogoutButton from '../auth/LogoutButton';
import './locations-home.css'
import Search from './SearchLocations';


function Locations() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const locations = useSelector(state => Object.values(state.locations))
    const randLocation = locations ? locations[Math.floor(Math.random() * locations.length)] : null
    // console.log(randLocation.id, randLocation.name, 'here random')
    const tagColors = ['#325886', '#447AB9', '#82A7D6', '#34a4d4', "#dfb387", '#0b89d5', '#504455']
    const randColor = () => {
        return tagColors[Math.floor(Math.random() * tagColors.length)]
    }

    useEffect(() => {
        // const navSearch = document.getElementById('show-search');
        // if (navSearch) { navSearch.id = 'hide-search' }
        // const navBox = document.getElementById('nav-box-other');
        // if (navBox) { navBox.id = 'nav-box' }
    }, [])


    useEffect(() => {
        // const navSearch = document.getElementById('show-search');
        // if (navSearch) { navSearch.id = 'hide-search' }
        // const navBox = document.getElementById('nav-box-other');
        // if (navBox) { navBox.id = 'nav-box' }
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
            {/* <div className='searchBanner'>
                <div className='searchWrapper'>
                <Search />

                </div>
            </div> */}

            <div id='home-nav-users-buttons'>
                {/* <li id='search-field-1'>
                        Load Save
                        <NavLink className={'home-navlink'} to='/login' exact={true} activeClassName='active'>
                            Login
                        </NavLink>
                    </li> */}
                <li id='search-field-1'>
                    Search Locations
                    <Search className={'home-navlink search'} to='/login' exact={true} activeClassName='active' />
                </li>
                {/* <li id='search-field-2'>
                        New Game
                        <NavLink className={'home-navlink'} to='/sign-up' exact={true} activeClassName='active'>
                            Sign Up
                        </NavLink>
                    </li>
                    <div id='search-field-3'>
                        Quick Start

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
                    </div> */}
                <li id="home-search-button">
                    <div>
                        Random!
                    </div>
                    <NavLink to={randLocation ? `/locations/${randLocation.id}` : '/'}>
                        <img id='search-icon-home'
                            src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
                    </NavLink>
                </li>
            </div>
            {/* {state.session.user && (
                <div id='home-nav-users-buttons'>

                    <div id='search-field-1'>
                        Exit Game
                        <li className={'home-navlink'}>
                            <LogoutButton />
                        </li>
                    </div>
                    <li id="home-search-button">
                        <div>
                            Random!
                        </div>
                        <NavLink to={randLocation ? `/locations/${randLocation.id}` : '/'}>
                            <img id='search-icon-home'
                                src="https://i.pinimg.com/originals/b8/19/89/b81989d219b76f2e5073af1b95c63a63.png" alt="" />
                        </NavLink>
                    </li>
                </div>
            )} */}
        </span>
        {/* <div id='splash-image'> */}
        <img id='splash-image' src='https://i.imgur.com/ggDpArP.jpg'></img>
        {/* </div> */}
        <span id='locations-box'>

            {locations && locations.map(location => (
                <NavLink key={location.id} className='location-card' to={`/locations/${location.id}`}>

                    <img className={'card-image'} src={location.image_1_url}></img>
                    <div id='align-details'>
                        <div className={'card-details'} style={{ backgroundColor: randColor() }} key={location.id}>
                            Available to check out
                            {/* <h1>{location.name}</h1>
                            <div>{'recommendation rate?'}</div> */}
                        </div>

                    </div>
                </NavLink>
            ))}
        </span>
        {/* <div id='splash-image'> IMAGE</div> */}
        {/* <Footer /> */}
    </div >)
}

export default Locations
