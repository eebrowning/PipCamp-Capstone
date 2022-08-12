import React, { useEffect, useState } from 'react';
import { EditLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { timeConverter } from '../utils';
import './location-form.css'



export function EditLocationForm() {
    const { locationId } = useParams()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [frontErrors, setFrontErrors] = useState([])


    const history = useHistory()
    const userId = useSelector(state => state.session.user?.id)
    const location = useSelector((state) => state.locations[locationId])
    const [name, setName] = useState(location?.name)
    const [image_1_url, setImage_1_url] = useState()
    const [image_2_url, setImage_2_url] = useState(location?.image_2_url)
    const [description, setDescription] = useState()


    //Camp info form
    const shelters = ['Tent', "Recreational Vehicle", 'Lodge']
    const camp_array = location?.campsite_info.split('-')
    const [shelter, setShelter] = useState()
    const [sites, setSites] = useState()
    const [guests, setGuests] = useState()
    const [vehicles, setVehicles] = useState()
    const [accessible, setAccessible] = useState()
    const camp_info_string = `${shelter}-${sites}-${guests}-${vehicles}-${accessible}`
    // console.log(camp_array, 'checkout the camp array')

    //Essentials info form
    const essential_array = location?.essential_info.split('-')
    const [fires, setFires] = useState()
    const [bathrooms, setBathrooms] = useState()
    const [pets, setPets] = useState()
    const essential_info_string = `${fires}-${bathrooms}-${pets}`

    //Amenities info form
    const amenities_array = location?.amenities_info.split('-')
    const [tables, setTables] = useState()
    const [wifi, setWifi] = useState()
    const [bins, setBins] = useState()
    const [water, setWater] = useState()
    const [kitchen, setKitchen] = useState()
    const [showers, setShowers] = useState()
    const amenities_info_string = `${tables}-${wifi}-${bins}-${water}-${kitchen}-${showers}`

    //Details info form
    const arrivalOptions = ['Meet and greet', 'Make yourself at home']
    const details_array = location?.details_info.split('-')
    const [arrival, setArrival] = useState()
    const [checkin, setCheckin] = useState()
    const [checkout, setCheckout] = useState()
    const [minNights, setMinNights] = useState()
    const details_info_string = `${arrival}-${checkin}-${checkout}-${minNights}`

    const [errorsMain, setErrorsMain] = useState([])
    const [errorsCamp, setErrorsCamp] = useState([])
    const [errorsEssential, setErrorsEssential] = useState([]);
    const [errorsAmenities, setErrorsAmenities] = useState([]);
    const [errorsDetails, setErrorsDetails] = useState([]);

    const validateForm = () => {

        // errorsMain: Name, Image, Description
        let arr = []
        if (!name) { arr.push("Please enter a name."); };
        if (!image_1_url) { arr.push("Image 1 requires a valid image URL."); };
        if (image_2_url && !image_2_url.includes('http')) {
            arr.push('If submitting second image, it must be a valid image URL')
        }
        // else {
        //     // setImage_2_url('')
        //     return;
        // };
        // if (description.length < 10) { arr.push('Please provide a description over 10 characters.'); };
        setErrorsMain(arr);

        // errorsCamp: shelter, sites, guests, vehicles, accessible
        arr = []
        if (!shelter) { arr.push("Select Shelter Type."); };
        if (sites < 0) { arr.push("Sites cannot be negative."); };
        if (!sites) { arr.push("Enter Number of Sites."); };

        if (guests < 0) { arr.push('Sites cannot be negative.') }
        if (!guests) { arr.push('Enter Max Guests') }

        if (vehicles < 0) { arr.push('Vehicles cannot be negative.'); };
        if (!vehicles) { arr.push('Enter Max Vehicles.'); };

        if (!accessible) { arr.push('Select Disabled Accessiblility.'); };


        setErrorsCamp(arr)

        //Essentials errors: fires, bathrooms, pets
        arr = []
        if (!fires) { arr.push("Select if Fires Allowed."); };
        if (!bathrooms) { arr.push("Select Bathroom availability."); };
        if (!pets) { arr.push('Select if Pets Allowed.'); };
        setErrorsEssential(arr)
        //tables wifi bins water kitchen showers
        arr = []
        if (!tables) { arr.push("Select Table Availability.") };
        if (!wifi) { arr.push('Select Wifi Availability') };
        if (!bins) { arr.push('Select Trash Bin Availability'); };
        if (!water) { arr.push('Select Water Availability'); };
        if (!kitchen) { arr.push('Select Kitchen Availability'); };
        if (!showers) { arr.push('Select Shower Availability'); };
        setErrorsAmenities(arr)
        //Details errors: arrival, checkin, checkout, minNights
        arr = []
        if (!arrival) { arr.push("Select Arrival.") };
        // if (checkin <= checkout) { arr.push('Check-Out must be before Check-In') }
        if (!checkin) { arr.push("Enter Earliest Check-In.") };
        if (!checkout) { arr.push('Enter Latest Check-Out.'); };
        if (!minNights) { arr.push('Select Minimum Nights.'); };
        if (minNights < 0) { arr.push('Time Travel Forbidden.'); };

        setErrorsDetails(arr)

        setFrontErrors([...errorsCamp, ...errorsAmenities, ...errorsMain, ...errorsEssential])
    }

    async function onSubmit(e) {
        e.preventDefault();
        validateForm()

        if (frontErrors.length === 0) {

            // if (errors.length === 0) {
            const updatedLocation = {
                id: locationId,
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
            console.log('>>> edited: ', updatedLocation)
            const editedLocation = await dispatch(EditLocationThunk(updatedLocation))
            if (!editedLocation) {
                history.push(`/locations/${locationId}`)
            } else {
                setErrors(editedLocation)
            }
            // dispatch(GetLocationsThunk())
            return editedLocation
            // } else { return errors }
        }
    }

    useEffect(() => {
        dispatch(GetLocationDetailThunk(locationId))
    }, [])

    useEffect(async () => { //persists autofilled form, can be cleaned up of conditionals in setThing invocations
        // console.log(location, '<<<<< is this anything?')


        if (location) {
            if (!name) setName(location['name'])
            if (!image_1_url) setImage_1_url(location.image_1_url)
            // if (!image_2_url) setImage_2_url(location.image_2_url)
            if (!description) setDescription(location.description)

            if (!shelter) await setShelter(camp_array ? camp_array[0] : '')
            if (!sites) setSites(camp_array ? camp_array[1] : '')
            if (!guests) setGuests(camp_array ? camp_array[2] : '')
            if (!vehicles) setVehicles(camp_array ? camp_array[3] : '')
            if (!accessible) setAccessible(camp_array ? camp_array[4] : '')

            if (!fires) setFires(essential_array ? essential_array[0] : '')
            if (!bathrooms) setBathrooms(essential_array ? essential_array[1] : '')
            if (!pets) setPets(essential_array ? essential_array[2] : '')

            if (!arrival) setArrival(details_array ? details_array[0] : '')
            if (!checkin) setCheckin(details_array ? details_array[1] : '')

            if (!checkout) setCheckout(details_array ? details_array[2] : '')
            if (!minNights) setMinNights(details_array ? details_array[3] : '')

            if (!tables) setTables(amenities_array ? amenities_array[0] : '')
            if (!wifi) setWifi(amenities_array ? amenities_array[1] : '')
            if (!bins) setBins(amenities_array ? amenities_array[2] : '')
            if (!water) setWater(amenities_array ? amenities_array[3] : '')
            if (!kitchen) setKitchen(amenities_array ? amenities_array[4] : '')
            if (!showers) setShowers(amenities_array ? amenities_array[5] : '')
        }

    }, [])

    if (location) return (
        <div id='location-form-container'>
            <div id='left-panel'>

                <h2 id='location-form-title'>Edit {location.name}:</h2>
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

            </div>
            <form id='location-form' onSubmit={onSubmit}>
                <div id='main-info' className='fields-box'>
                    Main Info
                    {errorsMain && errorsMain.length > 0 && errorsMain.map(error =>
                        <div key={error} className="location-error">{error}</div>
                    )}
                    <input type='text' name='name' defaultValue={name} placeholder='Location Name' onChange={e => setName(e.target.value)}></input>
                    <input type='text' name='image_1_url' defaultValue={image_1_url} placeholder='Main Image' onChange={e => setImage_1_url(e.target.value)}></input>
                    <input type='text' name='image_2_url' defaultValue={image_2_url} placeholder='Secondary Image(optional)' onChange={e => setImage_2_url(e.target.value)}></input>
                    <textarea placeholder='Location Description' defaultValue={description} onChange={e => setDescription(e.target.value)}></textarea>

                </div>
                <div id='sub-forms'>

                    <div id='campsite-info'>
                        Campsite Information
                        <div className='fields-box'>

                            <select id='camp-shelter' value={shelter} onChange={e => setShelter(e.target.value)}>
                                <option value=''>--Select Shelter--</option>
                                {shelters.map(shelter => (
                                    <option key={shelter} value={shelter}>{shelter}</option>
                                ))}
                            </select>
                            <input type='number' defaultValue={sites} id='camp-sites' placeholder='Number of Sites' onChange={e => setSites(e.target.value)}></input>
                            <input type='number' defaultValue={guests} id='max-guests' placeholder='Max Guests per Site' onChange={e => setGuests(e.target.value)}></input>
                            <input type='number' defaultValue={vehicles} id='max-vehicles' placeholder='Max Vehicles per Site' onChange={e => setVehicles(e.target.value)}></input>
                            <select id='camp-accessible' value={accessible} onChange={e => setAccessible(e.target.value)}>
                                <option> --Disabled Accessible</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
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

                            <select value={fires} id='fires-allowed' onChange={e => setFires(e.target.value)}>
                                <option> --Fires Allowed--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                            <select value={bathrooms} id='bathroom-available' onChange={e => setBathrooms(e.target.value)}>
                                <option> --Bathrooms--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                            <select value={pets} id='pets-allowed' onChange={e => setPets(e.target.value)}>
                                <option> --Pets Allowed--</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                        </div>

                        <div className='error-block'>

                            {errorsEssential.length > 0 && errorsEssential.map(error =>
                                <div key={error} className="location-error">{error}</div>
                            )}
                        </div>
                    </div>

                    <div id='amenities-info' className='fields-box'>


                        {/* <label> */}
                        Amenities Information
                        <select value={tables} id='tables-available' onChange={e => setTables(e.target.value)}>
                            <option> --Tables Available--</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <select value={wifi} id='wifi-available' onChange={e => setWifi(e.target.value)}>
                            <option> --Wifi Available--</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <select value={bins} id='bins-available' onChange={e => setBins(e.target.value)}>
                            <option> --Bins Available--</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <select value={water} id='water-available' onChange={e => setWater(e.target.value)}>
                            <option> --Water Available--</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <select value={kitchen} id='kitchen-available' onChange={e => setKitchen(e.target.value)}>
                            <option> --Kitchen Available--</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <select value={showers} id='showers-available' onChange={e => setShowers(e.target.value)}>
                            <option> --Showers Available--</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        {/* </label> */}
                        <div className='error-block'>

                            {errorsAmenities.length > 0 && errorsAmenities.map(error =>
                                <div key={error} className="location-error">{error}</div>
                            )}
                        </div>
                    </div>
                    <div id='details-info' className='fields-box'>

                        Detail Information
                        <select value={arrival} id='arrival-method' onChange={e => setArrival(e.target.value)}>
                            <option value=''>--Select Arrival--</option>
                            {arrivalOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className='edit-time-label'>
                            <div className='side-by-side'>

                                <div className='edit-checkout'>
                                    Check-in
                                </div>
                                <div className='default-checkout'>
                                    (default: {checkin})
                                </div>
                            </div>
                            <input placeholder='Check in time' type='time' onChange={e => setCheckin(`${`After ${timeConverter(e.target.value)}`}`)}></input>
                        </div>
                        <div className='edit-time-label'>
                            <div className='side-by-side'>

                                <div className='edit-checkout'>
                                    Check-out
                                </div>
                                <div className='default-checkout'>
                                    (default: {checkout})
                                </div>
                            </div>
                            <input placeholder='Check out time' type='time' onChange={e => setCheckout(`${`Before ${timeConverter(e.target.value)}`}`)}></input>

                        </div>
                        <input defaultValue={+minNights} value={+minNights} placeholder='Miniumum Nights' type='number' onChange={e => setMinNights(e.target.value)}></input>


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
    else return (<h1>Loading...</h1>)
}
export default EditLocationForm
