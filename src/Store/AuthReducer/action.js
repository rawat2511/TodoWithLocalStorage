import axios from "axios"
import { setValueToken } from "../../Util/util";
import { SET_ERROR, SET_LOADING, USER_LOGIN, USER_LOGOUT } from "./actionTypes";


export const loginUser = (data) => async dispatch => {
    try {
        dispatch({type: SET_ERROR, payload: false});
        dispatch({type: SET_LOADING, payload: true});
        const {token} = await (await axios.post("https://reqres.in/api/login", data)).data;
        console.log(token);
        setValueToken("token", token);
        dispatch({type: SET_LOADING, payload: false});
        dispatch({type: USER_LOGIN});
    }
    catch(e) {
        console.log(e);
        dispatch({type: SET_LOADING, payload: false});
        dispatch({type: SET_ERROR, payload: true});
    }
}

export const logoutUser = () => {
    return (
        {
            type: USER_LOGOUT
        }
    )
}