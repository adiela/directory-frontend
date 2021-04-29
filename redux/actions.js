import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});

// REDUX ACTION TYPES
export const types = {
    GET_ITEM: 'GET_ITEM',
    GET_COLLECTION: 'GET_COLLECTION',
}

export const getItem = (resourceType, id) => (dispatch) => {
    const url = `${resourceType}/${id}`;
    instance
        .get(url)
        .then((response) => dispatch({ type: types.GET_ITEM, payload: { url: url,  data: response.data} }))
        .catch((error) => console.log(error));
};

export const getCollection = (resourceType) => (dispatch) => {
    const url = `${resourceType}/`;
    instance
        .get(url)
        .then((response) => dispatch({ type: types.GET_COLLECTION, payload: { url: url, data: response.data }}))
        .catch((error) => console.log(error));
};
