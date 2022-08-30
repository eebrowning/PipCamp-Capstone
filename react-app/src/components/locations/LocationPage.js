import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import { DeleteLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import { GetFavoritesThunk, DeleteFavoriteThunk, SetFavoriteThunk } from '../../store/favorite';

import Images from '../image-carousel/Images';
import Reviews from '../reviews/Reviews';
import './location-page.css'
import '../../context/modal.css'
import ReservationForm from '../reservations/ReservationForm';



function LocationPage() {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch()
    const locations = useSelector(state => Object.values(state.locations))

    const { locationId } = useParams()
    const favorite = useSelector(state => state.favorites[locationId])
    const [starFill, setStarFill] = useState('noFill');
    const [copy, setCopy] = useState('not-copied')
    const userId = useSelector(state => state.session.user?.id)
    // console.log(userId, favorite, starFill)

    //for displaying num of reviews on location banner
    const reviews = useSelector(state => Object.values(state.reviews))
    const locationReviews = reviews.filter(review => review.location_id === +locationId)
    // console.log(locationReviews, 'reviews ')
    const numRecommends = locationReviews.filter(review => review.recommends === true)
    // console.log(numRecommends.length / locationReviews.length, 'numRecommends ')
    const recRate = numRecommends.length / locationReviews.length


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
    // const essential_labels = ["Fires Allowed", 'Bathrooms Available', "Pets Allowed"]
    const essential_icons = [
        "https://i.imgur.com/kHHRFoy.png",
        'https://cdn-icons-png.flaticon.com/512/4745/4745263.png',
        "https://i.imgur.com/2ysOWVx.png"
    ]
    const essential_details = essential ? [`${essential[0] == 'true' ? 'Fires allowed' : 'Fires not allowed'}`, `${essential[1] == 'true' ? 'Toilet available' : "Toilet not available"}`, `${essential[2] == 'true' ? 'Pets allowed' : 'Pets not allowed'}`] : [];

    const amenities = location?.amenities_info.split('-')
    // const amenities_labels = ["Tables Available", 'Wifi Available', "Bins Available", "Kitchen Available", 'Water Available', 'Showers Available']
    const amenities_icons = [
        "https://cdn-icons-png.flaticon.com/512/7627/7627697.png",
        'https://cdn-icons-png.flaticon.com/512/748/748151.png',
        "https://cdn-icons-png.flaticon.com/512/484/484662.png",
        "https://cdn-icons-png.flaticon.com/512/2700/2700546.png",
        'https://cdn-icons-png.flaticon.com/512/2997/2997155.png',
        'https://cdn-icons-png.flaticon.com/512/2844/2844030.png'
    ]
    const amenities_details = amenities ? [
        `${amenities[0] == 'true' ? 'Tables available' : 'Tables not available'}`,
        `${amenities[1] == 'true' ? 'Wifi available' : 'Wifi not available'}`,
        `${amenities[2] == 'true' ? 'Trash bins available' : 'Trash bins not available'}`,
        `${amenities[3] == 'true' ? 'Kitchen available' : 'Kitchen not available'}`,
        `${amenities[4] == 'true' ? 'Potable water available' : 'Potable water not available'}`,
        `${amenities[5] == 'true' ? 'Showers available' : 'Showers not available'}`
    ] : [];

    const details = location?.details_info.split('-')
    const details_labels = ['On Arrival', 'Check In', 'Check Out', 'Minimum Nights']
    const history = useHistory()
    const [usersArr, setUsersArr] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsersArr(responseData.users);
        }
        fetchData();

        // console.log('dispatched to GetLocationDetailThunk')
        dispatch(GetLocationDetailThunk(locationId))
        if (userId) dispatch(GetFavoritesThunk(userId, locationId))
        dispatch(GetLocationsThunk())

    }, [dispatch])


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

    const handleFav = async (e) => {
        const fav = {
            user_id: userId,
            location_id: +locationId
        };
        if (e.target.innerText === 'Add to Favorites') {
            setStarFill('fill');
            await dispatch(SetFavoriteThunk(fav));
        } else {
            setStarFill('noFill');
            await dispatch(DeleteFavoriteThunk(fav));
        }
    };
    function handleCopy(e) {
        e.preventDefault();
        var Url = window.location.href;
        console.log(Url, 'URL')
        navigator.clipboard.writeText(Url)
        setCopy('copied')
    }


    //allows fade-in of location banner after scrolling a certain distance
    let [scrollDisplay, setScrollDisplay] = useState('none')
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 700) {
            // console.log('at/over 700px')
            setScrollDisplay('')
        }
        else if (window.scrollY < 700) {
            setScrollDisplay('none')
        }
    });

    if (location) return (
        <span id='location-page'>
            {+userId === +location.user_id && (
                <div id='user-owned-buttons'>
                    <button id='edit-location' onClick={handleEdit}>Edit</button>
                    <>
                        <button id='open-modal' onClick={() => setShowModal(true)}>Delete</button>
                        {showModal && (
                            <Modal onClose={() => setShowModal(false)}>

                                <div className='delete-modal-content'>

                                    <p> Are you sure you want to delete {location.name}?</p>
                                    <div className='modal-buttons'>
                                        <button id='delete-location' onClick={handleDelete}>Delete</button>
                                        <button id='close-modal' onClick={() => setShowModal(false)}>Cancel</button>
                                    </div>
                                </div>
                                <img src='https://pngimg.com/uploads/fallout/fallout_PNG18.png' />
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
                {location.image_2_url && location.image_2_url.length > 0 && (
                    <img id='second-image' src={location.image_2_url} alt="second" />
                )}
            </Images>


            <div id='location-banner-scroll' style={{ display: `${scrollDisplay}` }}>
                <h1>{location.name}</h1>
                <p>This listing needs a few more reviews;
                    please scroll down and provide a recommendation</p>


                <div id='lower-location-banner'>

                    <div id='lower-left'>

                        <div id='review-rec-rate'>
                            <div id='rec-percent'>
                                <img className='rec-logo' style={{ height: '20px', width: '20px' }} src='https://www.freepnglogos.com/uploads/thumbs-up-png/thumbs-up-blue-vector-icon-thumb-png-29.png' />
                                <p>{recRate * 100}%</p>
                            </div>
                            <p>Recommend</p>
                        </div>
                        <div id='review-logo-box'>{locationReviews.map(review =>
                            <a className='review-logo-wrapper' href='#review-component'>
                                <img title={matchUser(usersArr, review.user_id)} className='review-logo' key={review.id} style={{ height: '33px', width: '33px' }} src='https://www.pngmart.com/files/8/Fallout-PNG-Download-Image.png' alt={matchUser(usersArr, review.user_id)} />
                            </a>
                        )}</div>
                    </div>
                    <div id='lower-right'>
                        <div id='favorite-button-box'>
                            {userId && (
                                <button id='favorite-button' onClick={(e) => {
                                    handleFav(e);
                                }} className={`star-${favorite !== undefined ? 'fill' : 'noFill'}`}>{favorite !== undefined ? "Remove from Favorites" : "Add to Favorites"}
                                </button>
                            )}
                        </div>
                        <div id='link-button-box'>
                            <button onClick={handleCopy} id='link-button' className={'fill'}>

                                {copy === 'not-copied' ? "Copy Link" : "Link Copied"}

                            </button>

                        </div>
                    </div>
                </div>



            </div>

            <span id='sans-images'>
                <div id='location-information-box'>
                    <div id='location-banner'>
                        <h1>{location.name}</h1>
                        <p>This listing needs a few more reviews;
                            please scroll down and provide a recommendation</p>


                        <div id='lower-location-banner'>

                            <div id='lower-left'>

                                <div id='review-rec-rate'>
                                    <div id='rec-percent'>
                                        <img className='rec-logo' style={{ height: '20px', width: '20px' }} src='https://www.freepnglogos.com/uploads/thumbs-up-png/thumbs-up-blue-vector-icon-thumb-png-29.png' />
                                        <p>{recRate * 100}%</p>
                                    </div>
                                    <p>Recommend</p>
                                </div>
                                <div id='review-logo-box'>{locationReviews.map(review =>
                                    <a className='review-logo-wrapper' href='#review-component'>
                                        <img title={matchUser(usersArr, review.user_id)} className='review-logo' key={review.id} style={{ height: '33px', width: '33px' }} src='https://www.pngmart.com/files/8/Fallout-PNG-Download-Image.png' alt={matchUser(usersArr, review.user_id)} />
                                    </a>
                                )}</div>
                            </div>
                            <div id='lower-right'>
                                <div id='favorite-button-box'>
                                    {userId && (
                                        <button id='favorite-button' onClick={(e) => {
                                            handleFav(e);
                                        }} className={`star-${favorite !== undefined ? 'fill' : 'noFill'}`}>{favorite !== undefined ? "Remove from Favorites" : "Add to Favorites"}
                                        </button>
                                    )}
                                </div>
                                <div id='link-button-box'>
                                    <button onClick={handleCopy} id='link-button' className={'fill'}>

                                        {copy === 'not-copied' ? "Copy Link" : "Link Copied"}

                                    </button>

                                </div>
                            </div>
                        </div>



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
                    {(
                        <Reviews locationId={locationId} />
                    )}
                </div>
                <div id='reservation-box'>
                    <ReservationForm />
                </div>
            </span>

        </span>)

    else return (<span id='box-404'>
        <img src='https://i.imgur.com/1PSUlUq.png' alt='loading' />
    </span>)
}
export default LocationPage
