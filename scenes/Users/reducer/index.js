import initialState from './initialState'
import { FETCH_USERS, FETCH_USERS_MORE } from '../constants/actionTypes'


export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
        case FETCH_USERS_MORE:
            return {
                ...state,
                data: {
                    ...state.data,
                    status: action.status,
                    items: action.status === 'fetched'
                        ? action.items
                        : state.data.items
                }
            }
            break

        default:
            return state
    }
}
