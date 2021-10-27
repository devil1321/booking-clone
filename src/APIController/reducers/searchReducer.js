import { SET_ID, SET_CHECKIN, SET_CHECKOUT } from '../types'

const initData = {
    name: 'warsaw',
    id: null,
    checkin: null,
    checkout: null,
    rooms: 1,
    adult: 1
}

export default (state = initData, action) => {
    switch (action.type) {
        case SET_ID:
            return {
                ...state
            }
        case SET_CHECKIN:
            return {
                ...state
            }
        case SET_CHECKOUT:
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}