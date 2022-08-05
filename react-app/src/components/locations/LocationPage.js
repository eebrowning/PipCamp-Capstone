import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory, useParams } from 'react-router-dom';
import { DeleteLocationThunk, EditLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import './location-page.css'

function LocationPage() {
    const dispatch = useDispatch()
    const locations = useSelector(state => Object.values(state.locations))

    const { locationId } = useParams()
    const userId = useSelector(state => state.session.user?.id)
    const location = locations?.find(location => location.id == +locationId)
    const campsite = location?.campsite_info.split('-')
    const campsite_labels = ['Shelter Type', "Available Sites", 'Max Guests', 'Max Vehicles', 'Disabled Accessible']
    const essential = location?.essential_info.split('-')
    const essential_labels = ["Fires Allowed", 'Bathrooms Available', "Pets Allowed"]
    const amenities = location?.amenities_info.split('-')
    const amenities_labels = ["Tables Available", 'Wifi Available', "Bins Available", "Kitchen Available", 'Water Available', 'Showers Available']
    const details = location?.details_info.split('-')
    const details_labels = ['On Arrival', 'Check In', 'Check Out', 'Minimum Nights']
    const history = useHistory()

    // console.log(location?.user_id, userId, 'pages creator and visiting user')

    useEffect(() => {
        console.log('dispatched to GetLocationDetailThunk')
        dispatch(GetLocationDetailThunk(locationId))
        // dispatch(GetLocationsThunk())
    }, [dispatch])

    function handleDelete(e) {
        e.preventDefault()

        dispatch(DeleteLocationThunk(location.id))
        history.push('/')

    }

    function handleEdit(e) {
        e.preventDefault()
        dispatch(GetLocationDetailThunk(locationId))

        history.push(`/locations/${locationId}/edit`)
    }


    if (location) return (<span>
        {+userId === +location.user_id && (
            <div id='user-owned-buttons'>
                <button id='edit-location' onClick={handleEdit}>Edit</button>
                <button id='delete-location' onClick={handleDelete}>Delete</button>
            </div>
        )}
        <div id='image-box'>
            <img id='main-image' src={location.image_1_url} alt='image 1' />

            {location.image_2_url.length <= 8 && (
                <img id='second-image' src='https://i.imgur.com/9H2OQft.png' alt="default restaurant"></img>
            )}
            {location.image_2_url.length > 8 && (
                <img src={location.image_2_url} alt='image 2' />
            )}
        </div>

        <div id='location-information'>
            <h1>{location.name}</h1>
            <div>{location.description}</div>
            <span id='campsite'>
                <h2>Campsite Area</h2>
                {campsite.map((item, ind) => (
                    <div key={ind} id='info-attribute'>
                        <div>{campsite_labels[ind]}:</div>
                        <div >{item}</div>
                    </div>
                ))}
            </span>
            <span id='essentials'>
                <h2>Essentials</h2>

                {essential.map((item, ind) => (
                    <div key={ind} id='info-attribute'>
                        <div>{essential_labels[ind]}:</div>
                        <div >{item}</div>
                    </div>
                ))}
            </span>
            <span id='amenities'>
                <h2>Amenities</h2>

                {amenities.map((item, ind) => (
                    <div key={ind} id='info-attribute'>
                        <div>{amenities_labels[ind]}:</div>
                        <div >{item}</div>
                    </div>
                ))}
            </span>
            <span id='location-details-outer'>
                <h2>Details</h2>
                <div id='location-details'>
                    {details.map((item, ind) => (
                        <div key={ind} id='info-attribute'>
                            <div>{details_labels[ind]}:</div>
                            <div >{item}</div>
                        </div>
                    ))}
                </div>
            </span>

        </div>
        {/* reviews component will render here */}
    </span>)
    else return (<h1>404 Not Found...</h1>)
}
export default LocationPage
