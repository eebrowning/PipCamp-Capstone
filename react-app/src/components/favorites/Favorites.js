import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllFavoritesThunk, DeleteFavoriteThunk } from '../../store/favorite';
import { Link } from 'react-router-dom';
import './favorites.css'
const Favorites = () => {
    const dispatch = useDispatch();

    const userId = useSelector(state => state.session.user.id);
    const favorites = useSelector(state => Object.values(state.favorites))

    //Grab a user's favorites
    useEffect(() => {
        dispatch(GetAllFavoritesThunk(userId))
    }, [dispatch, userId]);

    return (
        <div id='user-favorites'>


            <div className='favorite-card-box'>
                {favorites.map(favorite => (
                    <div key={favorite.id} className='favorite-card'>
                        <Link to={`/locations/${favorite.id}`}>{favorite.name}</Link>

                        <button className="remove-fav" onClick={async () => {
                            const fav = {
                                user_id: userId,
                                location_id: favorite.id
                            }
                            await dispatch(DeleteFavoriteThunk(fav))
                        }}>Remove From Favorites</button>
                    </div>
                ))}
            </div>

        </div>
    )
};

export default Favorites;
