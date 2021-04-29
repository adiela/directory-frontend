import {types} from "../actions";

const initialState = {}

export default function resourceReducer (state = initialState, action) {
    let resource;
    switch (action.type) {
        case types.GET_ITEM:
            return { ...state, [action.payload.url]: action.payload.data };
        case types.GET_COLLECTION:
            return { ...state, [action.payload.url]: action.payload.data };
        default:
            return state
    }
}