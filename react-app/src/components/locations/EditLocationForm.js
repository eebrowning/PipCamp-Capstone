import React, { useEffect, useState } from 'react';
import { EditLocationThunk, GetLocationDetailThunk, GetLocationsThunk } from '../../store/location';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import './location-form.css'

export function EditLocationForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const userId = useSelector(state => state.session.user?.id)
    const { locationId } = useParams()
    const location = useSelector(state => state.locations[locationId])
    const [name, setName] = useState('')
    const [image_1_url, setImage_1_url] = useState('')
    const [image_2_url, setImage_2_url] = useState('')
    const [description, setDescription] = useState('')
    // const [campsite_info, setCampsite_info] = useState('')
    // const [essential_info, setEssential_info] = useState('')
    // const [amenities_info, setAmenities_info] = useState('')
    // const [details_info, setDetails_info] = useState('')
    const [errors, setErrors] = useState([])

    //Camp info form
    const shelters = ['Tent', "Recreational Vehicle", 'Lodge']
    const [shelter, setShelter] = useState('')
    const [sites, setSites] = useState('')
    const [guests, setGuests] = useState('')
    const [vehicles, setVehicles] = useState('')
    const [accessible, setAccessible] = useState('')
    const camp_info_string = `${shelter}-${sites}-${guests}-${vehicles}-${accessible}`

    //Essentials info form
    const [fires, setFires] = useState()
    const [bathrooms, setBathrooms] = useState()
    const [pets, setPets] = useState()
    const essential_info_string = `${fires}-${bathrooms}-${pets}`

    //Amenities info form
    const [tables, setTables] = useState()
    const [wifi, setWifi] = useState()
    const [bins, setBins] = useState()
    const [water, setWater] = useState()
    const [kitchen, setKitchen] = useState()
    const [showers, setShowers] = useState()
    const amenities_info_string = `${tables}-${wifi}-${bins}-${water}-${kitchen}-${showers}`

    //Details info form
    const arrivalOptions = ['Meet and greet', 'Make yourself at home']
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
        console.log('>>>>>>>>>');
        console.log('>> Submitted location information:', updatedLocation);
        console.log('>>>>>>>>>');

        const newLocation = await dispatch(EditLocationThunk(updatedLocation))
        if (!newLocation) {
            history.push(`/locations/${locationId}`)
        } else {
            setErrors(newLocation)
        }
    }

    useEffect(() => {
        dispatch(GetLocationDetailThunk(locationId))
        dispatch(GetLocationsThunk())
    }, [dispatch])


    if (location) return (
        <div id='location-form-container'>
            <h2 id='location-form-title'>Edit {location.name}:</h2>

            <form id='location-form' onSubmit={onSubmit}>
                {errors.length > 0 && errors.map(error =>
                    <div key={error} className="location-error">{error}</div>
                )}
                <input type='text' name='name' placeholder='Location Name' onChange={e => setName(e.target.value)}></input>
                <input type='text' name='image_1_url' placeholder='Main Image' onChange={e => setImage_1_url(e.target.value)}></input>
                <input type='text' name='image_2_url' placeholder='Secondary Image(optional)' onChange={e => setImage_2_url(e.target.value)}></input>
                <textarea placeholder='Location Description' onChange={e => setDescription(e.target.value)}></textarea>
                {/* fill this with sub-forms */}

                <label>
                    Campsite Information
                    <select id='camp-shelter' onChange={e => setShelter(e.target.value)}>
                        <option value=''>--Select Shelter--</option>
                        {shelters.map(shelter => (
                            <option key={shelter} value={shelter}>{shelter}</option>
                        ))}
                    </select>
                    <input type='number' id='camp-sites' placeholder='Number of Sites' onChange={e => setSites(e.target.value)}></input>
                    <input type='number' id='max-guests' placeholder='Max Guests per Site' onChange={e => setGuests(e.target.value)}></input>
                    <input type='number' id='max-vehicles' placeholder='Max Vehicles per Site' onChange={e => setVehicles(e.target.value)}></input>
                    <select id='camp-accessible' onChange={e => setAccessible(e.target.value)}>
                        <option> --Disabled Accessible</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>

                </label>
                <label>
                    Essential Information
                    <select id='fires-allowed' onChange={e => setFires(e.target.value)}>
                        <option> --Fires Allowed--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <select id='bathroom-available' onChange={e => setBathrooms(e.target.value)}>
                        <option> --Bathrooms--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <select id='pets-allowed' onChange={e => setPets(e.target.value)}>
                        <option> --Pets Allowed--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </label>
                <label>
                    Amenities Information
                    <select id='tables-available' onChange={e => setTables(e.target.value)}>
                        <option> --Tables Available--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <select id='wifi-available' onChange={e => setWifi(e.target.value)}>
                        <option> --Wifi Available--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <select id='bins-available' onChange={e => setBins(e.target.value)}>
                        <option> --Bins Available--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <select id='water-available' onChange={e => setWater(e.target.value)}>
                        <option> --Water Available--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <select id='kitchen-available' onChange={e => setKitchen(e.target.value)}>
                        <option> --Kitchen Available--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                    <select id='showers-available' onChange={e => setShowers(e.target.value)}>
                        <option> --Showers Available--</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </label>
                <label>
                    Detail Information
                    <select id='arrival-method' onChange={e => setArrival(e.target.value)}>
                        <option value=''>--Select Arrival--</option>
                        {arrivalOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    <input type='number' min='14' max='20' placeholder='Check in time' onChange={e => setCheckin(e.target.value)}></input>
                    <input placeholder='Check out time' type='number' min='8' max='12' onChange={e => setCheckout(e.target.value)}></input>
                    <input placeholder='Miniumum Nights' type='number' min='1' onChange={e => setMinNights(e.target.value)}></input>

                </label>

                <button type='submit' className='location-submit' onClick={onSubmit}>Submit</button>
            </form>
        </div >

    )
    else return (<h1>404 not found...</h1>)
}
export default EditLocationForm
