import {checkLogin} from "./authReducer";

const INITIALIZED = "INITIALIZED";

let initialState = {
    initialize: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED:
            return {
                ...state,
                initialize: true
            };
        default:
            return state;
    }
}

export const setInitialized = () => ({type: INITIALIZED});

export const initialized = () => async (dispatch) => {
    let getAuthProfile = dispatch(checkLogin())

    await Promise.all([getAuthProfile])

    dispatch(setInitialized())
}


export default appReducer;