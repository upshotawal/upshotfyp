import { GET_API } from "../actions/types.js";

const initialState = {
    api: []
}



export default function(state = initialState, action) {
    switch (action.type) {
        case GET_API:
            return {
                ...state,
                leads: action.payload
            }

        default:
            return state;
    }
}