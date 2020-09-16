import Api from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER = 'SET_AUTH_USER';
const DEL_AUTH_USER = 'DEL_AUTH_USER';

let initialState = {
    user: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                user: action.user,
                isAuth: true
            };
        case DEL_AUTH_USER:
            return {
                user: null,
                isAuth: false
            };
        default:
            return state;
    }
}

export const setAuthUser = (user) => ({type: SET_AUTH_USER, user});
export const delAuthUser = () => ({type: DEL_AUTH_USER});

export const login = (username, password, rememberMe) => async (dispatch) => {

    let data = (await Api.login(username, password))?.data

    if (data === undefined) {
        dispatch(stopSubmit("login", {_error: "Server not responding. Please try again later"}))
        return;}

    if (data.payload !== undefined &&
        data.responseStatus.resultCode === 200)

        dispatch(setAuthUser(data.payload));
    else
        dispatch(stopSubmit("login", {_error: data.responseStatus.message}))
}

export const checkLogin = () => async (dispatch) => {
    let response = await Api.checkLogin();
    let data = response?.data;
    if (data !== undefined && data.payload !== undefined)
        dispatch(setAuthUser(data.payload));
    return response;
}

export const logout = () => (dispatch) => {
    Api.logout();
    dispatch(delAuthUser());
}

export default authReducer;