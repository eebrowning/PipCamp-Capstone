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
  let [showHideFav, setShowHideFav] = useState('none');
  let [showHideRes, setShowHideRes] = useState('');

  const handleShowFav = () => {
    if (showHideFav === 'none') setShowHideFav('')
    if (showHideRes !== 'none') setShowHideRes('none')

  }
  const handleShowRes = () => {
    if (showHideRes === 'none') setShowHideRes('')
    if (showHideFav !== 'none') setShowHideFav('none')
  }



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
            <strong>Username: </strong> {user.username}
          </li>
          <li>
            <strong>User Id: </strong> {userId}
          </li>
          <li>
            <strong>Email: </strong> {user.email}
          </li>
        </div>
      </ul>
      <div id='user-main'>
        <div id='profile-nav'>

          <h3 style={{ borderBottom: `${showHideRes !== 'none' ? '3px solid black' : ''}` }} onClick={handleShowRes}>Reservations</h3>
          <h3 style={{ borderBottom: `${showHideFav !== 'none' ? '3px solid black' : ''}` }} onClick={handleShowFav}>Favorites</h3>
        </div>

        <div style={{ display: `${showHideRes}` }}>
          <Reservation id='user-reservations' />
        </div>
        <div style={{ display: `${showHideFav}`, }}>
          <Favorites id='user-favorites' />
        </div>


      </div>
    </div>
  );
}
export default User;
