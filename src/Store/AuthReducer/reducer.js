import { getValueToken, setValueToken } from "../../Util/util";
import { SET_ERROR, SET_LOADING, USER_LOGIN, USER_LOGOUT } from "./actionTypes";

const initState = {
    token: getValueToken("token"), 
    isLoggedIn: getValueToken("token") ? true : false,
    error: false, 
    loading: false
};

export const authReducer = (state=initState, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case USER_LOGIN:
            const t = getValueToken("token");
            return {
                ...state,
                token: t,
                isLoggedIn: true
            }
        case USER_LOGOUT:
            setValueToken("token", "");
            return {
                ...state,
                token: "",
                isLoggedIn: false
            }
        default:
            return state
    }
}