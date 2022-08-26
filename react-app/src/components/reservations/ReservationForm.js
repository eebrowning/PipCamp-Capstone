import React, { useState, useEffect } from 'react';
import { CreateReservationThunk } from '../../store/reservation'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, NavLink } from 'react-router-dom'
import './reservation-form.css'

function ReservationForm() {
    const dispatch = useDispatch();
    const history = useHistory();

    const userId = useSelector(state => state.session.user?.id);
    const { locationId } = useParams();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const [errors, setErrors] = useState([]);
    const [errorsB, setErrorsB] = useState([]);
    const location = useSelector(state => state.locations[locationId])


    // Form select field contains times starting from opening to closing in half hour increments
    async function onSubmit(e) {
        e.preventDefault();
        const reservation = {
            user_id: userId,
            location_id: +locationId,
            res_date_start: startDate,
            res_date_end: endDate,

        }

        const newRes = await dispatch(CreateReservationThunk(reservation))
        if (!newRes) {
            history.push(`/users/${userId}`)
        } else {
            setErrorsB(newRes)
        }
    }

    //wut?
    function onClick() {
        history.push('/login')
    }

    useEffect(() => {
        // Prevent users from setting invalid reservation dates
        const reservedStartDate = new Date(`${startDate}`)
        const current = Date.now();
        const arr = []

        setErrors(arr)
    }, [locationId, location])

    if (userId) {
        return (
            <div id='reservation-form-component'>
                <div className='reservation-form-container'>
                    <form id='reservation-form' onSubmit={onSubmit}>
                        <h3 id='reservation-banner'>Tell us when you'll be there!</h3>

                        <div id='reservation-dates'>

                            <div className='reservation-date-field'>
                                <p>Check in </p><input type='date' name='start-date' onChange={(e) => setStartDate(e.target.value)}></input>
                            </div>
                            <div className='reservation-date-field'>
                                <p>Check out </p><input type='date' name='end-date' onChange={(e) => setEndDate(e.target.value)}></input>
                            </div>
                        </div>
                        < h3 id='reservation-banner'>
                            <>
                                Free of charge, as it's your game
                            </>
                        </h3>
                        <button className='reservation-submit' type='submit' disabled={errors.length === 0 ? false : true}>Submit</button>
                    </form>
                </div>
                <div id='under-block'>
                    {/* <img id='camp-img' src='https://i.imgur.com/9H2OQft.png' /> */}
                    <div id='reservation-errors'>
                        {errors.length === 0 && (
                            <div style={{ color: "#447AB9", fontSize: '12px', paddingBottom: '5px' }}>Didn't find your place? Create your <NavLink className={'navlink'} to='/new-location' exact={true} activeClassName='active'>
                                Location
                            </NavLink> now</div>
                        )}
                        {errors.length > 0 && errors.map(error =>
                            <div key={error} className="reservation-error">{error}</div>
                        )}
                        {errorsB.length > 0 && errorsB.map(error =>
                            <div key={error} className="reservation-error">{error}</div>
                        )}
                    </div>

                </div>
            </div>
        );
    } else {
        return (
            <div id='reservation-form-component'>
                <div className='reservation-form-container'>
                    <form id='reservation-form' onSubmit={onClick}>
                        <h3 id='reservation-banner'>Tell us when you'll be there!</h3>

                        <div id='reservation-dates'>

                            <div className='reservation-date-field'>
                                <p>Check in </p><input type='date' name='start-date' onChange={(e) => setStartDate(e.target.value)}></input>
                            </div>
                            <div className='reservation-date-field'>
                                <p>Check out </p><input type='date' name='end-date' onChange={(e) => setEndDate(e.target.value)}></input>
                            </div>
                        </div>
                        < h3 id='reservation-banner'>
                            <>
                                Free of charge, as it's your game
                            </>
                        </h3>
                        <button className='reservation-submit' type='submit' disabled={errors.length === 0 ? false : true}>Submit</button>
                    </form>
                </div>
                <div id='under-block'>
                    {/* <img id='camp-img' src='https://i.imgur.com/9H2OQft.png' /> */}
                    <div id='reservation-errors'>
                        {errors.length === 0 && (
                            <div style={{ color: "#447AB9", fontSize: '12px', paddingBottom: '5px' }}>Didn't find your place? Create your <NavLink className={'navlink'} to='/new-location' exact={true} activeClassName='active'>
                                Location
                            </NavLink> now</div>
                        )}
                        {errors.length > 0 && errors.map(error =>
                            <div key={error} className="reservation-error">{error}</div>
                        )}
                        {errorsB.length > 0 && errorsB.map(error =>
                            <div key={error} className="reservation-error">{error}</div>
                        )}
                    </div>

                </div>
            </div>
        )
    }

}

export default ReservationForm
