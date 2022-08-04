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


    return (<div>
        {locations && locations.map(location => (
            <NavLink key={location.id} to={`/locations/${location.id}`}>

                <div key={location.id}>
                    <h1>{location.name}</h1>
                    <div>{location.description}</div>
                </div>
            </NavLink>
        ))}

    </div>)
}
export default Locations
