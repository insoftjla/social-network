import Api from "../api/api";
import {toggleIsFetch} from "./usersReducer";

const SET_NEW_POST = "PROFILE_REDUCER/SET_NEW_POST";
const SET_USER_PROFILE = "PROFILE_REDUCER/SET_USER_PROFILE";

let initialState = {
    postData: [
        {id: 1, text: 'My first post', like: 20},
        {id: 2, text: 'My second post', like: 30}
    ],
    userProfile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_POST:
            let newPost = {
                id: 5,
                text: action.newText,
                like: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.profile
            };
        default:
            return state;
    }
}

export const setNewPost = (newText) =>
    ({type: SET_NEW_POST, newText});

export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});

export const getUserById = (id) => async (dispatch) => {

    dispatch(toggleIsFetch(true));

    let data = (await Api.getUserById(id)).data;

    if (data.responseStatus.resultCode === 200) {
        dispatch(setUserProfile(data.payload));
    }
    dispatch(toggleIsFetch(false));
}

export default profileReducer;