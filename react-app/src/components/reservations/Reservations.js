import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetReservationThunk, DeleteReservationThunk } from '../../store/reservation'
import { useParams } from 'react-router-dom'

import { GetLocationsThunk } from '../../store/location';

function Reservation() {
    const dispatch = useDispatch()
    const signedInUserId = useSelector(state => state.session.user?.id)
    const { userId } = useParams()

    console.log()
    const reservations = useSelector(state => Object.values(state.reservations).filter(reservation => reservation.user_id = userId))
    const locations = useSelector(state => Object.values(state.locations))

    useEffect(() => {
        dispatch(GetLocationsThunk())
        dispatch(GetReservationThunk(userId))
    }, [dispatch, userId]);

    //Delete / cancel a reservation
    async function deleteRes(e) {
        e.preventDefault()
        const deleteNum = e.target.className.split('_')[1]
        await dispatch(DeleteReservationThunk(deleteNum))
    }


    return (
        <div id='user-reservations'>

            <div className='UDReservationCardContainer'>
                {signedInUserId && reservations && reservations.map(reservation => (
                    <div className='reservationCard' key={reservation.id}>
                        <div key={reservation.id}>
                            <div>{locations.find(location => location.id === reservation.location_id)?.name}</div>
                            <div>Start Date: {reservation.res_date_start}</div>
                            <div>End Date: {reservation.res_date_end}</div>
                            <div>Reservation Id: {reservation.id}</div>
                            <button className={`del_${reservation.id}`} onClick={deleteRes}>Cancel Reservation</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )

}

export default Reservation
