import initialState from './initialState'
import { GET_USER_DATA } from '../constants/actionTypes'

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_USER_DATA: {
            return {
                ...action.data
            }
        }
            break

        default:
            return state
    }
}
