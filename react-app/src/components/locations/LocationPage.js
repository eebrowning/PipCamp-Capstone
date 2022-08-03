import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory, useParams } from 'react-router-dom';
import { DeleteLocationThunk, EditLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import './locations-home.css'

function LocationPage() {
    const dispatch = useDispatch()
    const locations = useSelector(state => Object.values(state.locations))
    const { locationId } = useParams()
    const userId = useSelector(state => state.session.user?.id)
    const location = locations?.find(location => location.id == +locationId)
    const campsite = location?.campsite_info.split('-')
    const essential = location?.essential_info.split('-')
    const amenities = location?.amenities_info.split('-')
    const details = location?.details_info.split('-')
    const history = useHistory()

    console.log(location?.user_id, userId, 'pages creator and visiting user')

    useEffect(() => {
        dispatch(GetLocationDetailThunk(locationId))
        dispatch(GetLocationsThunk())
    }, [dispatch])

    function handleDelete(e) {
        e.preventDefault()

        dispatch(DeleteLocationThunk(location.id))
        history.push('/')

    }

    function handleEdit(e) {
        e.preventDefault()

        history.push(`/locations/${locationId}/edit`)
    }

    if (location) return (<span>
        {+userId === +location.user_id && (
            <div id='user-owned-buttons'>
                <button id='edit-location' onClick={handleEdit}>Edit</button>
                <button id='delete-location' onClick={handleDelete}>Delete</button>
            </div>
        )}
        <img src={location.image_1_url} alt='image 1' />
        <img src={location.image_2_url} alt='image 2' />


        <div id='location-information'>
            <h1>{location.name}</h1>
            <div>{location.description}</div>
            <span id='campsite'>
                <h2>Campsite Area</h2>
                {campsite.map((item, ind) => (
                    <div key={ind}>{item}</div>

                ))}
            </span>
            <span id='essentials'>
                <h2>Essentials</h2>

                {essential.map((item, ind) => (
                    <div key={ind}>{item}</div>

                ))}
            </span>
            <span id='amenities'>
                <h2>amenities</h2>

                {amenities.map((item, ind) => (
                    <div key={ind}>{item}</div>

                ))}
            </span>
            <span id='location-details'>
                <h2>Details</h2>

                {details.map((item, ind) => (
                    <div key={ind}>{item}</div>

                ))}
            </span>

        </div>

    </span>)
    else return (<h1>404 Not Found...</h1>)
}
export default LocationPage
