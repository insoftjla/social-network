import Api from "../api/api";
import {updateObjectInArray} from "../util/helperUpdate";

const FOLLOW = 'USER_REDUCER/FOLLOW';
const UNFOLLOW = 'USER_REDUCER/UNFOLLOW';
const SET_USERS = 'USER_REDUCER/SET_USERS';
const SET_CURRENT_PAGE = 'USER_REDUCER/SET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'USER_REDUCER/SET_TOTAL_PAGES';
const TOGGLE_IS_FETCH = 'USER_REDUCER/TOGGLE_IS_FETCH';

let initialState = {
    users: [],
    pageSize: 10,
    totalPages: 0,
    currentPage: 1,
    isFetching: false

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users, "id", action.userId, {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users, "id", action.userId, {followed: false})
            };
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            }
        case SET_TOTAL_PAGES:
            return {
                ...state, totalPages: action.totalPages
            }
        case TOGGLE_IS_FETCH:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalPages = (totalPages) => ({type: SET_TOTAL_PAGES, totalPages});
export const toggleIsFetch = (isFetching) => ({type: TOGGLE_IS_FETCH, isFetching});

export const loadUsers = (page, size) => async (dispatch) => {
    dispatch(toggleIsFetch(true));
    dispatch(setCurrentPage(page));

    let data = (await Api.getUsers(page, size)).data;

    dispatch(setUsers(data.payload.content));
    dispatch(setTotalPages(data.payload.totalPages));
    dispatch(toggleIsFetch(false));
}


export default usersReducer;
