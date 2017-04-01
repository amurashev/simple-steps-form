

import {
    USERS_GET_REQUEST,
    USERS_GET_RESPONSE_SUCCESS,

    USERS_LOAD_MORE_REQUEST,
    USERS_LOAD_MORE_RESPONSE_SUCCESS,
} from '../constants';



export function loadUsers(loadMore = false) {
    return (dispatch, getState) => {

        dispatch({
            type: loadMore ? USERS_LOAD_MORE_REQUEST : USERS_GET_REQUEST
        });

       return Promise.resolve().then(response => {
            dispatch({
                type: loadMore ? USERS_LOAD_MORE_RESPONSE_SUCCESS : USERS_GET_RESPONSE_SUCCESS,
                data: []
            });
        })
    }
}


