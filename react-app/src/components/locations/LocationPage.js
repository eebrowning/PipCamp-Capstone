import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { DeleteLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import Images from '../image-carousel/Images';
import Reviews from '../reviews/Reviews';
import './location-page.css'



function LocationPage() {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch()
    const locations = useSelector(state => Object.values(state.locations))

    const { locationId } = useParams()
    const userId = useSelector(state => state.session.user?.id)
    const location = locations?.find(location => location.id == +locationId)
    const campsite = location?.campsite_info.split('-')
    // const campsite_labels = ['Shelter Type', "Available Sites", 'Max Guests', 'Max Vehicles', 'Disabled Accessible']
    const campsite_icons = [
        'https://i.imgur.com/x48inrm.png',
        "https://cdn-icons-png.flaticon.com/512/684/684809.png",
        'https://i.imgur.com/HXE8yY9.png',
        'https://cdn-icons-png.flaticon.com/512/6917/6917269.png',
        'https://cdn-icons-png.flaticon.com/512/1467/1467267.png']
    const campsite_details = campsite ? [`${campsite[0]} sites`, `${campsite[1]} sites`, `Up to${campsite[2]} guests per site`, `Up to ${campsite[3]} vehicles`, `${campsite[4] == 'true' ? 'Wheelchair access' : 'Not accessible'}`] : [];
    const essential = location?.essential_info.split('-')
    const essential_labels = ["Fires Allowed", 'Bathrooms Available', "Pets Allowed"]
    const essential_icons = [
        "https://i.imgur.com/kHHRFoy.png",
        'https://cdn-icons-png.flaticon.com/512/4745/4745263.png',
        "https://i.imgur.com/2ysOWVx.png"
    ]
    const essential_details = essential ? [`${essential[0] ? 'Fires allowed' : 'Fires not allowed'}`, `${essential[1] ? 'Toilet available' : "Toilet not available"}`, `${essential[2] ? 'Pets allowed' : 'Pets not allowed'}`] : [];
    const amenities = location?.amenities_info.split('-')
    const amenities_labels = ["Tables Available", 'Wifi Available', "Bins Available", "Kitchen Available", 'Water Available', 'Showers Available']
    const amenities_icons = [
        "https://cdn-icons-png.flaticon.com/512/7627/7627697.png",
        'https://cdn-icons-png.flaticon.com/512/748/748151.png',
        "https://cdn-icons-png.flaticon.com/512/484/484662.png",
        "https://cdn-icons-png.flaticon.com/512/2700/2700546.png",
        'https://cdn-icons-png.flaticon.com/512/2997/2997155.png',
        'https://cdn-icons-png.flaticon.com/512/2844/2844030.png'
    ]
    const amenities_details = amenities ? [
        `${amenities[0] ? 'Tables available' : 'Tables not available'}`,
        `${amenities[1] ? 'Wifi available' : 'Wifi not available'}`,
        `${amenities[2] ? 'Trash bins available' : 'Trash bins not available'}`,
        `${amenities[3] ? 'Kitchen available' : 'Kitchen not available'}`,
        `${amenities[4] ? 'Potable water available' : 'Potable water not available'}`,
        `${amenities[5] ? 'Showers available' : 'Showers not available'}`
    ] : [];
    const details = location?.details_info.split('-')
    const details_labels = ['On Arrival', 'Check In', 'Check Out', 'Minimum Nights']
    const history = useHistory()
    const [usersArr, setUsersArr] = useState([]);


    // console.log(location?.user_id, userId, 'pages creator and visiting user')

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsersArr(responseData.users);
        }
        fetchData();

        console.log('dispatched to GetLocationDetailThunk')
        dispatch(GetLocationDetailThunk(locationId))
        dispatch(GetLocationsThunk())
        const navBox = document.getElementById('nav-box');
        if (navBox) { navBox.id = 'nav-box-other' }
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }, [dispatch])


    // console.log('>>>>>>>>>>>>>> usersArr', usersArr)
    const matchUser = (userArr, id) => {//swap user_id for username
        return userArr?.find(user => user.id === id)?.username
    }
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

    if (location) return (
        <span id='location-page'>
            {+userId === +location.user_id && (
                <div id='user-owned-buttons'>
                    <button id='edit-location' onClick={handleEdit}>Edit</button>
                    <>
                        <button id='open-modal' onClick={() => setShowModal(true)}>Delete</button>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>
                                <p> Are you sure you want to delete {location.name}?</p>
                                <>
                                    <button id='delete-location' onClick={handleDelete}>Delete</button>
                                    <button id='close-modal' onClick={() => setShowModal(false)}>Cancel</button>
                                </>

                            </Modal>
                        )}
                    </>
                </div>

            )}

            <Images>
                <img id='main-image' src={location.image_1_url} alt='image 1' />

                {!location.image_2_url && (
                    <img id='second-image' src='https://i.imgur.com/Q9rHlY5.png' alt="default second"></img>
                )}
                {location.image_2_url.length > 0 && (
                    <img id='second-image' src={location.image_2_url} alt="second" />
                )}
            </Images>
            <span id='sans-images'>
                <div id='location-information-box'>
                    <div id='location-banner'>
                        <h1>{location.name}</h1>
                        <p>This listing needs a few more reviews;
                            please scroll down and provide a recommendation</p>
                    </div>

                    <div id='location-information'>
                        <div id='owner-description'>
                            <div id='owner-card'>
                                {/* <img src="https://www.pngmart.com/files/15/Fallout-Pip-Boy-PNG-Picture.png" id='owner-image' /> */}
                                <img src="https://www.pngmart.com/files/15/Fallout-Pip-Boy-PNG-Transparent.png" id='owner-image' />

                                <label>
                                    <p>
                                        Hosted by
                                    </p>
                                    <div id='owner-name'>{matchUser(usersArr, location.user_id)}</div>
                                </label>

                            </div>

                            <div id='location-description'>{location.description}</div>
                        </div>
                        <span id='campsite'>
                            <h2>Campsite Area</h2>
                            {campsite_details.map((item, ind) => (
                                <div key={ind} className='info-attribute'>
                                    <img style={{ height: '20px' }} src={campsite_icons[ind]} />
                                    <div >{item}</div>
                                </div>
                            ))}
                        </span>
                        <span id='essentials'>
                            <h2>Essentials</h2>

                            {essential_details.map((item, ind) => (
                                <div key={ind} className='info-attribute'>
                                    <img style={{ height: '20px' }} src={essential_icons[ind]} />

                                    <div >{item}</div>
                                </div>
                            ))}
                        </span>
                        <span id='amenities'>
                            <h2>Amenities</h2>

                            {amenities_details.map((item, ind) => (
                                <div key={ind} className='info-attribute'>
                                    {/* <div>{amenities_labels[ind]}:</div> */}
                                    <img style={{ height: '20px' }} src={amenities_icons[ind]} />

                                    <div >{item}</div>
                                </div>
                            ))}
                        </span>
                        <span id='location-details-outer'>
                            <p>Details</p>
                            <div id='location-details'>
                                {details.map((item, ind) => (
                                    <div key={ind} className='info-attribute'>
                                        <div className='details-label'>{details_labels[ind]}:</div>
                                        <div >{item}</div>
                                    </div>
                                ))}
                            </div>
                        </span>

                    </div>
                    {userId && (
                        <Reviews locationId={locationId} />

                    )}
                </div>
                <div id='reservation-box'>
                    <h3>Reservations coming soon!</h3>
                    <img id='reservation-placeholder' src="https://i.imgur.com/9H2OQft.png" />

                </div>
            </span>

        </span>)
    else return (<span id='box-404'>
        {/* <img src='https://www.pngmart.com/files/15/Fallout-Pip-Boy-PNG-Pic.png' alt='404' />
        <h1>404 Page Not Found</h1> */}
        <img src='https://i.imgur.com/1PSUlUq.png' alt='loading' />

    </span>)
}
export default LocationPage
