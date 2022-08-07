import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteReviewThunk, GetReviewsThunk } from '../../store/review';
import EditReviewForm from './EditReviewForm';
import ReviewForm from './ReviewForm';
import './reviews.css'

function Reviews({ locationId }) {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const reviews = useSelector(state => Object.values(state.reviews))
    const locationReviews = reviews.filter(review => review.location_id === +locationId)
    // const [reviewed, setReviewed] = useState(false)
    const [editing, setEditing] = useState(false)
    let userReview;
    locationReviews.forEach(review => {
        if (user && review.user_id == user.id) {
            userReview = review
        }
    })


    useEffect(() => {
        console.log('dispatched to GetReviewsThunk')
        dispatch(GetReviewsThunk())
    }, [dispatch])


    function handleDelete(e) {
        e.preventDefault();
        let id = e.target.className.split('-')[1]
        dispatch(DeleteReviewThunk(id))
    }

    return (
        <div id='review-component'>
            {/* add-review button goes here, will be conditionally available if no reviews by user*/}
            {!userReview && (<ReviewForm locationId={locationId} />)}
            {locationReviews && locationReviews.map(review => (
                <div key={review.id}>
                    <div>{review.user_id}</div>
                    <div>{review.content}</div>
                    <div>{review.recommends ? 'Recommended' : 'Not Recommended'}</div>
                    {/* user-owned-review buttons go here */}
                    {userReview === review && editing && (<EditReviewForm review={review} locationId={locationId} hide={() => setEditing(false)} />)}
                    {user && user.id === review.user_id && (
                        <div className='owned-review-buttons'>
                            <button className={`edit-${review.id}`} onClick={() => setEditing(true)}>Edit</button>
                            <button className={`delete-${review.id}`} onClick={handleDelete}>Delete</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
export default Reviews
