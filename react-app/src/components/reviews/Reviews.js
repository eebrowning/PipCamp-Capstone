import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetReviewsThunk } from '../../store/review';
import './reviews.css'

function Reviews() {
    const dispatch = useDispatch()
    const reviews = useSelector(state => Object.values(state.reviews))

    useEffect(() => {
        console.log('dispatched to GetReviewsThunk')
        dispatch(GetReviewsThunk())
    }, [])

    console.log(reviews, 'here are reviews')

    return (<div>
        {reviews && reviews.map(review => (

            <div key={review.id}>
                <div>{review.user_id}</div>
                <div>{review.content}</div>
                <div>{review.recommends}</div>

            </div>

        ))}

    </div>)
}
export default Reviews
