import axios from 'axios';
import { GET_API } from "./types";

//GET API
export const getApi = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_API,
                payload: res.data
            })
        }).catch(err => console.log(err));
}