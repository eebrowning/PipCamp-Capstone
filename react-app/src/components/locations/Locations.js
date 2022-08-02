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


    return (<h1>
        {locations && locations.map(location => (
            <div key={location.id}>
                <div>{location.name}</div>
                <div>{location.description}</div>
            </div>
        )

        )}

    </h1>)
}
export default Locations
