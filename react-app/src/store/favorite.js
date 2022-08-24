const GET_FAVORITE_LOCATIONS = 'get/favoriteLocations'
const GET_ALL_FAVORITES = 'get/allFavoriteLocations'
const POST_FAVORITE_LOCATION = 'post/favoriteLocation'
const DELETE_FAVORITE_LOCATION = 'delete/favoriteLocation'


const get = (payload) => ({
    type: GET_FAVORITE_LOCATIONS,
    payload,
});

const getAll = (payload) => ({
    type: GET_ALL_FAVORITES,
    payload
});

const favorite = (payload) => ({
    type: POST_FAVORITE_LOCATION,
    payload
});

const deleteFavorite = (payload) => ({
    type: DELETE_FAVORITE_LOCATION,
    payload
});


export const GetFavoritesThunk = (userId, id) => async dispatch => {

    const response = await fetch(`/api/locations/favorites/${userId}/${id}`)
    if (response.ok) {
        const data = await response.json();
        dispatch(get(data))
        return data
    } else {
        return 'You had a bad response'
    }
}

export const GetAllFavoritesThunk = (userId) => async dispatch => {
    const response = await fetch(`/api/locations/favorites/${userId}`)
    if (response.ok) {
        const data = await response.json();
        dispatch(getAll(data.favorites));
        return data;
    } else {
        return 'Bad request'
    }
}

export const SetFavoriteThunk = (payload) => async dispatch => {
    const res = await fetch('/api/locations/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(favorite(data));
        return data;
    };
};

export const DeleteFavoriteThunk = (payload) => async dispatch => {
    const { user_id, location_id } = payload
    const res = await fetch(`/api/locations/${user_id}/${location_id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(deleteFavorite(data));
        return data;
    };
};


const favoriteReducer = (state = {}, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_FAVORITE_LOCATIONS:
            newState = {}
            if (action.payload["message"]) {
                return newState

            }
            newState[action.payload.location_id] = action.payload
            return newState;

        case GET_ALL_FAVORITES:
            newState = {}
            action.payload.forEach(favorite => {
                newState[favorite.id] = favorite
            });
            return newState;

        case POST_FAVORITE_LOCATION:
            newState[action.payload.location_id] = action.payload;
            return newState;

        case DELETE_FAVORITE_LOCATION:
            delete newState[action.payload.location_id];
            return newState;
        default:
            return state;
    };
};

export default favoriteReducer;
