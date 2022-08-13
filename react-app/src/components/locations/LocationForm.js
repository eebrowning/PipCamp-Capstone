import React, { useEffect, useState } from 'react';
import { CreateLocationThunk, GetLocationsThunk } from '../../store/location';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import './location-form.css'
import { timeConverter } from '../utils';

function LocationForm() {
    const state = useSelector(state => state)

    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user?.id)
    const [errors, setErrors] = useState([])

    const [name, setName] = useState('')
    const [image_1_url, setImage_1_url] = useState('')
    const [image_2_url, setImage_2_url] = useState('')
    const [description, setDescription] = useState('')

    const [errorsMain, setErrorsMain] = useState([])

    //Camp info form
    const shelters = ['Tent', "Recreational Vehicle", 'Lodge']
    const [shelter, setShelter] = useState('')
    const [sites, setSites] = useState('')
    const [guests, setGuests] = useState('')
    const [vehicles, setVehicles] = useState('')
    const [accessible, setAccessible] = useState('')
    const camp_info_string = `${shelter}-${sites}-${guests}-${vehicles}-${accessible}`
    const [errorsCamp, setErrorsCamp] = useState([])

    //Essentials info form
    const [fires, setFires] = useState()
    const [bathrooms, setBathrooms] = useState()
    const [pets, setPets] = useState()
    const essential_info_string = `${fires}-${bathrooms}-${pets}`
    const [errorsEssential, setErrorsEssential] = useState([]);

    //Amenities info form
    const [tables, setTables] = useState()
    const [wifi, setWifi] = useState()
    const [bins, setBins] = useState()
    const [water, setWater] = useState()
    const [kitchen, setKitchen] = useState()
    const [showers, setShowers] = useState()
    const amenities_info_string = `${tables}-${wifi}-${bins}-${water}-${kitchen}-${showers}`
    const [errorsAmenities, setErrorsAmenities] = useState([]);

    //Details info form
    const arrivalOptions = ['Meet and greet', 'Make yourself at home']
    const [arrival, setArrival] = useState()
    const [checkin, setCheckin] = useState()
    const [checkout, setCheckout] = useState()
    const [minNights, setMinNights] = useState(0)
    const details_info_string = `${arrival}-${checkin}-${checkout}-${minNights}`
    const [errorsDetails, setErrorsDetails] = useState([]);




    const validateForm = () => {
        // errorsMain: Name, Image, Description
        let arr = []
        if (!name) { arr.push("Please enter a name."); };
        if (!image_1_url) { arr.push("Please enter an image URL."); };
        if (!image_2_url) {
            //enter a default second image here, as second is optional
        };
        if (description.length < 10) { arr.push('Please provide a description over 10 characters.'); };
        setErrorsMain(arr);
        // setErrors([...errors, ...arr])

        // errorsCamp: shelter, sites, guests, vehicles, accessible
        arr = []
        if (!shelter) { arr.push("Select Shelter Type."); };
        if (sites < 0) { arr.push("Sites cannot be negative."); };
        if (sites > 50) { arr.push("100 site limit per location"); };
        if (!sites) { arr.push("Enter Number of Sites."); };

        if (guests < 0) { arr.push('Sites cannot be negative.') }
        if (guests > 100) { arr.push("100 guest limit per location"); };
        if (!guests) { arr.push('Enter Max Guests') }

        if (vehicles < 0) { arr.push('Vehicles cannot be negative.'); };
        if (vehicles > 10) { arr.push('100 vehicle limit per location.'); };
        if (!vehicles) { arr.push('Enter Max Vehicles.'); };

        if (!accessible) { arr.push('Select Accessiblility.'); };
        setErrorsCamp(arr)
        // setErrors([...errors, ...arr])


        //Essentials errors: fires, bathrooms, pets
        arr = []
        if (!fires) { arr.push("Select if Fires Allowed."); };
        if (!bathrooms) { arr.push("Select Bathroom availability."); };
        if (!pets) { arr.push('Select if Pets Allowed.'); };
        setErrorsEssential(arr)
        // setErrors([errors, ...arr])

        //tables wifi bins water kitchen showers
        arr = []
        if (!tables) { arr.push("Select Table Availability.") };
        if (!wifi) { arr.push('Select Wifi Availability') };
        if (!bins) { arr.push('Select Trash Bin Availability'); };
        if (!water) { arr.push('Select Water Availability'); };
        if (!kitchen) { arr.push('Select Kitchen Availability'); };
        if (!showers) { arr.push('Select Shower Availability'); };
        setErrorsAmenities(arr)
        // setErrors([...errors, ...arr])

        //Details errors: arrival, checkin, checkout, minNights
        arr = []
        if (!arrival) { arr.push("Select Arrival.") };
        if (!checkin) { arr.push("Enter Earliest Check-In.") };
        if (!checkout) { arr.push('Enter Latest Check-Out.'); };
        if (!minNights) { arr.push('Select Minimum Nights.'); };
        if (minNights < 0) { arr.push('Time Travel Forbidden.'); };
        if (minNights > 7) { arr.push('7 Night Cap on Minimum') }

        setErrorsDetails(arr)
        // setErrors([...errors, ...arr])

    }


    // const newLocal = locations?.filter(local => local.name === name)

    async function onSubmit(e) {
        validateForm();
        e.preventDefault();
        const location = {
            user_id: userId,
            name,
            image_1_url,
            image_2_url,
            description,
            campsite_info: camp_info_string,
            essential_info: essential_info_string,
            amenities_info: amenities_info_string,
            details_info: details_info_string
        }

        const newLocation = await dispatch(CreateLocationThunk(location))

        if (!newLocation.errors) { history.push(`/locations/${newLocation.id}`) }
        else {
            setErrors(newLocation.errors)
        }

    }
    useEffect(() => {
        dispatch(GetLocationsThunk());//KEEP: forces state to change for navbar to render 

    }, [])

    return (
        <div id='location-form-container'>
            <div id='left-panel'>
                <h2 id='location-form-title'>Add a Location</h2>

                <div className='error-block'>
                    {errors.length > 0 && errors.map(error =>
                        <div key={error} className="location-error">{error}</div>
                    )}
                    {errors.length > 0 && (
                        <>
                            <h4>*refer to above sections</h4>
                            <h4>for details</h4>
                        </>
                    )}
                </div>
                <img id='form-image' src="https://vignette.wikia.nocookie.net/fallout/images/e/eb/Fo4_Robotics_Expert.png/revision/latest/scale-to-width-down/240?cb=20151115231404" />

            </div>
            <form id='location-form' onSubmit={onSubmit}>
                <div id='main-info'>
                    Main Info
                    {errorsMain && errorsMain.length > 0 && errorsMain.map(error =>
                        <div key={error} className="location-error">{error}</div>
                    )}

                    <label className='location-form-label'>Location Name</label>
                    <input type='text' name='name' placeholder='Location Name' onChange={e => setName(e.target.value)}></input>
                    <label className='location-form-label'>Main Image</label>
                    <input type='text' name='image_1_url' placeholder='Main Image' onChange={e => setImage_1_url(e.target.value)}></input>
                    <label className='location-form-label'>Secondary Image</label>
                    <input type='text' name='image_2_url' placeholder='Secondary Image(optional)' onChange={e => setImage_2_url(e.target.value)}></input>
                    <label className='location-form-label'>Description</label>
                    <textarea placeholder='Location Description' onChange={e => setDescription(e.target.value)}></textarea>

                </div>
                <div id='sub-forms'>
                    <div id='campsite-info'>
                        Campsite Information
                        <div className='fields-box'>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Shelter</label>
                                <select id='camp-shelter' onChange={e => setShelter(e.target.value)}>
                                    <option value=''>--Select Shelter--</option>
                                    {shelters.map(shelter => (
                                        <option key={shelter} value={shelter}>{shelter}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Sites</label>
                                <input type='number' id='camp-sites' placeholder='Number of Sites' onChange={e => setSites(e.target.value)}></input>
                            </div>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Guests</label>
                                <input type='number' id='max-guests' placeholder='Max Guests per Site' onChange={e => setGuests(e.target.value)}></input>
                            </div>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Vehicles</label>
                                <input type='number' id='max-vehicles' placeholder='Max Vehicles per Site' onChange={e => setVehicles(e.target.value)}></input>
                            </div>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Accessible</label>
                                <select id='camp-accessible' onChange={e => setAccessible(e.target.value)}>
                                    <option> --Disabled Accessible</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                        </div>


                        <div className='error-block'>

                            {errorsCamp.length > 0 && errorsCamp.map(error =>
                                <div key={error} className="location-error">{error}</div>
                            )}
                        </div>

                    </div>
                    <div id='essential-info'>


                        Essential Information
                        <div className='fields-box'>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Fires</label>
                                <select id='fires-allowed' onChange={e => setFires(e.target.value)}>
                                    <option> --Fires Allowed--</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Bathrooms</label>

                                <select id='bathroom-available' onChange={e => setBathrooms(e.target.value)}>
                                    <option> --Bathrooms--</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                            <div className='field-label-pair'>
                                <label className='location-form-label'>Pets</label>
                                <select id='pets-allowed' onChange={e => setPets(e.target.value)}>
                                    <option> --Pets Allowed--</option>
                                    <option value={true}>True</option>
                                    <option value={false}>False</option>
                                </select>
                            </div>
                        </div>

                        <div className='error-block'>

                            {errorsEssential.length > 0 && errorsEssential.map(error =>
                                <div key={error} className="location-error">{error}</div>
                            )}
                        </div>
                    </div>
                    <div id='amenities-info' className='fields-box'>
                        Amenities Information


                        <div className='field-label-pair'>
                            <label className='location-form-label'>Tables</label>
                            <select id='tables-available' onChange={e => setTables(e.target.value)}>
                                <option> --Tables Available--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>
                        <div className='field-label-pair'>
                            <label className='location-form-label'>Wifi</label>
                            <select id='wifi-available' onChange={e => setWifi(e.target.value)}>
                                <option> --Wifi Available--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>
                        <div className='field-label-pair'>
                            <label className='location-form-label'>Trash Bins</label>
                            <select id='bins-available' onChange={e => setBins(e.target.value)}>
                                <option> --Bins Available--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>
                        <div className='field-label-pair'>
                            <label className='location-form-label'>Water</label>
                            <select id='water-available' onChange={e => setWater(e.target.value)}>
                                <option> --Water Available--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>

                        </div>
                        <div className='field-label-pair'>
                            <label className='location-form-label'>Kitchen</label>
                            <select id='kitchen-available' onChange={e => setKitchen(e.target.value)}>
                                <option> --Kitchen Available--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>
                        <div className='field-label-pair'>

                            <label className='location-form-label'>Showers</label>
                            <select id='showers-available' onChange={e => setShowers(e.target.value)}>
                                <option> --Showers Available--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>
                        {/* </label> */}
                        <div className='error-block'>

                            {errorsAmenities.length > 0 && errorsAmenities.map(error =>
                                <div key={error} className="location-error">{error}</div>
                            )}
                        </div>
                    </div>
                    <div id='details-info' className='fields-box'>

                        Detail Information



                        <div className='field-label-pair-arrival'>
                            <label className='location-form-label'>
                                Arrival
                            </label>
                            <select id='arrival-method' onChange={e => setArrival(e.target.value)}>
                                <option value=''>--Select Arrival--</option>
                                {arrivalOptions.map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className='time-label'>
                            <label>
                                Checkin
                            </label>
                            <input placeholder='Check in time' type='time' onChange={e => setCheckin(`${`After ${timeConverter(e.target.value)}`}`)}></input>

                        </div>
                        <div className='time-label'>
                            <label>
                                Checkout
                            </label>
                            <input placeholder='Check out time' type='time' onChange={e => setCheckout(`${`Before ${timeConverter(e.target.value)}`}`)}></input>

                        </div>
                        <div className='field-label-pair'>

                            <label className='location-form-label'>
                                Min Nights
                            </label>
                            <input className='min-nights' placeholder='Miniumum Nights' type='number' onChange={e => setMinNights(`${e.target.value}`)}></input>
                        </div>


                        <div className='error-block'>
                            {errorsDetails.length > 0 && errorsDetails.map(error =>
                                <div key={error} className="location-error">{error}</div>
                            )}
                        </div>
                    </div>
                </div>
                <button type='submit' className='location-submit' onClick={onSubmit}>Submit</button>
            </form >
        </div >

    )
}
export default LocationForm
