import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { DeleteReviewThunk, GetReviewsThunk } from '../../store/review';
import EditReviewForm from './EditReviewForm';
import ReviewForm from './ReviewForm';
import './reviews.css'

function Reviews({ locationId }) {
    const [showModal, setShowModal] = useState(false);

    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const reviews = useSelector(state => Object.values(state.reviews))
    const locationReviews = reviews.filter(review => review.location_id === +locationId)
    // const [reviewed, setReviewed] = useState(false)
    const [editing, setEditing] = useState(false)
    // const { locationId } = useParams()
    const locations = useSelector(state => Object.values(state.locations))
    const location = locations?.find(location => location.id == +locationId)
    const [usersArr, setUsersArr] = useState([]);
    // console.log('>>>>>>>>>>>>>> usersArr', usersArr)
    const matchUser = (userArr, id) => {//swap user_id for username
        return userArr?.find(user => user.id === id)?.username
    }
    let userReview;
    locationReviews.forEach(review => {
        if (user && review.user_id == user.id) {
            userReview = review
        }
    })


    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsersArr(responseData.users);
        }
        fetchData();
        console.log('dispatched to GetReviewsThunk')
        dispatch(GetReviewsThunk())
    }, [dispatch])


    function handleDelete(e) {
        e.preventDefault();
        let id = e.target.className.split('-')[1]
        dispatch(DeleteReviewThunk(id))
        dispatch(GetReviewsThunk())
        setShowModal(false)

    }

    return (
        <div id='review-component'>

            {/* add-review button goes here, will be conditionally available if no reviews by user*/}
            {!userReview && user.id !== location.user_id && (<ReviewForm locationId={locationId} />)}
            {locationReviews && locationReviews.map(review => (
                <div key={review.id} className='review-box'>

                    <div className='review-content' key={review.id}>

                        <div className='user-card'>
                            {review.recommends && (
                                <img src="https://i.imgur.com/rUN6XwH.png" className='user-image' />

                            )}
                            {!review.recommends && (
                                <img src="https://i.imgur.com/KrC8Fj5.png" className='user-image' />
                            )}

                        </div>
                        <div className='review-card'>
                            <div className='recommendation'>
                                <div className='user-name'>{matchUser(usersArr, review.user_id)}</div>
                                <div>{review.recommends ? ' recommends this listing.' : ' does not recommend this listing.'}</div>
                            </div>
                            <div>{review.content}</div>
                        </div>
                        {/* user-owned-review buttons go here */}

                    </div>
                    {user && user.id === review.user_id && (
                        <div className='owned-review-buttons'>
                            <button className={`edit-${review.id}`} onClick={() => setEditing(true)}>Edit</button>

                            {/* <button className={`delete-${review.id}`} onClick={handleDelete}>Delete</button> */}
                            <button onClick={() => setShowModal(true)}>Delete</button>

                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <p> Are you sure you want to delete your review?</p>
                                    <>
                                        <button className={`delete-${review.id}`} id='delete-location' onClick={handleDelete}>Delete</button>
                                        <button id='close-modal' onClick={() => setShowModal(false)}>Cancel</button>
                                    </>

                                </Modal>
                            )}
                        </div>
                    )}
                    {userReview === review && editing && (<EditReviewForm review={review} locationId={locationId} hide={() => setEditing(false)} />)}
                </div>
            ))
            }


            {/* 
            <div id='owner-description'>
                <div id='owner-card'>
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

 */}



        </div >
    )
}
export default Reviews
