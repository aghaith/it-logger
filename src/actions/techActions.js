import { 
    GET_TECHS, 
    ADD_TECH, 
    DELETE_TECH, 
    SET_LOADING, 
    TECHS_ERROR 
} from './types';

// Get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const url = `${process.env.REACT_APP_BASE_URL}/techs`
        const res = await fetch(url);
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    } 
};

// Add technician to server
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();

        const url = `${process.env.REACT_APP_BASE_URL}/techs`
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    } 
};

export const deleteTech = id => async dispatch => {
    try {
        setLoading();

        const url = `${process.env.REACT_APP_BASE_URL}/techs/${id}`
        await fetch(url, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        });
    } 
};

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};