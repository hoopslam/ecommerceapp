import {SET_CURRENT_USER} from '../CONSTANTS'

export const setCurrentUser = user => ({
    type: SET_CURRENT_USER,
    payload: user
})