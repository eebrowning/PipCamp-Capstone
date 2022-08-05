import React, { useEffect, useState } from 'react';
import { CreateReviewsThunk } from '../../store/review';
import { useDispatch, useSelector } from 'react-redux'
import './review-form.css'

function ReviewForm({ locationId, hide }) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.session.user)

    const [content, setContent] = useState('');
    const [recommends, setRecommends] = useState(1);
    const [errors, setErrors] = useState([]);

    function onClick() {
        hide()
    }

    async function onSubmit(e) {
        e.preventDefault();

        const review = {
            user_id: +user.id,
            location_id: +locationId,
            content,
            recommends
        }
        // console.log('this is the review you want', review)
        const newReview = await dispatch(CreateReviewsThunk(review))
        if (newReview) {
            hide()
        }
        return newReview
    }
    useEffect(() => {
        const arr = []

        setErrors(arr)
    }, [content]);

    return (
        <div className='review-form'>
            <form onSubmit={onSubmit}>
                <div>
                    {errors.length > 0 && errors.map(error =>
                        <div key={error} className="review-error">{error}</div>
                    )}
                </div>
                <div>
                    <textarea className='review-content' name='content' value={content} placeholder="Leave your review here!" onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <div className='review-rating'>
                    <p>Recommended: </p><select required type='bool' className='review-recommends' name='recommends' onChange={e => setRecommends(e.target.value)}>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                </div>
                <div className='review-actions'>
                    <button type='submit' disabled={errors.length === 0 ? false : true}>Submit</button>
                    <button onClick={onClick}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm
