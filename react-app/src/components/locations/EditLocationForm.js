import React, { useEffect, useState } from 'react';
import { EditLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import './location-form.css'

export function EditLocationForm() {
    const { locationId } = useParams()
    const dispatch = useDispatch()

    const history = useHistory()
    const userId = useSelector(state => state.session.user?.id)
    const location = useSelector(state => state.locations[locationId])

    const [name, setName] = useState(location?.name)
    const [image_1_url, setImage_1_url] = useState()
    const [image_2_url, setImage_2_url] = useState()
    const [description, setDescription] = useState()
    const [errors, setErrors] = useState([])

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


    async function onSubmit(e) {
        e.preventDefault();
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
        return editedLocation
    }

    useEffect(() => {
        dispatch(GetLocationDetailThunk(locationId))
    }, [])

    useEffect(() => { //persists autofilled form, can be cleaned up of conditionals in setThing invocations
        if (location) {

            if (!name) setName(location.name)
            if (!image_1_url) setImage_1_url(location.image_1_url)
            if (!image_2_url) setImage_2_url(location.image_2_url)
            if (!description) setDescription(location.description)

            if (!shelter) setShelter(camp_array ? camp_array[0] : '')
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
    })

    useEffect(() => {
        const arr = []
        if (!shelter) {
            arr.push("Please select a shelter type.");
        };
        if (sites < 1) {
            arr.push('Please provide number of available sites.');
        };
        setErrors(arr);
    }, [shelter, sites, guests, vehicles, accessible]);


    if (location) return (
        <div id='location-form-container'>
            <h2 id='location-form-title'>Edit {location.name}:</h2>

            <form id='location-form' onSubmit={onSubmit}>
                {errors.length > 0 && errors.map(error =>
                    <div key={error} className="location-error">{error}</div>
                )}
                <input type='text' name='name' value={name} placeholder='Location Name' onChange={e => setName(e.target.value)}></input>
                <input type='text' name='image_1_url' value={image_1_url} placeholder='Main Image' onChange={e => setImage_1_url(e.target.value)}></input>
                <input type='text' name='image_2_url' value={image_2_url} placeholder='Secondary Image(optional)' onChange={e => setImage_2_url(e.target.value)}></input>
                <textarea placeholder='Location Description' value={description} onChange={e => setDescription(e.target.value)} />
                {/* fill this with sub-forms */}

                <label>
                    Campsite Information
                    <select id='camp-shelter' value={shelter} onChange={e => setShelter(e.target.value)}>
                        <option disabled value=''>--Select Shelter--</option>
                        {shelters.map(shelter => (
                            <option key={shelter} value={shelter}>{shelter}</option>
                        ))}
                    </select>
                    <input type='number' id='camp-sites' defaultValue={sites} placeholder='Number of Sites' onChange={e => setSites(e.target.value)}></input>
                    <input type='number' id='max-guests' defaultValue={guests} placeholder='Max Guests per Site' onChange={e => setGuests(e.target.value)}></input>
                    <input type='number' id='max-vehicles' defaultValue={vehicles} placeholder='Max Vehicles per Site' onChange={e => setVehicles(e.target.value)}></input>
                    <select id='camp-accessible' value={accessible} onChange={e => setAccessible(e.target.value)}>
                        <option disabled> --Disabled Accessible</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>

                </label>
                <label>
                    Essential Information
                    <select id='fires-allowed' value={fires} onChange={e => setFires(e.target.value)}>
                        <option> --Fires Allowed--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='bathroom-available' value={bathrooms} onChange={e => setBathrooms(e.target.value)}>
                        <option> --Bathrooms--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='pets-allowed' value={pets} onChange={e => setPets(e.target.value)}>
                        <option> --Pets Allowed--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                </label>
                <label>
                    Amenities Information
                    <select id='tables-available' value={tables} onChange={e => setTables(e.target.value)}>
                        <option disabled> --Tables Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='wifi-available' value={wifi} onChange={e => setWifi(e.target.value)}>
                        <option disabled> --Wifi Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='bins-available' value={bins} onChange={e => setBins(e.target.value)}>
                        <option disabled> --Bins Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='water-available' value={water} onChange={e => setWater(e.target.value)}>
                        <option disabled> --Water Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='kitchen-available' value={kitchen} onChange={e => setKitchen(e.target.value)}>
                        <option disabled> --Kitchen Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='showers-available' value={showers} onChange={e => setShowers(e.target.value)}>
                        <option disabled> --Showers Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                </label>
                <label>
                    Detail Information
                    <select id='arrival-method' defaultValue={arrival} onChange={e => setArrival(e.target.value)}>
                        <option disabled value=''>--Select Arrival--</option>
                        <option value='Make yourself at home'>Make yourself at home</option>
                        <option value='Meet and greet'>Meet and greet</option>
                    </select>
                    <input defaultValue={checkin} type='number' min='14' max='20' placeholder='Check in time' onChange={e => setCheckin(e.target.value)}></input>
                    <input defaultValue={checkout} placeholder='Check out time' type='number' min='8' max='12' onChange={e => setCheckout(e.target.value)}></input>
                    <input defaultValue={minNights} placeholder='Miniumum Nights' type='number' min='1' value={minNights} onChange={e => setMinNights(e.target.value)}></input>

                </label>

                <button type='submit' className='location-submit' onClick={onSubmit}>Submit</button>
            </form>
        </div >

    )
    else return (<h1>Loading...</h1>)
}
export default EditLocationForm
