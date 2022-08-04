import React, { useEffect, useState } from 'react';
import { EditLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import './location-form.css'

export function EditLocationForm() {
    const { locationId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetLocationDetailThunk(locationId))
    }, [])

    const history = useHistory()
    const userId = useSelector(state => state.session.user?.id)
    const location = useSelector(state => state.locations[locationId])
    if (!location) GetLocationDetailThunk(locationId)
    const [name, setName] = useState(location?.name)
    const [image_1_url, setImage_1_url] = useState(location?.image_1_url)
    const [image_2_url, setImage_2_url] = useState(location?.image_2_url)
    const [description, setDescription] = useState(location?.description)
    // const [campsite_info, setCampsite_info] = useState('')
    // const [essential_info, setEssential_info] = useState('')
    // const [amenities_info, setAmenities_info] = useState('')
    // const [details_info, setDetails_info] = useState('')
    const [errors, setErrors] = useState([])

    //Camp info form
    const shelters = ['Tent', "Recreational Vehicle", 'Lodge']
    const camp_array = location?.campsite_info.split('-')
    const [shelter, setShelter] = useState(camp_array ? camp_array[0] : '')
    const [sites, setSites] = useState(camp_array ? camp_array[1] : '')
    const [guests, setGuests] = useState(camp_array ? camp_array[2] : '')
    const [vehicles, setVehicles] = useState(camp_array ? camp_array[3] : '')
    const [accessible, setAccessible] = useState(camp_array ? camp_array[4] : '')
    const camp_info_string = `${shelter}-${sites}-${guests}-${vehicles}-${accessible}`
    // console.log(camp_array, 'checkout the camp array')

    //Essentials info form
    const essential_array = location?.essential_info.split('-')
    const [fires, setFires] = useState(essential_array ? essential_array[0] : '')
    const [bathrooms, setBathrooms] = useState(essential_array ? essential_array[1] : '')
    const [pets, setPets] = useState(essential_array ? essential_array[2] : '')
    const essential_info_string = `${fires}-${bathrooms}-${pets}`

    //Amenities info form
    const amenities_array = location?.amenities_info.split('-')
    const [tables, setTables] = useState(amenities_array ? amenities_array[0] : '')
    const [wifi, setWifi] = useState(amenities_array ? amenities_array[1] : '')
    const [bins, setBins] = useState(amenities_array ? amenities_array[2] : '')
    const [water, setWater] = useState(amenities_array ? amenities_array[3] : '')
    const [kitchen, setKitchen] = useState(amenities_array ? amenities_array[4] : '')
    const [showers, setShowers] = useState(amenities_array ? amenities_array[5] : '')
    const amenities_info_string = `${tables}-${wifi}-${bins}-${water}-${kitchen}-${showers}`

    //Details info form
    const arrivalOptions = ['Meet and greet', 'Make yourself at home']
    const details_array = location?.details_info.split('-')
    const [arrival, setArrival] = useState(details_array ? details_array[0] : '')
    const [checkin, setCheckin] = useState(details_array ? details_array[1] : '')
    const [checkout, setCheckout] = useState(details_array ? details_array[2] : '')
    const [minNights, setMinNights] = useState(details_array ? details_array[3] : '')
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
                <textarea placeholder='Location Description' value={description} onChange={e => setDescription(e.target.value)}></textarea>
                {/* fill this with sub-forms */}

                <label>
                    Campsite Information
                    <select id='camp-shelter' defaultValue={shelter} onChange={e => setShelter(e.target.value)}>
                        <option disabled value=''>--Select Shelter--</option>
                        {shelters.map(shelter => (
                            <option key={shelter} value={shelter}>{shelter}</option>
                        ))}
                    </select>
                    <input type='number' id='camp-sites' value={sites} placeholder='Number of Sites' onChange={e => setSites(e.target.value)}></input>
                    <input type='number' id='max-guests' value={guests} placeholder='Max Guests per Site' onChange={e => setGuests(e.target.value)}></input>
                    <input type='number' id='max-vehicles' value={vehicles} placeholder='Max Vehicles per Site' onChange={e => setVehicles(e.target.value)}></input>
                    <select id='camp-accessible' onChange={e => setAccessible(e.target.value)}>
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
                        <option> --Tables Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='wifi-available' value={wifi} onChange={e => setWifi(e.target.value)}>
                        <option> --Wifi Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='bins-available' value={bins} onChange={e => setBins(e.target.value)}>
                        <option> --Bins Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='water-available' value={water} onChange={e => setWater(e.target.value)}>
                        <option> --Water Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='kitchen-available' value={kitchen} onChange={e => setKitchen(e.target.value)}>
                        <option> --Kitchen Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                    <select id='showers-available' value={showers} onChange={e => setShowers(e.target.value)}>
                        <option> --Showers Available--</option>
                        <option value={true} readOnly>True</option>
                        <option value={false} readOnly>False</option>
                    </select>
                </label>
                <label>
                    Detail Information
                    <select id='arrival-method' value={arrival} onChange={e => setArrival(e.target.value)}>
                        <option value=''>--Select Arrival--</option>
                        {arrivalOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <input defaultValue={checkin} type='number' min='14' max='20' placeholder='Check in time' onChange={e => setCheckin(e.target.value)}></input>
                    <input defaultValue={checkout} placeholder='Check out time' type='number' min='8' max='12' onChange={e => setCheckout(e.target.value)}></input>
                    <input defaultValue={minNights} placeholder='Miniumum Nights' type='number' min='1' onChange={e => setMinNights(e.target.value)}></input>

                </label>

                <button type='submit' className='location-submit' onClick={onSubmit}>Submit</button>
            </form>
        </div >

    )
    else return (<h1>404 not found...</h1>)
}
export default EditLocationForm
