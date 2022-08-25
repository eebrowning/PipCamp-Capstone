import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Favorites from './favorites/Favorites';
import Reservation from './reservations/Reservations';
import { GetReservationThunk } from './../store/reservation';
import { useDispatch } from 'react-redux';
import './user.css'

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
    dispatch(GetReservationThunk(userId))

  }, [userId, dispatch]);

  if (!user) {
    return null;
  }

  return (
    <div id='user-profile'>
      <ul id='user-details'>
        <h3 style={{ padding: '15px', borderBottom: '1px solid whitesmoke' }}>
          Account Info
        </h3>
        <div id='account-info'>
          <li>
            <strong>User Id: </strong> {userId}
          </li>
          <li>
            <strong>Username: </strong> {user.username}
          </li>
          <li>
            <strong>Email: </strong> {user.email}
          </li>
        </div>
      </ul>
      <div id='user-main'>

        <div className=''>
          <h3>Favorites</h3>
          <Favorites id='user-favorites' />
        </div>

        <div className=''>
          <h3>Reservations</h3>
          <Reservation id='user-reservations' />
        </div>

      </div>
    </div>
  );
}
export default User;
