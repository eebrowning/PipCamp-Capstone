import React, { useState } from 'react';
import { CreateReviewsThunk } from '../../store/review';
import { useDispatch, useSelector } from 'react-redux'
import './review-form.css'

function ReviewForm({ locationId, hide }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const [content, setContent] = useState('');
    const [recommends, setRecommends] = useState(1);
    const [errors, setErrors] = useState([]);

    async function onSubmit(e) {
        setErrors([])
        e.preventDefault();
        const review = {
            user_id: +user.id,
            location_id: +locationId,
            content,
            recommends
        }
        // console.log('>> Submitted location information:', review);
        const newReview = await dispatch(CreateReviewsThunk(review))
        if (!newReview) {
            hide()
        } else {
            await setErrors(newReview)
            // console.log('>>> errors in review form', errors)
        }

        return newReview
    }

    return (
        <div id='review-form-box'>
            <form id='review-form' onSubmit={onSubmit}>
                <div id='review-errors'>
                    {errors.length > 0 && errors.map(error =>
                        <div key={error} className="review-error">{error}</div>
                    )}
                </div>

                <textarea className='review-content' name='content' value={content} placeholder="Leave your review here!" onChange={e => setContent(e.target.value)}></textarea>

                <div id='recommend-box'>
                    <p>Recommended: </p><select required type='bool' className='review-recommends' name='recommends' onChange={e => setRecommends(e.target.value)}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </div>
                <div className='review-actions'>
                    <button id='review-form-button' type='submit' >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm
