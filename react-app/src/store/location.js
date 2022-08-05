const GET_LOCATIONS = '/get/locations'
const GET_LOCATION = '/get/location'
// const SEARCH_LOCATIONS = '/get/searchLocations'
const CREATE_LOCATION = '/post/location '
const EDIT_LOCATION = '/edit/location'
const DELETE_LOCATION = '/delete/location'

const getLocations = (locations) => ({
    type: GET_LOCATIONS,
    locations
});

const getLocation = (location) => ({
    type: GET_LOCATION,
    location
});

const createLocation = (location) => ({
    type: CREATE_LOCATION,
    location
});

const editLocation = (location) => ({
    type: EDIT_LOCATION,
    location
});

const deleteLocation = (location) => ({
    type: DELETE_LOCATION,
    location
});

//later, get passing first
// const searchLocations = (locations) => ({
//     type: SEARCH_LOCATIONS,
//     locations
// });

//works!!
export const GetLocationsThunk = () => async (dispatch) => {
    const response = await fetch('/all/locations')
    if (response.ok) {
        const data = await response.json()
        dispatch(getLocations(data.locations))
        return data
    }
}

//need to test
export const GetLocationDetailThunk = (id) => async (dispatch) => {
    // console.log('in GetLocationDetailThunk')
    const response = await fetch(`/api/locations/${id}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(getLocation(data))
        return data
    }

}

//works!
export const CreateLocationThunk = (location) => async (dispatch) => {
    console.log('>>> entered Create Location Thunk <<<')
    const response = await fetch(`/api/locations/new_location`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(location)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(createLocation(data))
        return null
    } else if (response.status <= 500) {
        const data = await response.json();
        if (data.errors) {
            console.log(data.errors, '<<<<< data.errors from CreateLocationThunk')
            return data.errors;
        }
    }
}

//Works!
export const EditLocationThunk = (location) => async (dispatch) => {
    console.log(location, 'in EditLocationThunk')
    const response = await fetch(`/api/locations/${location.id}/edit`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(location)
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(editLocation(data))
        return null
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
            return data.errors;
        }
    }
}


//works, needs route
export const DeleteLocationThunk = (id) => async (dispatch) => {
    console.log('>>> in DeleteLocationThunk <<<')
    const response = await fetch(`/api/locations/${id}/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(deleteLocation(data))
        return data
    } else {
        console.log({ "message": "Unsuccessful" })
    }
}


//worry about this later
// export const SearchLocationsThunk = (params) => async (dispatch) => {
//     const response = await fetch(`/api/locations/search`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(params)
//     });
//     if (response.ok) {
//         const data = await response.json();
//         dispatch(searchRestaurants(data.locations));
//         return data;
//     } else {
//         return { "Message": "Unsuccessful" }
//     }
// };


// REDUCER--- CREATE EXPORT AND ADD TO index.js
let initialState = {}
const locationReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_LOCATIONS:
            action.locations.forEach(location => newState[location.id] = location)
            return newState;

        case GET_LOCATION:
            console.log('in get_location reducer')
            let get_loc_state = { ...state }
            get_loc_state[action.location.id] = action.location
            return get_loc_state;

        case CREATE_LOCATION:
            newState[action.location.id] = action.location
            return newState;

        case EDIT_LOCATION:
            console.log(action.location, "action...EDIT_LOCATION... in locationReducer")

            newState[action.location.id] = action.location
            return newState
        case DELETE_LOCATION:
            delete newState[action.location.id]
            return newState
        default:
            return state
    }
}
export default locationReducer
